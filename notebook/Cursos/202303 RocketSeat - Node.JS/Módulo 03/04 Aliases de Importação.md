Durante o processo de importação as referências podem ser tornar muito longas e complicadas, por isso utilizamos aliases para encurtá-las:

```
// tsconfig.json
"baseUrl": "./",
"paths": {
  "@/*": ["./src/*"]
}
```

Essa configuração primeiro faz com que o typescript entenda que qual é a pasta raiz e, depois informa que sempre que digitarmos "@/" procurando alguma referência ele poderá acessar diretamente a pasta "src" e iniciar a referência a partir dela.