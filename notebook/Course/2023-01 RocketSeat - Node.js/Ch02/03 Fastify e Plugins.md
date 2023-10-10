#fastify 

Os Plugins são funcionalidades que podem ser adicionadas gradativamente e que facilitam o gerenciamento isolado de determinadas funções.
No caso do `Fastify` podemos utilizar plugins para manter as rotas separadas do arquivo principal do servidor.
```typescript
// src/routes/routeTransactions
import knex from '@lib/knex'

const routeTransactions = async (app: FastifyInstance) => {
	app.get('/', async () => {
		const transactions = await knex('transactions').select('*')
		return transactions
	})
}

export default routeTransactions
```
Para integrar essa rota ao servidor:
```typescript
import fastify from 'fastify'
import { env } from '../env'

const app = fastify()

app.register(routeTransactions)

app.listen({
	port: process.env.PORT
}).then(() => console.log('Server is running on PORT ' + process.env.PORT))
```
Todo plugin do `fastify` precisa ser uma função assíncrona.

Podemos também adicionar um prefixo a todas as rotas de uma determinada rota:
```typescript
app.register(routeTransactions, {
	preffix: '/transactions'
})
```


```typescript
import { z } from 'zod'
import { knex } from '@lib/database'
import { randomUUID } from 'node:crypto'

const routeTransactions = async (app: FastifyInstance) => {
	app.get('/', async () => {
		const transations = await knex('transactions').select()
		return { transactions }
	})

	app.post('/', async (request, reply) => {
		const schemaBody = z.object({
			title: z.string(),
			amount: z.number(),
			type: z.enum(['credit', 'debit'])
		})

		const { title, amount, type } = schemaBody.parse(request.body)

		const transaction = await knex('transactions').insert({
			id: randomUUI(),
			title,
			amount: type === 'credit' ? amount : amount * -1
		})
		
		return reply.status(201).send()
	})
}

export default routeTransactions
```

Para realizar uma busca com o recurso identificado na URL (Params):
```typescript
app.get('/:id', async (request) => {
	const schemaParams = z.object({
		id: z.string().uuid()
	})

	const { id } = schemaParams.parse(request.params)
	const transaction = await knex('transactions').where('id', id).first()

	return { transaction }
})
```

Também podemos realizar operações dentro da rota:
```typescript
app.get('/amount', async () => {
	const amount = await knex('transactions').sum('amount', {
		as: 'total'
	}).first()
	
	return { amount }
})
```

Podemos observar durante as buscas que, quando queremos buscar uma série de valores utilizamos a função `select()` e quando queremos um objeto contendo informações únicas utilizamos a função `first`.
## Tipagem
Apesar do `Knex`, como a maioria dos Query Builders, não ter o melhor dos suportes para a tipagem do banco de dados, podemos realizar algumas operações para tornar a experiência com ele mais agradável, como estender sua tipagem manualmente criando um arquivo `/src/@types/knex.d.ts`:

```typescript
// eslint-disable-next-line
import { knex } from 'knex'

declare module 'knex/types/tables' {
	export interface Tables {
		transactions: {
			id: string
			title: string
			amount: number
		}
	}
}
```

A partir do momento em que informamos esses tipos o `autocomplete` para seleção de tabelas pode ser utilizado durante o processo de desenvolvimento.