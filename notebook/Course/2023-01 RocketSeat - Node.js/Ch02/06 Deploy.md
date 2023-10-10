O processo de deploy varia entre os diferentes serviços oferecidos pelas milhares empresas de hospedagem e para cada tipo de serviço temos que ter em mente alguns fundamentos, o primeiro é: se a sua aplicação está em Typescript ela precisa ser compilada em Javascript, para isso podemos usar o próprio `tsc`:

```json
{
	"rootDir": "./src",
	"outDir": "./build"
}
```

O problema que podemos encontrar aqui é o de performance, o `tsc` apesar de ser amplamente utilizado é lento.

## tsup
É uma ferramenta para compilar código typescript em javascript, de forma mais performática:
```bash
npm i tsup -D
```

Agora é só integrar em nossa aplicação pelos scripts:
```json
// package.json
{
	"scripts": {
		"build": "tsup src",
	}
}

// ou
{
	"scripts": {
		"build": "tsup src --out-dir build"
	}
}
```

Mais alguns ajustes na estrutura do projeto:
```
// .eslintignore
build
node_modules
```

Ignore os arquivos que podem ser gerados pelos scripts:
```
// .gitignore
# Database
db/*.db

# env
.env
.env.test

# Server
node_modules
build
```

## Hospedagem
#hospedagem

Algumas hospedagem back-end:

- Render.com
- fly.io
- Railway

É uma boa pratica informar a versão mínima do node:
```json
// package.json
{
	//...
	"engines": {
		"node": ">= 18"
	}
	//...
}
```