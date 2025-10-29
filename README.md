# Kivo Agency - Website

Este é o site da agência Kivo, construído com HTML, CSS e JavaScript, e pronto para ser implantado no Firebase Hosting.

## Estrutura do Projeto

- **/public**: Contém todos os arquivos estáticos do site.
  - **/assets**: Subdiretórios para CSS, JS, imagens e fontes.
  - **index.html**: Página inicial.
  - **about.html**: Página Sobre.
  - **services.html**: Página de Serviços.
  - **portfolio.html**: Página do Portfólio.
  - **contact.html**: Página de Contato.
- **firebase.json**: Arquivo de configuração para o Firebase Hosting.
- **README.md**: Este arquivo.

## Deploy no Firebase Hosting

Siga os passos abaixo para fazer o deploy do site:

1.  **Instale o Firebase CLI:**
    Se você ainda não tem, instale a Interface de Linha de Comando do Firebase globalmente.
    ```bash
    npm install -g firebase-tools
    ```

2.  **Faça login no Firebase:**
    ```bash
    firebase login
    ```

3.  **Inicialize o Firebase no seu projeto (se ainda não o fez):**
    Navegue até a raiz do seu projeto e execute o comando:
    ```bash
    firebase init hosting
    ```
    - Selecione um projeto existente do Firebase ou crie um novo.
    - Quando perguntado sobre o diretório público, digite **public**.
    - Configure como um single-page app (SPA) respondendo **Sim** para reescrever todas as URLs para /index.html.

4.  **Faça o deploy:**
    Para fazer o deploy do seu site para o projeto `studio-8007376893`, use o comando:
    ```bash
    firebase deploy --project studio-8007376893
    ```
    Ou, se você já configurou o projeto padrão no seu `.firebaserc`, pode usar apenas:
    ```bash
    firebase deploy
    ```

Após o deploy ser concluído, o CLI do Firebase fornecerá a URL do seu site.
