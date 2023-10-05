As variáveis de ambiente, como o próprio nome revela, são valores que são utilizados na configuração da aplicação, mas que podem variar de acordo com o ambiente em essa aplicação está sendo executada. Talvez isso não faça muita diferença enquanto a aplicação não está no ar, mas quando realizamos o primeiro deploy e os usuários já estão utilizando a aplicação, é fundamental você saber separar o código em ambiente de desenvolvimento e produção.

## O famoso Dotenv
A biblioteca `dotenv` facilita o acesso aos arquivos de configuração de Variáveis de Ambiente:

```
# .env
# .env.example
```

## Validando as variáveis
Apesar de citar a presença das variáveis é possível deixar o processo de desenvolvimento ainda mais integrado e facilita por meio da validação dessa variáveis, existem algumas bibliotecas para isso e uma das mais utilizadas é o `zod`.

Existem variáveis de ambiente que são obrigatórias para a existência da aplicação, por isso podemos adicionar uma camada de verificação dessas variáveis que tornará mais fácil a existência dessas variáveis, tornando-as conhecidas no escopo global do projeto.

```jsx
// ./src/env/index.ts
import { z } from "zod";
import { config } from "dotenv";

config();

const schema = z.object({
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
  PORT: z.coerce.number().default(3333),
});

const _env = schema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());

  throw new Error("Invalid .env");
}

export const env = _env.data;
```

## Boas Práticas
1. Informe o nome da variável em caixa alta
2. Adicione os arquivos `.env` em seu `.gitignore` para que as informações sensíveis não sejam adicionadas ao repositório
3. Crie um arquivo de `.env.example` e informe neles apenas os nomes das variáveis, esse arquivo sim deve ser adicionado ao repositório
## Agora é Nativo!
A partir da versão 20.6.0 do Node.js temos suporte nativo das variáveis de ambiente, que podem ser observadas se executarmos o comando:
```shell
node --env-file .env index.js
```
[Node.js Documentation](https://nodejs.org/en/blog/release/v20.6.0)