# DesafioNode
API para consultar CEP e exibir o resultado. Com a funcionalidade de usar memória nos últimos 5 minutos.

## Estrutura do projeto:

desafionode/
* ├── package.json
* ├── server.js
* ├── README.md
* ├── .env
* └── .gitignore


## Instruções:

🔗 Endpoint: GET /cep/:cep

🌐 Fonte de dados: https://viacep.com.br/ws/CEP/json/

⚡ Stack: Node.js + Express + Axios

## Instalação:

### Instale as dependências Node.js: 

```npm install express axios cors dotenv```

- express → framework web para Node.js;
- axios → cliente HTTP para fazer a requisição ao ViaCEP;
- cors → permite que outros domínios acessem a API (útil se quiser chamar do front-end);

### No seu package.json, adicione:

 ```
 "scripts":
 {"start": "node server.js"}
 ```

### Crie um arquivo chamado .env na raiz do projeto:

 ```
 API_TOKEN=meu_token_secreto_123
 PORT=3000
 ```

### Rode o projeto "desafionode":

```npm start```
