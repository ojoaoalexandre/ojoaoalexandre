#fastify #cookie

É a forma para manter o contexto entre as requisições e o `Fastify` fornece uma maneira facilitada de lidar com esses dados por meio do seu plugin:

```bash
npm i @fastify/cookie
```

Agora para adicioná-lo na aplicação temos que informá-lo como um plugin antes de todas as rotas, afinal ele impacta todo o resto da aplicação:
```typescript
// src/server.ts
import { cookie } from '@fastify/cookie'

app.register(cookie)
app.register(routeTransactions)
// ...
```

Para começar a criar e ler as informações do `cookie` podemos partir da primeira interação que o usuário tem com a aplicação, como a primeira inserção de dados:
```typescript
app.post('/', async (request, reply) => {
	// ...

	let sessionId = request.cookie.sessionId

	if(!sessionId) {
		sessionId = randomUUI()
		reply.cookie('sessionId', sessionId, {
			path: '/',
			maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
		})
	}

	await knex('transactions').insert({
		//...
		session_id: sessionId
	})

	// ...
})
```

Os cookies são enviados automaticamente a cada requisição e quando temos muitas rotas precisando executar o mesmo trecho de código, como quando precisamos verificar se existe um campo no cookie, podemos criar um middleware para essas rotas:
```typescript
// middlewares/check-session-id-exists
const checkSessionIdExists = async (request: FastifyRequest, reply: FastifyReply) => {
	const sessionId = request.cookies.sessionId

	if(!sessionId) {
		return reply.status(401).send({
			error: 'Não autorizado'
		})
	}
}

export default checkSessionIdExists
```

Esse middlewares são identificados pelo `Fastify` como `pre handler` e deve ser adicionado na declaração da rota:
```typescript
app.get('/:id', { preHandler: [chickSessionIdExists] }, async (request, reply) => {
	const { sessionId } = request.cookies

	//...
	
	const transaction = await knex('transactions').where({
		session_id: sessionId,
		id
	}).first()

	return { transaction }
})
```

## Hook Global
Apesar de podermos criar middlewares e informá-los em cada uma das rotas, existem situações em que teremos que executar um middleware de forma global, ou seja, em todas as rotas, para adicioná-lo sem a necessidade de declará-lo separadamente em cada rota utilizamos um `hook`:

```typescript
const routeTransactions = async (app) => {
	app.addHook('preHandler', async (request, reply) => {
		console.log(`[${request.method}]: ${request.url}`)
	})

	app.get('/')
	app.post('/')
}
```
A partir desse momento, toda rota executará o `hook` antes de si mesma.