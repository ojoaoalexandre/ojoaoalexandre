#fastify 

Iniciando um projeto base com typescript e Node:
```bash
npm i typescrit @types/node tsx tsup -D
```

Para inicializar o typescript:
```bash
npx tsc --init
```

Alterar a versão do node no arquivo de configuração do typescript:
```json
{
	"target": "es2020"
}
```

Configurar alguns scripts no `package.json`:
```json
{
	"scripts": {
	    "dev": "tsx watch src/server.ts",
		"start": "node build/server.js",
	    "build": "tsup src --out-dir build"
	 },
}
```

Instalar um micro framework para o servidor criando um arquivo para o `app` e outro que levanta o servidor a partir desse `app`.
```bash
npm i fastify
```

Arquivo do app:
```typescript
// src/app.ts
import fastify from 'fastify'

export const app = fastify()
```

Arquivo do servidor:
```typescript
// src/server.ts
import app from './app.ts'
app.listen({
	port: 3333
}).then(() => console.log('server is running on port 3333' ))
```

## Boa prática
Criar um arquivo `.npmrc` na raiz do projeto com a configuração:
```
save-exact=true
```
A partir desse momento toda nova dependência instalada será adicionada sem os caracteres que permitem a atualização automática dessas dependências, ou seja, ela informa a versão exata em que estamos utilizando a biblioteca para o desenvolvimento da aplicação para que esse processo de atualização seja melhor controlado.

## Variáveis de Ambiente
#variaveis #variaveis-de-ambiente #zod

```bash
npm i zod dotenv
```

Além de adicionar as variáveis de ambiente é importante criarmos uma validação para cada uma delas:
```typescript
// src/env/index.ts
import { z } from 'zod'
import { config } from 'dotenv'

config()

const schema = z.object({
	NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
	PORT: z.coerce.number().default(3333)
})

const _env = schema.safeParse(process.env)

if(_env.success === false) {
	console.error('.env is wrong', _env.error.format())
	throw new Error('.env is invalid')
}

export const env = _env.data
```
A execução da função `config()` adiciona as variáveis do `.env` ao objeto global `process.env`.

## ESLint
#eslint 

A padronização durante o processo de código é fundamental:
```bash
npm i eslint -D
```

Para iniciar um novo projeto de lint basta executar:
```bash
npx eslint --init
```

E o rastreamento de pastas que não recebem essa verificação:
```json
// .eslintignore
node_modules
build
```

Para aplicar as modificações do `eslint` a cada ação de salvamento do documento no `VS Code` acesse `File`> `Preferences`> `Settings` e busque por `Code Actions on Save` para adicionar a função:
```json
"editor.codeActionsOnSave": {
	"source.fixAll.eslint": true
}
```

## Aliases de Pastas
#aliases

É uma maneira de encurtarmos a referências de arquivos:
```json
// tsconfig.json
{
	"baseUrl": "./",
	"paths": {
		"@/*": ["./src/"],
	}
}
```

Isso quer dizer que, sempre que eu importar um arquivo começando com `@/` o `vs code` deve entender que estou tentando encontrar uma pasta a partir de `./src`.

## Banco de Dados
#prisma #banco-de-dados

Uma das formas mais atuais para interagir com o banco de dados é por meio do ORM (Object Relational Mapper), ele é uma abstração que nos permite utilizar o mesmo código para interagir com diferentes bancos de dados. Um dos ORMs em maior desenvolvimento é o Prisma:
```
npm i prisma -D
npx prisma init
```

Após a execução do `init` temos uma pasta `prisma` que abriga o arquivo de modelos, cada `model` corresponderá a uma tabela com suas respectivas colunas.
```typescript

model User {
	id String @id @default(uuid())
	name String
	email String @unique
	@@map('users')
}
```

Para gerar a tipagem do nosso `schema`:
```bash
npx prisma generate
```

Agora podemos instalar a biblioteca `client` que será responsável pela interação direta com o banco de dados:
```bash
npm i @prisma/client
```

Esse dependência difere da anterior porque esse sim deve ser uma dependência de produção e não de desenvolvimento, afinal é a biblioteca que deve ser utilizada pela aplicação para interagir com o banco de dados.
```typescript
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
```