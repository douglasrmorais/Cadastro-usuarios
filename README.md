# Cadastro de Usuários

Aplicação full stack para cadastro e gerenciamento de usuários, com uma interface web em React e uma API REST em Node.js. O frontend permite cadastrar, consultar e excluir usuários, enquanto o backend disponibiliza operações de criação, listagem, atualização e exclusão com persistência em MongoDB.

## Funcionalidades

- Cadastro de usuário com nome, idade e e-mail.
- Validação dos campos e exibição de mensagens de sucesso ou erro.
- Listagem dos usuários cadastrados, com nome, idade, e-mail e avatar.
- Exclusão de usuários.
- Navegação entre as telas de cadastro e listagem.

## Tecnologias utilizadas

- **React 19** — construção da interface.
- **Vite** — servidor de desenvolvimento e geração do build.
- **JavaScript (ES modules)**.
- **React Router** — navegação entre páginas.
- **Styled Components** — estilos dos componentes.
- **Axios** — comunicação com a API.
- **React Toastify** — notificações para o usuário.
- **ESLint** — análise estática e padronização do código.

## Backend

A API REST foi desenvolvida com **Node.js**, **Express 5** e **Prisma 6**, com **MongoDB** como banco de dados. O CORS permite requisições entre origens diferentes. O backend é um projeto separado e deve estar disponível e em execução para o frontend se conectar.

O modelo `User` possui os campos `id` (ObjectId do MongoDB, gerado automaticamente), `email` (obrigatório e único), `name` (obrigatório) e `age` (inteiro obrigatório).

### Endpoints

| Método | Rota | Descrição |
| --- | --- | --- |
| `GET` | `/usuarios` | Lista os usuários cadastrados. |
| `POST` | `/usuarios` | Cadastra um usuário e retorna `201`. |
| `PUT` | `/usuarios/:id` | Atualiza os dados de um usuário e retorna `200`. |
| `DELETE` | `/usuarios/:id` | Exclui um usuário e retorna uma mensagem de confirmação. |

As requisições que enviam dados devem usar `Content-Type: application/json`. Para cadastrar, por exemplo:

```json
{
  "email": "ana@example.com",
  "name": "Ana",
  "age": 28
}
```

### Configuração e execução do backend

É necessário ter Node.js, npm e uma instância MongoDB acessível. Configure `DATABASE_URL` no arquivo `.env` do backend com sua própria URL de conexão:

```env
DATABASE_URL="mongodb+srv://<usuario>:<senha>@<cluster>/<banco>"
```

Não compartilhe nem versione credenciais de banco de dados. Na pasta do backend, instale as dependências e inicie a API:

```bash
npm install
node --env-file=.env server.js
```

A opção `--env-file` requer uma versão do Node.js que ofereça suporte a ela. Por padrão, a API escuta na porta `3000`.

O frontend se conecta à API em `http://localhost:3000` e usa `POST /usuarios` para cadastro, `GET /usuarios` para listagem e `DELETE /usuarios/:id` para exclusão. A API também oferece atualização por `PUT /usuarios/:id`.

> A API não define autenticação, paginação ou validação explícita dos dados recebidos. O script `test` do backend ainda é um placeholder, sem testes configurados.

## Requisitos do frontend

- Node.js e npm instalados.
- O backend disponível em `http://localhost:3000` para utilizar as funcionalidades que acessam a API.

## Como executar

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Abra no navegador o endereço exibido pelo Vite no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Gera a versão de produção na pasta `dist`. |
| `npm run preview` | Serve localmente o build de produção. |
| `npm run lint` | Executa o ESLint nos arquivos do projeto. |
