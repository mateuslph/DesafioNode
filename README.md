# DesafioNode
**API** para consultar **CEP** e exibir o resultado. Com a funcionalidade de usar **memória cache** dos últimos 5 minutos.

## Estrutura do projeto:

desafionode/   
├── package.json   
├── server.js   
├── README.md   
├── .env   
└── .gitignore


## Instruções:

🔗 Endpoint: GET /cep/:cep

🌐 Fonte de dados: https://viacep.com.br/ws/CEP/json/


## 🧩 Stacks (bibliotecas) instaladas e suas funções:

| Pacote | Tipo de ferramenta | Função principal na aplicação |
| ------------- |:-------------|:-------------|
| express | 🧠 Framework web | Cria e gerencia o servidor HTTP e as rotas (/cep, etc). É o coração da API. |
| axios | 🌐 Cliente HTTP | Faz requisições externas — no seu caso, consulta o ViaCEP para buscar o endereço. |
| node-cache |⚡ Sistema de cache em memória | Guarda dados temporariamente (como o resultado do CEP) por 5 minutos, evitando novas chamadas ao ViaCEP. | 
| cors |  Middleware de segurança (Cross-Origin Resource Sharing) | Permite que outros domínios (ex: seu site em React) acessem essa API sem bloqueio do navegador. |
| dotenv | ⚙️ Gerenciador de variáveis de ambiente | Carrega configurações seguras (como tokens e senhas) do arquivo .env, sem expor no código-fonte. |

## 👉 Juntas, essas stacks formam uma API Node.js moderna e completa, com:

- autenticação ✅;

- cache de performance ✅;

- acesso controlado ✅;

- integração externa (ViaCEP) ✅;

> ## Instalação:

### Instale as dependências Node.js: 

```npm install node-cache axios express cors dotenv```

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
