Existem várias estratégias de interação com o banco de dados, e as principais podem ser agrupadas em:
### Driver Nativos
É a forma de menor abstração, onde um conector específico do banco de dados é disponibilizado e utilizamos comandos em SQL para interagir por meio dele.
### Query Builders

### ORMs (Object Relational Mapper)
Alto nível de abstração para conexão com o banco de dados, a ideia principal é mapear as tabelas por meio de objetos.
#### Prisma ORM
```
npm i prisma -D
```

```
npx prisma init
```

Cria a tipagem das tabelas e dos campos de forma totalmente automatizada
```
npx prisma generate
```

Para conseguir ter acesso ao banco precisamos instalar o `client` do prisma:
```
npm i @prisma/client
```

E por meio dele podemos ter acesso direto ao banco de dados pelo objeto `PrismaClient`:

```typescript
import { PrismaClient } from '@prisma/client'

export const database = new PrismaClient()
```

Após as modificações nas tabelas utilizamos o comando:
```
npx prisma migrate dev
```

Para criação de migrations, que funcionam como uma linha do tempo da construção do banco de dados, por meio das migrations é possível versionar o banco de dados mais facilmente.

O prisma possui uma área visual do banco de dados que pode ser inicializada por meio do comando:
```
npx prisma studio
```