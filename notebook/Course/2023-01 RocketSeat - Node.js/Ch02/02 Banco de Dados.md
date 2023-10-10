#banco-de-dados 

Os bancos de dados podem ser categorizados com relacionais e não-relacionais.

## Knex
#knex

```shell
npm i knex
```

```typescript
import { knex as setupKnex, Knex } from 'knex'

export const config: Knex.Config = {
	client: 'sqlite',
	connection: {
		filename: './tmp/app.db'
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './db/migrations'
	}
}

export const knex = setupKnex(config)

```

Nativamente o Knex não traz suporte para o `typescript`, mas é possível utilizarmos o `tsx` como ferramenta em conjunto com o Knex realizando pequenas alterações na configuração.
Para conseguirmos utilizar o knex com o `tsx` vamos precisar fazer algumas adapatações, primeiro criar um arquivo na raiz chamado `knexfile.ts` que exporte as configurações do banco de dados:
```typescript
// knexfile.ts
import { config } from './src/database'

export default config
```

Depois vamos criar um script que execute o `tsx` juntamente com o `knex`:
```json
// package.json
{
	"scripts": {
		"knex": "node --no-warnings --loader tsx ./node_modules/.bin/knex"
	}
}
```

Agora quando executarmos o `knex` vamos passar os argumentos por dentro do script definido:
```shell
npm run knex -- migrate:make create-transactions
```

> O sinal `--` no comando acima informa ao terminal que os próximos argumentos devem ser passados para o `knex` e não para o `npm run`.

```typescript

export async function up(knex: Knex): Promise<void> {
	await knex.schema.createTable('transactions', (table) => {
		table.uuid('id').primary()
		table.text('title').notNullable()
		table.decimal('amount', 10, 2).notNulllable()
		table.timestamp('created_at').defaulTo(knex.fn.now()).notNullable
	})
}

export async function down(knex: Knex): Promise<void> {
	await kenx.schema.dropTable('transactions')
}
```

Nunca edite diretamente a `migration` se ela já foi enviada para o time, é justamente para isso que elas existem, para criação de um histórico que corresponda a evolução gradual da aplicação, toda e qualquer nova modificação que já foi enviada para o time deve gerar uma nova `migration`. 

Com o knex podemos realizar todas as operações com o banco de dados sem necessariamente utilizar o SQL, de forma mais flexível de modo que nosso banco de dados pode até ser alterado posteriormente, como quando mudamos de `SQLite` para `PostgreSQL`, sem a necessidade de alteração direto no código.

```typescript
import { randomUUI } from 'node:crypto'

const transaction = await knex('transactions').insert({
	id: randomUUI()
}).returning('*')

const transaction = await knex('transactions').where('amont', 1000).select('*')
```

Mais um migration:
```typescript
export async function up(knex: Knex): Promise<void> {
	await knex.shema.alterTable('transactions', (table) => {
		table.uuid('session_id').after('id').index()
	})
}

export async function down(knex: Knex): Promise<void> {
	await knex.schema.alterTable('transactions', (table) => {
		table.dropColumn('session_id')
	})
}
```