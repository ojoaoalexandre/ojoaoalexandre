As versões de node.js podem ser gerenciadas em uma mesma máquina com o `nvm`, que facilita o gerenciamento e a instalação de novas versões.

Listar comandos disponíveis:

```bash
nvm --help
nvm --h
```

Listar as versões instaladas e disponíveis para instalação:

```bash
nvm list
nvm ls
```

Para tornar uma versão padrão:

```bash
nvm alias default lst/hydrogen
```

> 💡 As versões do tipo lts são versões que recebem suporte estendido.

É possível informar a versão do node que está sendo utilizado no projeto por meio de um arquivo de nome `.nvmrc`, arquivos com a terminação `rc` normalmente são utilizados como arquivos de inicialização onde essas duas letras finais significam: Run Commands.

```
// .nvmrc
lts/hydrogren
```
