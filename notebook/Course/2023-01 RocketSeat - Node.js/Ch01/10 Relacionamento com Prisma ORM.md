Para iniciar os relacionamentos entre as tabelas basta nomear o campo de informar no tipo o nome do model do prisma, como no exemplo abaixo `user User`:

```
model User {
  id            String    @id @default(uuid())
  name          String
  email         String    @unique
  password_hash String?
  created_at    DateTime  @default(now())

  @@map("users")
}

model CheckIn {
  id           String    @id @default(uuid())
  created_at   DateTime  @default(now())
  validated_at DateTime?

  user    User // Esse é o relacionamento

  @@map("check_ins")
}

```

Se o plugin do Prisma estiver instalado, basta salvar o arquivo, para gerar os relacionamentos:

```
model User {
  id            String    @id @default(uuid())
  name          String
  email         String    @unique
  password_hash String?
  created_at    DateTime  @default(now())
  checkIns      CheckIn[]

  @@map("users")
}

model CheckIn {
  id           String    @id @default(uuid())
  created_at   DateTime  @default(now())
  validated_at DateTime?

  user    User   @relation(fields: [user_id], references: [id])
  user_id String

  @@map("check_ins")
}

```

Quando o tipo informado não é um tipo primitivo, o prisma interpreta o relacionamento, o que significa que essa coluna não será criada diretamente no banco de dados, mas servirá como informação para que o prisma compreenda seu papel dentro na tabela.