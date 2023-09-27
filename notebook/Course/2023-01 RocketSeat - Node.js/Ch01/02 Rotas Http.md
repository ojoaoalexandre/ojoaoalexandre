Uma requisição HTTP é composta por dois principais elementos:

## Método

São muito mais semânticos!

```jsx
GET: Buscar um recurso
POST: Criar um recurso
PUT: Atualizar um recurso quase que completo
DELETE: Deletar um recurso
PATCH: Atualizar um recurso específico
```

## URL

Podemos ter duas rotas com a mesma URL, só que com métodos diferentes.

```jsx
import http from 'http'

const server = http.createServer((request, response) => {
  const { method, url } = request

  if(method === 'GET') {
    return response.writeHead(200).end('Listagem do Recurso')
  }

  if(method === 'POST') {
    return response.writeHead(201).end()
  }

  return response.writeHead(404).end('Not Found')
})

server.listen(3000)
```

## Stateful

É quando os dados da aplicação são salvos em memória.

## Stateless

É quando a aplicação faz consulta em recursos externos para recuperar os dados.

## Cabeçalhos

É uma área de metadados de uma requisição ou de uma resposta, os únicos formatos permitidos para transacionar informações entre o servidor e o brownser são: string, buffers e Uint8Array, porém o formato mais comum de transacionar informações é o JSON devido a sua facilidade de formatação.

Por isso para enviar os dados converteremos nossos objetos e arays em uma string por meio da função `JSON.stringify` e, adicionaremos um metadado importante ao cabeçalho da resposta que informará quem está recebendo essas informações de que se trata de um JSON:

```jsx
return response
  .setHeader("Content-Type", "application/json")
  .end(JSON.stringify(users))
```

Além do `setHeader` que pode ser encadeado seguindo esse padrão de chave e valor para enviar mais informações no cabeçalho:

```jsx
response
  .setHeader("", "")
  .setHeader("", "")
  .end(JSON.stringify(users))
```

É possível utilizar também o `writeHead` que define de modo explicito o código do status da resposta seguido de todas as informações no cabeçalho dentro de um objeto:

```jsx
response.writeHead(200, {
  "Content-Type": "application/json"
}).end(JSON.stringify(users))
```

## Status Code

Quando devolvemos uma resposta para o front-end temos um sumário de códigos que são utilizados para informar de modo resumido.