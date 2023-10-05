Existem basicamente três formas de transacionar informações por uma rota:
1. Query Parameters
2. Route Parameters
3. Request Body

## Query Parameters
São parâmetros nomeados enviados diretamente na `url`, normalmente utilizado para filtragem e paginação de dados, a regra geral é utilizá-la quando precisamos de uma `url stateful`, ou seja, uma `url` que guarde os estados das variáveis e sempre que acessada retorne os mesmos valores para os diferentes usuários.

```
/users?name=Alexandre
```
## Route Parameters
São parâmetros que estão na `url`, mas não são nomeados, utilizado normalmente para identificação de recurso.

```
/users/1
```

## Request Body
Utilizado normalmente para o envio de informações por formulário, nenhum de seus recursos está na `url`.