<h1 style="text-align: center;">Desafio Warren - Web</h1>

![Projeto Desafio Warren](https://i.imgur.com/67WkE69.png)

> Lista de transações com filtragem por títulos e status, ordenação por datas (da mais recente para a mais antiga) e modal contendo detalhes da transação ao clicar sobre uma transação da tabela.

<details>
  <summary>Conteúdos</summary>
  <ol>
    <li><a href="#sobre-o-projeto">Sobre o projeto</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <li><a href="#instalacao-das-dependencias">Instalação das dependências</a>
      <ul>
        <li><a href="#pre-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalacao">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#utilizacao">Utilização</a></li>
    <li><a href="#to-do">To-Do</a></li>
  </ol>
</details>

## Sobre o projeto

O projeto do desafio foi desenvolvido utilizando a biblioteca _React_ para a construção da interface, juntamente com o _Next.js_, embora esse último não fosse muito necessário para o projeto e fora utilizado por costume, caso o projeto acabasse se expandindo, a utilização de um framework iria auxiliar na manutenção e criação de funcionalidades dentro do projeto.

A lógica do modal foi feita do zero, sem a utilização de bibliotecas de terceiros, pois por se tratar de apenas uma página/tela, com uma tabela e um _modal_ que abre ao clicar em qualquer transação, tiraria boa parte do desafio no projeto. Toda a lógica foi colocada em um contexto próprio para o modal em um arquivo no qual exporta um _hook_ para utilizar o mesmo, e também o _Provider_ para "envelopar" a aplicação.

Foi utilizado o styled-components para a utilização de CSS em arquivos .ts (typescript), fazendo o uso da técnica _CSS-in-JS_, aproximando a estilização com o código, e criando componentes já estilizados. Por requisito, não foi utilizada nenhuma biblioteca com componentes já prontos para uso, criando todos do zero e estilizando. As cores escolhidas foram cores utilizadas no site oficial da Warren.

A filtragem por título utilizando a barra de buscas, e a filtragem por status utilizando um elemento de _select_ foram colocados em um contexto próprio assim como o Modal, foi utilizado o hook _useReducer_ do React para a criação da lógica e armazenamento das transações no estado do contexto, sendo acessível por outros componentes. Toda a filtragem, tanto por título quanto por status, são feitas em tempo real enquanto o usuário digita ou seleciona, alterando a visualização das transações na tabela, sem precisar realizar uma nova requisição para a _API_ a cada busca.

Por questões de acessibilidade o cursor do mouse se torna um ponteiro ao passar por qualquer transação na tabela, mostrando para o usuário que se trata de algo clicável. Ao clicar em qualquer transação, abre-se um modal contendo as informações da transação. Para fechar o modal o usuário pode:

1. Apertar o botão de fechar indicado por um X no canto superior direito do modal
2. Pressionar a tecla Esc/Escape do teclado
3. Clicar em qualquer área escurecida (overlay) ao abrir o modal, fora do corpo do mesmo (área branca), retornando pra visualização da tabela.

Os dados das transações são formatados no momento em que é feito a requisição, estilizando a moeda para o formato em Reais (BRL). O valor transferido/retirado passa a ter uma cor vermelha para indicar débito, e a barra de progresso muda de acordo com o _status_ da transação.

### :coffee: Tecnologias utilizadas {#tecnologias-utilizadas}

Tecnologias utilizadas no desenvolvimento da aplicação.

O padrão de commits seguido no projeto foi o [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), tornando a leitura do histórico entre as alterações mais fácil e semântica.

Entre as tecnologias utilizadas, podemos citar algumas como:

- [Git](https://git-scm.com/): Sistema de controlamento de versões, utilizado para versionar e documentar a evolução e desenvolvimento do projeto.

- [React](https://reactjs.org/): Biblioteca JavaScript para construção de interfaces, baseada em componentes.

- [Next.js](https://nextjs.org/): Framework React, utilizado para produção de páginas que podem exigir a geração de páginas estáticas, ou renderização pelo lado do servidor, útil para indexação.

- [TypeScript](https://www.typescriptlang.org/): Superset do JavaScript para adicionar tipagem ao código, facilitando o uso de testes e melhorando produtividade, entre outras vantagens.

- [Axios](https://github.com/axios/axios): Biblioteca utilizada para a realização de requisições HTTP.

- [Jest](https://jestjs.io/): Framework Javascript para a criação de testes, utilizado no projeto para criação de testes unitários.

- [Cypress](https://www.cypress.io/): Framework para testes automatizados de ponta-a-ponta (E2E).

- [styled-components](https://styled-components.com/): Biblioteca para utilização de CSS in JS, adicionando estilização aos arquivos JavaScript/TypeScript, utilizado para criação de componentes estilizados.

## Instalação das dependências {#instalacao-das-dependencias}

### :computer: Pré-requisitos {#pre-requisitos}

Para a utilização da aplicação são necessários alguns softwares, listados abaixo:

- [git](https://git-scm.com/): Utilizado para clonar o repositório do projeto.
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/): Gerenciador de pacotes para a instalação automática das dependências do projeto
- [Node.js](https://nodejs.org/en/): Runtime para utilizar o gerenciador de pacotes e necessário para rodar a aplicação.

### :rocket: Instalação {#instalacao}

Passos para a instalação do projeto:

1. Clonar repositório:

   Utilizando HTTPS:

   ```sh
     git clone https://github.com/vnl13/desafio-warren-web.git
   ```

   Utilizando SSH:

   ```sh
     git clone git@github.com:vnl13/desafio-warren-web.git
   ```

2. Instalar os pacotes necessários:
   Utilizando yarn (dentro da pasta do projeto):

   ```sh
   yarn
   ```

   Utilizando npm (dentro da pasta do projeto):

   ```sh
   npm install
   ```

## Utilização {#utilizacao}

> Obs: Altere o comando de **yarn** para **npm run**, caso esteja utilizando o _npm_ ao invés do _yarn_ como gerenciador de pacotes.

O projeto possui três comandos de _script_ para rodar o projeto:

<!-- O projeto possui quatro comandos de _script_ para rodar o projeto: -->

Para fazer o _build_ do projeto com os arquivos para produção e otimizados utilize:

```sh
yarn build
```

(Necessário ter realizado o passo anterior) Para iniciar o projeto de forma padrão com a build de produção utilize:

```sh
yarn start
```

Para iniciar o projeto em modo de desenvolvimento utilize:

```sh
yarn dev
```

<!-- Para rodar os testes presentes no projeto utilize:

```sh
yarn test
``` -->

## :notebook: To-Do {#to-do}

Algumas coisas que ainda precisam ser implementadas ou alteradas no projeto:

- [ ] Alterar estilização do modal
- [ ] Alterar estilização da tabela de transações
- [ ] Criação de testes unitários (Jest/Testing Library)
- [ ] Criação de testes E2E (Cypress)
- [ ] Deploy na Vercel
