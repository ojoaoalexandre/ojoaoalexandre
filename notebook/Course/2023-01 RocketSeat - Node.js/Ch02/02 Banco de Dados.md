Os bancos de dados podem ser categorizados com relacionais e não-relacionais.

## Knex

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
npm run knex -- migrate:make create-documents
```

> O sinal `--` no comando acima informa ao terminal que os próximos argumentos devem ser passados para o `knex` e não para o `npm run`.