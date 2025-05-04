# API de Gerenciamento de Usuários

Esta é uma API simples desenvolvida em Node.js utilizando Express e Prisma para gerenciar informações de usuários.

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework web para Node.js.
* **Prisma**: ORM (Object-Relational Mapper) para acesso ao banco de dados.

## Pré-requisitos

Antes de executar esta API, certifique-se de ter instalado:

* Node.js (versão 14 ou superior recomendada)
* npm ou yarn (gerenciador de pacotes)
* Um banco de dados compatível com Prisma (por exemplo, PostgreSQL, MySQL, SQLite, etc.)
* Ter o Prisma CLI instalado e configurado com a conexão ao seu banco de dados.

## Configuração do Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <PASTA_DO_PROJETO>
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

3.  **Configure o Prisma:**
    Certifique-se de que seu arquivo `.env` na raiz do projeto contenha a URL de conexão com o seu banco de dados, por exemplo:
    ```env
    DATABASE_URL="postgresql://user:password@host:port/database"
    ```

4.  **Execute as migrações do Prisma:**
    Isso criará as tabelas necessárias no seu banco de dados com base no seu schema Prisma.
    ```bash
    npx prisma migrate dev --name init
    ```


5.  **Gere o cliente Prisma:**
    Este comando gera o código do cliente Prisma que sua aplicação utilizará para interagir com o banco de dados.
    ```bash
    npx prisma generate
    ```

## Como Executar a API

Para iniciar o servidor da API, execute o seguinte comando:

```bash
npm start
# ou
yarn start
