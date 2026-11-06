# Cadastro de Usuários

Aplicação web para cadastrar e consultar usuários. O projeto oferece uma interface simples para preencher os dados de uma pessoa, visualizar os usuários cadastrados e removê-los da lista.

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

## Requisitos

- Node.js e npm instalados.
- Uma API de cadastro de usuários disponível em `http://localhost:3000`.

O frontend usa os endpoints `POST /usuarios` para cadastrar, `GET /usuarios` para listar e `DELETE /usuarios/:id` para excluir usuários. A API/backend não está incluída neste projeto e precisa estar em execução para essas funcionalidades funcionarem.

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
