#docker

É uma forma de administrar recursos da nossa aplicação sem a necessidade de instalá-los diretamente em nosso sistema operacional.

```
bitnami/postgresql
```

```bash
docker run --name nameApp bitnami/postgresql
```

Ou podemos adicionar algumas variáveis:
```bash
docker run --name nameApp -e POSTGRESQL_USERNAME=docker -e POSTGRESQL_PASSWORD=docker -e POSTGRESQL_DATABASE=nameApp -p 5432:5432 bitnami/postgresql
```

Mas seria muito complicado ter que criar sempre do zero, apesar dos container ficarem armazenados:
```
docker ps -a
```

```
docker start nameContainer
```
Para remover:
```
docker rm nameContainer
```

Para verificar os logs:
```
docker
```

## Docker Compose
Para poder reproduzir esse passo-a-passo em diferentes máquinas utilizamos o docker compose, que é um arquivo que carrega as instruções para criar o container.

```yaml
// docker-compose.yml
version: '3'

services:
	nameApp:
		image: bitnnami/postgresql
		ports:
			- 5432:5432
		environment:
			- POSTGRESQL_USERNAME=docker
			- POSTGRESQL_PASSWORD-docker
			- POSTGRESQL_DATABASE=nameApp
```

```
docker compose up
```

```
docker compose up -d
```

Parar os containers:
```
docker compose stop
```

Apaga todos os containers e deleta os dados:
```
docker compose down
```