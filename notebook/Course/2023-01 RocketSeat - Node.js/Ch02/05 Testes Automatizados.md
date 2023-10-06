Temos três principais tipos de testes:
### Testes Unitários
Testam exclusivamente uma unidade de código da sua aplicação de forma isolada, geralmente é o tipo de teste que mais temos.
### Teste de Integração
Testa a comunicação entre duas ou mais unidades.
### Teste E2E
Simulam um usuário operando em nossa aplicação.
## Pirâmide de Teste
> É uma representação gráfica das quantidades de diferentes tipos de testes na aplicação.

O Teste E2E não dependem de nenhuma tecnologia, não dependem de arquitetura, apesar de completos são extremamente lentos se comparados com os demais.
A Pirâmide de Teste tem como base os Testes Unitários, significando que são os tipos de testes em maior número, em sequência temos os Testes de Integração e por último os Testes End-To-End.

O Node.js possui uma biblioteca nativa de testes chamada `Test Runner`, porém ainda é muito recente (v18.13.0), por isso por enquanto é preferível realizar esses testes com uma biblioteca externa. `Por enquanto...`
A ferramenta mais famosas para testes em Javascript são o `Jest` e o `Vitest`, sendo que a diferença no `Vitest` é o suporte a Typescript sem a necessidade de configuração.

```typescript
// test/example.spec.ts
import { test } from 'vitest'

test('descrição do enunciado', () => {
	// operação
	expect() // validação
})
```
O teste é composto por enunciado, operação e validação.

Para executar o teste basta usar o comando no terminal:
```bash
npx vitest
```
Podemos adicionar esse comando no script:
```json
"scripts": {
	"test": "vitest"
}
```
E agora podemos usar esse script executando:
```bash
npm run test
```

## Supertest
Para testes em que precisamos realizar requisições HTTP precisamos executar um servidor exclusivo para processar cada teste, porém isso pode gerar conflito com o servidor da aplicação e torna a etapa de testes menos performática, por isso podemos utilizar a biblioteca `supertest` que nos permite realizar essas requisições diretamente para o servidor da nossa aplicação sem gerar conflito.
```bash
npm i supertest @types/supertest -D
```

Para isso vamos precisar isolar a aplicação do momento em que realizamos o levantamento do servidor:
```typescript
// src/app.ts
import { fastify } from 'fastify'

export const app = fastify()

app.register()
```

```typescript
// src/server.ts
import { app } from './app'
import { env } from './env'

app.listen({
	port: env.PORT
}).then(() => console.log('Server is running'))
```

A partir desse momento podemos utilizar o `app` diretamente em nossa camada de teste:
```typescript
// test/example.spec.ts
import request from 'supertest'
import { test, expect } from 'vitest'
import { app } from '../app'

test('descrição do enunciado', async () => {
	await request(app.server).post('transactions').send({
		title: 'New Transaction',
		amount: 5000,
		type: 'credit'
	})
	
	expect(response.statusCode).toEqual(201)
})

// ou
test('descrição do enunciado', async () => {
	await request(app.server).post('transactions').send({
		title: 'New Transaction',
		amount: 5000,
		type: 'credit'
	}).expect(201)
})
```

Devemos nos lembrar que o registro de cada plugin no fastify é realizado de forma assíncrona, ou seja, se executarmos os testes e as rotas não tiverem preparadas, o retorno será sempre uma falha.
Para certificar que o nosso servidor está preparado antes da execução dos testes podemos adicionar:
```typescript
import { test, expect, beforeAll, afterAll } from 'vitest'

beforeAll(async () => {
	await app.ready()
})

afterAll(async () => {
	await app.close()
})

test('', async () => {
	expect()
})
```
O `afterAll` permite fechar a aplicação após todos os testes, liberando o espaço da memória.
## Organizando os testes
O primeiro nível de organização está no nome do arquivo de testes:
```
transactions.spec.ts
```
O segundo está em agrupar os testes dentro desse arquivo, e isso pode ser feito por meio do `describe`:
```typescript
describe('transactions routes', () => {
	beforeAll()
	afterAll()
	test()
})
```

Além da função `test` temos a função `it` que faz exatamente a mesma coisa e foi criada pensando no padrão de sentença:
```typescript
it('should be able to create a new transaction', () => {})
```
É como se o nome da função fizesse parte da descrição.

Uma das regras fundamentais para teste é: nenhum teste deve depender do resultado de outro teste, se isso ocorrer é porque eles deveriam estar no mesmo teste, por isso é comum repetirmos alguns trechos de código que foram utilizados em outros teste:
```typescript
it('should be able to list all transactions', async () => {
	const response = await request(app.server).post('/transactions').send({
		title: 'New transaction',
		amount: 8000,
		type: 'credit'
	})

	const cookies = response.get('Set-Cookie')

	const allTransactions = await request(app.server)
		.get('/transactions')
		.set('Cookie', cookies)
		.expect(200)

	expect(allTransactions.body.transactions).toEqual([
		expect.objectContaining({
			title: 'New transaction',
			amount: 8000
		})
	])
})
```

Algumas outras funções que vão te ajudar na hora de escrever seus testes:
```typescript
// Para pular o teste
it.skip('should be able...')

// Para lembrar de transformar a sentença em um teste
it.todo('should be able...')

// Informa que apenas esse teste será executado e os outros podem ser pulados
it.only('should be able', () => {})
```

## Banco de Dados para Teste
O melhor dos mundos é que 
```
.env.test.example
.env.test
```

```typescript
// env/index.ts
import { config } from 'dotenv'

if(process.env.NODE_ENV === 'test') {
	config({ path: '.env.test' })
} else {
	config()
}

// ...
```

Para preparar o banco de dados que será gerado precisamos rodar as migrations, como todo teste deve ser independente, podemos a cada um dos testes criar o banco de apagá-lo em seguida.
```typescript
// execSync permite executar no terminal
import { execSync } from 'node:child_process'
import { beforeAll } from 'vitest'

beforeEach(() => {
	execSync('npm run knex migrate:rollback --all')
	execSync('npm run knex migrate:latest')
})
```
Claro que poderíamos manter os dados acumulando os testes, porém entre um teste e outro pode haver conflitos e gerar até mesmo `falsos positivos`, por isso criar e apagar o banco de dados pode ser uma ótima boa prática. Com essa boa prática vem também a perda de performance, afinal criar e apagar o banco são tarefas mais demoradas, por isso os testes do tipo E2E devem ser poucos na aplicação.