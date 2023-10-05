#node

```json
npm init -y
```

Isso cria um arquivo que é responsável.

O node possui alguns módulos internos:

```jsx
const http = require('http')
```

Existem duas formas de importação de bibliotecas: o CommonJS que é a forma mais antiga de se fazer e o ESModule, que é a forma atualmente mais utilizada, mas precisa ser informada no arquivo `package.json`:

```jsx
{
  "name": "application",
  "type": "module" // ['module', 'commonjs']
}
```

Ao substituir o padrão de importação podemos alterar o arquivo:

```jsx
import http from 'http'
```

Nas últimas atualizações do node tornou-se uma boa prática na comunidade importar módulos internos do node com o prefixo `node:`, isso gera identificação imediata de que se trata de um módulo nativo e ajuda a impedir que exista conflitos com importações de bibliotecas externas.

```jsx
import http from 'node:http'

const server = http.createServer((request, response) => {
  return response.end('Hello World')
})

server.listen(3000)
```

## Atualização Automatizada
#node-watch #node 

Ao atualizar o código é muito útil que ele seja imediatamente executado para observarmos seus resultados, anteriormente precisávamos de bibliotecas externas que monitorassem essas alterações e reinicializassem o servidor, agora temos o recurso nativo:

```bash
node --watch src/server.js
```

Para facilitar ainda mais a execução desse comando:

```jsx
// package.json
{
  "scripts": {
    "dev": "node --watch src/server.js"
  }
}
```

Isso cria um alias do comando permitindo a execução do comando por meio do atalho `npm run dev`.