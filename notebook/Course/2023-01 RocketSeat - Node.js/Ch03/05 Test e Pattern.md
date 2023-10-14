## Repository Pattern
Esse pattern consiste em separar toda a lógica de conexão com o banco de dados em uma pasta chamada `repositories`, uma das vantagens é que, se por algum motivo optarmos por trocar o ORM ou a biblioteca de conexão com o banco de dados, precisaremos apenas realizar a mudança em uma parte específica do código.

> O padrão repository serve para abstrair a persistência de dados.

## Use Cases
`Use Case` ou `Services` servem para orquestrar as entidades e regras da aplicação.

## Testes
Os testes são fundamentais para a aplicação e devem ser adicionados o quanto antes para que possam evoluir na mesma medida que recursos são adicionados.

```bash
npm i vitest vite-tsconfig-paths -D
```

A biblioteca `vite-tsconfig-paths` é um plugin do `vitest` que permite o reconhecimento do caminho das pastas que são importadas por meio de aliases como `@/`, e para configurá-lo para criar no diretório raiz o arquivo `vite.config.js`:
```javascript
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [tsconfigPaths()]
})
```

Agora basta adicionarmos a execução do `vitest` nos scripts:
```json
{
	"scripts": {
		"test": "vitest run",
		"test:watch": "vitest"
	}
}
```

Alguns dos conceitos importantes durante o desenvolvimento de um teste unitário é que nenhum teste unitário realiza consultas externas a sua unidade, no caso do exemplo a seguir temos uma consulta ao banco de dados, o que transforma o teste em uma mistura de teste de integração com teste unitário e isso não é benéfico ao código.

```typescript
describe('Register User', () => {
  it('should hash user password upon registration', async () => {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(prismaUsersRepository)
    const { user } =await registerService.execute({
      name: 'Alexandre Bekor',
      email: 'staff@agenciabekor.com',
      password: '123456'
    })

    const isPasswordHashed = await compare('123456', user.password_hash)
    expect(isPasswordHashed).toBe(true)
  })
})
```

 Em conformidade com a pirâmide de Testes os testes unitários são a maioria e se cada teste unitário realizar uma consulta externa o custo para carregar tudo vai aumentar.
 ```typescript
 describe('Register User', () => {
  it('should hash user password upon registration', async () => {
    const registerService = new RegisterService({
	    async findByEmail(email: string) {
		    return null
	    },
	      
	    async create(data) {
		  return {
			  id: 'user',
			  name: data.name,
			  email: data.email,
			  password_hash: data.password_hash,
			  created_at: new Date()
		  }
	    }
    })
    
    const { user } =await registerService.execute({
      name: 'Alexandre Bekor',
      email: 'staff@agenciabekor.com',
      password: '123456'
    })

    const isPasswordHashed = await compare('123456', user.password_hash)
    expect(isPasswordHashed).toBe(true)
  })
})
```

```typescript
it('should not be able to register with same email twice', async () => {
    const inMemoryUsersRepository = new InMemoryUsersRepository()
    const registerService = new RegisterService(inMemoryUsersRepository)

    await registerService.execute({
      name: 'Alexandre Bekor',
      email: 'alexandre@agenciabekor.com',
      password: '123456'
    })

    await expect(() => registerService.execute({
      name: 'João Vitor',
      email: 'alexandre@agenciabekor.com',
      password: '123456'
    })).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
```
Sempre que um `expect` ter que aguardar a solução de uma Promise, ou seja, sempre que a função dentro do `expect` for uma `Promise`, chame-o com um `await`.

A maioria dos frameworks de teste trazem a capacidade de gerar um relatório que corresponde a quanto do código está coberto por testes, no caso do vitest precisamos primeiro instalar a dependência:
```bash
npm i @vitest/coverage-v8
```

Agora basta adicionar o script:
```json
{
	"scripts": {
		"test:coverage": "vitest run --coverage"
	}
}
```
Após executar o script um arquivo `html` será gerado na pasta `coverage`, nele podemos ter uma versão web do relatório contendo em detalhes todo o código disponível e o que está sendo, bem como, o que não está sendo, coberto pelos testes.
Lembrando que a área mais importante para ser coberta pelos testes é a camada de `use cases` e/ou `services`.
## Vitest UI
O `Vitest` também possui uma interface gráfica que torna o processo de teste ainda mais visual por meio do recurso `vitest ui`.
```bash
npm i @vitest/ui -D
```

Para executar:
```json
{
	"scripts": {
		"vitest:ui": "vitest --ui"
	}
}
```