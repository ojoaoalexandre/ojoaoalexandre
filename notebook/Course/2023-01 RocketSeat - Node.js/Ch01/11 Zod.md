```jsx
import { fastify } from 'fastify'
import { z } from 'zod'
import { database } from './lib/prisma'

export const app = fastify()

app.post('/users', async (request, response) => {
    const createUserSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password_hash: z.string().min(6),
    })

    const { name, email, password_hash } = createUserSchema.parse(request.body)

    try {
        const user = await database.user.create({
            data: {
                name,
                email,
                password_hash,
            },
        })

        return response.status(200).send({ user })
    } catch (error) {
        return response.status(500).send({ error })
    }
})

```

No `parse` quando a aplicação encontra um erro ela impede a execução do resto do código, pulando diretamente para o `throw error`.
## Prisma Log
É possível acompanhar a execução dos comandos SQL no prisma informando o acionamento desse recurso no objeto PrismaClient:

```jsx
export const database = new PrismaClient({
    log: env.NODE_ENV == 'development' ? ['query'] : []
})

```