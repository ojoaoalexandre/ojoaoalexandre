# HTML
O HTML (Hypertext Markup Language) é, como diz o próprio nome, uma linguagem de marcação que nos permite adicionar valor semântico aos textos impressos em tela.
A menor unidade do HTML é a tag, composta pelo sinal de menor, nome da tag e sinal de maior, podendo conter um conteúdo adicional.

```html
<h1>Isso é um título</h1>
```

## Títulos
As tags de títulos são uma das mais utilizadas e podem variar de `<h1>` até `<h6>`, sendo o primeiro caso o título de maior importância.

## Paragrafos
Outra tag de maior uso é a que define parágrafos:

```html
<p>Isso é um parágrafo
```

## Comentários
Quando queremos adicionar ao código observações que não serão expostas para os usuários, que podem servir apenas de esclarecimento para os desenvolvedores adicionamos comentários ao código.

```html
<!-- Isso é um comentário -->
```

## HTML5
A última versão do HTML, conhecida como HTML5 introduziu algumas tags que definiram ainda melhor certas áreas de aplicações web que antes não tinham um significado semântico tão definido, algumas dessas adições são:

```html
<mai>Conteúdo Principal do site</mai>
```

Essas tags ajudam na identificação do conteúdo por parte dos robôs dos sites de busca, quanto mais você utilizá-las de maneira certa maior será a possibilidade de melhorar o SEO da página.

> 💡 Apesar de ser ignorada pelo browser, a identação do código melhora a legibilidade por parte do desenvolvedor

## Imagens
Algumas tags não possuem uma tag de fechamento, ou seja, elas terminam em si mesmas, uma das mais utilizadas é a `<img />` que permite a adição de imagens à página.

```html
<img src="" alt="" />
```

Essa tag possui dois principais atributos que precisam ser preenchidos, o `src` com o endereço relativo ou absoluto da imagem e o `alt` que deve possuir um texto alternativo, para caso a imagem não seja encontrada.

## Links
As páginas web ganharam suas primeiras interações com o usuário por meio de links que permitem transitar em meio ao conteúdo, para adicioná-los ao seu projeto use a tag `a`:

```html
<a href="www.google.com">Isso é um link para o Google</a>
```

> 💡 Os links podem receber um atributos `target` que define como a página de referência será aberta, para os casos em que queremos que o link abra uma nova aba de navegação com o conteúdo adicionamos `target="_blank"`.

## Section
Outra novidade do HTML5 foi a adição da tag `section`, que permite o agrupamento de conteúdo dentro de uma mesma seção ao mesmo tempo que adiciona o valor semântico informando de que todo o conteúdo pertence a mesma seção.

## Listas
Existem duas formas de se adicionar listas ao HTML:

```html
<!-- Listas Ordenadas -->
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>


<!-- Listas sem ordenação -->
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```

## Figure
Outra forma de adicionar uma imagem ao projeto e associá-la a uma descrição:

```html
<figure>
   <img src="" alt="" />
  <figcaption>Uma descrição da imagem</figcaption>
</figure>
```

## Ênfase
Existem duas principais formas de se dar ênfase a palavras no texto:

```html
<p>Vamos dar <em>ênfase</em>.</p>
<p>Vamos dar <strong>ênfase</strong>.</p>
```

## Formulários
O formulário é uma das formas mais avançadas de interação com o usuário e são adicionados por meio das tags `form`:

```html
<form>
  <!-- Formulário aqui -->
</form>
```

Para submeter os dados devemos adicionar a referência do caminho responsável pelo processamento desses dados, para isso podemos adicionar o atributo `action`:

```html
<form arction="/caminho">
   <!-- Formulário aqui -->
</form>
```

### Entradas dos formulários
O formulário pode receber diferentes tipos de dados pelo usuário, e esses diferentes tipos podem ser controlados e tratados pelo tipo de campo que adicionamos, em sua maioria os campos são adicionados por:

```html
<input type="text" name="email" />
```

A tag input recebe dois principais atributos, `type` que recebe o tipo de dado que será inserido, esse campo é responsável também pela forma como ele será apresentado para o usuário, e o atributo `name` que permite nomear o dado para posterior resgate por essa referência diretamente no servidor.

Além desses, existem outros atributos que podem facilitar o preenchimento e tratamento dos dados, como o `placeholder` que permite a adição de uma legenda ao campo quando ele estiver ainda vazio e o `required` que torna o campo obrigatório, impedindo o envio dos dados até que o campo seja preenchido.
