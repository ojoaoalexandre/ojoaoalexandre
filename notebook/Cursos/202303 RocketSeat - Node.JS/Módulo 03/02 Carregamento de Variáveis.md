---
tags:
  - Variáveis
---
A biblioteca `dotenv` facilia o acesso aos arquivos de configuração de Variaveis de Ambiente:

```
# .env
# .env.example
```

Existem variáveis de ambiente que são obrigatórias para a existência da aplicação, por isso podemos adicionar uma camada de verificação dessas variáveis que tornará mais fácil a existência dessas variáveis, tornando-as conhecidas no escopo global do projeto.

```javascript
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