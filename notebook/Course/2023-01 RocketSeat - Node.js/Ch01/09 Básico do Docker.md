Diferente da virtualização o docker reaproveita os recursos base do sistema operacional para criar ambientes isolados com recursos pré-definidos e controlados pelo desenvolvedor.

### Docker Hub

É um repositório de imagens, que são como instruções que auxiliam na criação dos containers. Nele é possível encontrar containers prontos para diversas aplicações.

```
docker run --name nome-da-aplicacao bitnami/postgresql

```

O ideal é definir algumas configurações para acesso desse banco de dados, e conseguimos isso adicionando alguns parâmentros ao comando de execução:

```
docker run --name nome-da-aplicacao -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=nome-do-banco -p 5432:5432 bitnami/postgresql

```

Para listar os container:

```
docker ps -a

```

Para executar um container da lista:

```
docker start nome-do-container

```

Para parar o container:

```
docker stop nome-do-container

```

## Docker Compose

O docker-compose é uma ferramenta que facilita a inicialização de um container por meio de instruções em um arquivo do tipo `yml`:

```
version: '3'

services:
  api:
    image: bitnami/postgresql
    ports:
      - 5432:5432
    environment:

```

Para executar esse container:

```
docker compose up -d

```

Para parar a execução do container:

```
docker compose stop

```

> ⚠ CUIDADO! O comando docker compose down não pára o container, ele os deleta, fazendo com que você perca todos os dados persistidos, não confunda.