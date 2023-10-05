## Fastify
#fastify

É um micro framework que nos ajuda a lidar com as requisições e roteamento.

```javascript
import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
	return 'Hello World'
})

app.listen({
	port: 3333
}).then(() => console.log('Server is runnig'))
```

## Typescript
Inicialmente era conhecido apenas como um superset para adicionar tipagem ao Javascript, mas vários serviços foram criados compilando diretamente Javascript permitindo assim definirmos como linguagem de programação.

```shell
npm i typescript @types/node
npx tsc --init
```

Inicialmente a configuração mais importante é o `target` que define para qual versão do Javascript o código Typescript será convertido:
```json
// tsconfig.json
{
	//...
	"target": "es2020"
	//...
}
```

## TSX
#tsx

Para automatizar a conversão de typescript em javacript podemos utilizar uma ferramenta como o `TSX`:
```bash
npm i tsx -D
```

Para utilizá-lo basta executar no terminal:
```bash
npx tsx src/server.ts
```

> Lembrando que o TSX não é recomendado para o ambiente de produção, em produção prefira realizar o `build` para javascript.

Outra configuração interessante para o TSX é fazer com que ele reinicie o servidor toda vez que houver uma alteração no código, para isso utilize o script:
```json
// package.json
{
	"scripts": {
		"dev": "tsx watch src/server.ts"
	}
}
```

## ESLint
#eslint

É uma forma de formatar o projeto, mantendo o padrão de código.
```shell
npm i eslint -D
```

