O conceito de Streams pode ser associado à capacidade de ler pequenos fragmentos de um bloco de informação maior.

Se precisamos realizar a importação e leitura de um arquivo de 1GB de forma síncrona, teríamos que aguardar o carregamento completo do documento, enquanto isso o sistema fica travado, e depois do upload faríamos as operações com os dados importados.

<aside> 🧠 Vamos supor que faremos o upload desse arquivo de 1GB em uma rede de 10Mb (Megabits) de transferência. O tempo de upload seria de 1024 * 8 / 10 = 819,2 segundos (13 minutos e 40 segundos)

Se esse arquivo possui 1.000.000 de linhas em cada segundo teríamos 1.000.000 / 1024 = 976,5 linhas/megabite * 10 mb = 9765 linhas

</aside>

Os dois principais tipos de streams são Readtable, que nos permite a leitura de dados e Writable, que nos permite a escrita.

<aside> 💡 No node toda porta de entrada e saída é uma `Stream`, incluindo os tão conhecidos `request` e `response`.

</aside>

## Readtable

```jsx
import { Readable } from 'node:stream'

// process.stdin.pipe(process.stdout)

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    if(i > 100) {
      // o método push é utilizado pela stream para fornecer informações para quem está utlizando a stream
      this.push(null)
    } else {
      // O Buffer não aceita números, apenas strings
      const buffer = Buffer.from(String(i) + '\\n')
      // uma stream não pode retornar dados em formato primitivo, ele deve estar em Buffer
      this.push(buffer)
    }
  }
}

new OneToHundredStream().pipe(process.stdout)
```

Para conseguirmos observar ainda melhor essa leitura em lotes podemos adicionar um tempo de espera no retorno da função de leitura:

```jsx
 _read() {
    const i = this.index++

    setTimeout(() => {
      if(i > 100) {
        // o método push é utilizado pela stream para fornecer informações para quem está utlizando a stream
        this.push(null)
      } else {
        // O Buffer não aceita números, apenas strings
        const buffer = Buffer.from(String(i) + '\\n')
        // uma stream não pode retornar dados em formato primitivo, ele deve estar em Buffer
        this.push(buffer)
      }
    }, 1000)
  }
```

## Writable

```jsx
import { Readable, Writable } from 'node:stream'

class OneHundredStream extends Readable {
  index = 1

  // obrigatoriamente temos a função de leitura
  _read() {
    const i = this.index++

   setTimeout(() => {
    if(i > 100) {
      this.push(null)
    } else {
      const buffer = Buffer.from(String(i) + '\\n')
      this.push(buffer)
    }
   }, 1000)
  }
}

class MultiplyByTenStream extends Writable {
  // obrigatoriamente temos a função de escrita
  // obrigatoriamente recebemos esses três argumentos
  _write(chunck, encoding, callback) {
    // chunck é o pedaço de informação
    // encoding é como essa informação está codificada
    // callback é a função que precisamos chamar quando terminamos de realizar as operações com o bloco de dado recebido
    console.log(Number(chunck.toString()) * 10)
    callback()
  }
}

const multiplyByTen = new MultiplyByTenStream()
new OneHundredStream().pipe(multiplyByTen)
```

## Transform

A Stream de transformação precisa obrigatoriamente ler dados de algum lugar e retornar esses dados para uma stream que os escreva.