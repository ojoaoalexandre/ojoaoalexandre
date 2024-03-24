import { z } from 'zod'

const schema = z.object({
  GITHUB_CLIENT: z.string().min(1)
})

const _env = schema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid environment variables', _env.error)
}

export const env = _env.data
