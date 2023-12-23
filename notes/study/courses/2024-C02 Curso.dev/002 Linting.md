## Editor Config
O Editor Config é um Configurador do Editor que nos ajuda a definir regras de estilização dos arquivos, ele aplica essas estilização antes do salvamento.

```
.editorconfig

root = true

[*]
indent_style = space
indent_size = 2
```

> Instale o Editor Config plugin no VS Code para carregar as informações

## Prettier
É um formatador de código que, diferente do **editor config**, permite alterar as formatações anteriores a inserção.
```
npm i prettier -D
```

Agora basta adicionar um atalho para execução dessa biblioteca.
```
// package.json

"scripts": {
  "lint": "prettier --check .",
  "lint:fix": "prettier --write ."
}
```

Os atalhos ajudam bastante, mas ter que executá-lo pode ocupar um tempo e energia desnecessários, por isso podemos automatizar ainda mais essa ação:
1. Instalando o plugin `Prettier`
2. Definindo o `Default Formatter` como `Prettier`
3. Habilitar a função no editor: `Format On Save`
4. Desligar a função `Auto Save`

> Anteriormente precisávamos adicionar um arquivo `.prettierignore` para informar os arquivos que deveriam ser ignorados pelo formatador, arquivos como `.next` e `build`, a partir da versão 3 o prettier começou a considerar o arquivo `.gitignore` para definir os arquivos que serão ignorados