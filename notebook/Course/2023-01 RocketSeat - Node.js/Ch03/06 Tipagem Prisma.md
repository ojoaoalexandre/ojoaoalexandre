No prisma a tipagem dos relacionamentos das tabelas geram dois tipos:
```typescript
export type UserInputCreateInput = {
	id?: string
	name: string
	address: AddressNestedOneWithoutInput
}

export type UserUncheckedCreateInput = {
	id?: string
	address_id: string
}
```

Na primeira tipagem temos o caso em que estamos criando tanto o usuário quanto o endereço ao mesmo tempo, na mesma requisição, enquanto no segundo o endereço já está cadastrado, por isso estamos apenas informando o id dele para que haja relacionamento entre os registros.