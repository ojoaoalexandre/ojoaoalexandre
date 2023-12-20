O Git é um versionador de código que trabalha de foram distribuída e essa é a principal diferença em comparação com seus antecessores (SCCS, RCS, CVS e SVN) que trabalhavam de forma centralizada.
## Centralizado
Em um sistema centralizado temos que, enquanto estamos alterando um arquivo esse mesmo arquivo fica indisponível para os demais usuários do repositório permitindo que apenas uma pessoa realize alterações por vez, até aí tudo bem, mas após a alteração é necessário realizar o `checkout` que é justamente onde temos o maior conflito, porque se o usuário se esquecer de realizá-lo as alterações não poderão ser realizadas por outra pessoa nesse mesmo arquivo.
## Distribuído
Em um sistema distribuído temos a função de `merge` das mudanças que nos permite criar clones do repositório e realizar qualquer tipo de alteração.

Existem 3 estágios em que o arquivo pode estar dentro do processo de salvamento no git:
1. Modified: nesse estágio inicial o arquivo é apenas conhecido pelo git
2. Staged: são os arquivos que não só receberam alteração como estão no "palco" para em breve serem empacotados
3. Commit: quando agrupamos as mudanças e estamos prontos para nomear essas alterações
## Comandos

```
git log
git log --oneline
```

```
git status
git commit -m "Title to commit"
git commit --amend
```

```
git diff
```