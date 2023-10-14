A biblioteca mais comum para criação de hash é o `bcryptjs`:
```bash
npm i bcryptjs @types/bcryptjs
```

O hash é um código que não pode ser revertido, nessa biblioteca podemos optar por gerar esse hash baseado em um `salt` que seria uma string pré-definida:

```typescript
const hash = await hash(password, 'asdasdasdasdasdasd')
```

Ou pelo número de rounds:
```typescript
const hash = await hash(password, 5)
```

Isso significa que no primeiro round ele vai gerar um hash, no segundo round ele retornará um hash a partir do hash anterior e assim sucessivamente, até que todos os rounds estejam completos.
O ponto positivo é a segurança que atingimos, porém quanto mais rounds mais pesado se torna para a nossa aplicação gerá-lo.

> Para a maioria das aplicações 6 rounds é o suficiente

Apesar de não ser possível realizar o caminho inverso, durante o processo de login por exemplo o hash criado a partir da mesma senha utilizada no cadastro sempre será o mesmo.

## Erro de importação
```
The requested module 'bcryptjs' does not provide an export named 'hash'
```

Para corrigir esse erro podemos importar o pacote completo e citar a função hash:
```typescript
import bcrypt from 'bcryptjs'

const create = async () => {
	// ...
	const hash = await bcrypt.hash('password', 6)
	// ...
}
```
