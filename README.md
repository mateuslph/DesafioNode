# DesafioNode
**API** para consultar **CEP** e exibir o resultado. Com a funcionalidade de usar **memória cache** dos últimos 5 minutos.

## 📁 Estrutura do projeto:

desafionode/   
├── package.json   
├── server.js  
├── eslint.config.mjs   
├── README.md   
├── .env   
└── .gitignore


## 📄 Instruções:

🔗 Endpoint: GET /cep/:cep

🌐 Fonte de dados: https://viacep.com.br/ws/CEP/json/


## 🧩 Stacks (bibliotecas) instaladas e suas funções:

| Pacote | Tipo de ferramenta | Função principal na aplicação |
| ------------- |:-------------|:-------------|
| express | 🧠 Framework web | Cria e gerencia o servidor HTTP e as rotas (/cep, etc). É o coração da API. |
| axios | 🌐 Cliente HTTP | Faz requisições externas — no seu caso, consulta o ViaCEP para buscar o endereço. |
| node-cache |⚡ Sistema de cache em memória | Guarda dados temporariamente (como o resultado do CEP) por 5 minutos, evitando novas chamadas ao ViaCEP. | 
| cors | 🔒 Middleware de segurança (Cross-Origin Resource Sharing) | Permite que outros domínios (ex: seu site em React) acessem essa API sem bloqueio do navegador. |
| dotenv | ⚙️ Gerenciador de variáveis de ambiente | Carrega configurações seguras (como tokens e senhas) do arquivo .env, sem expor no código-fonte. |

## 👉 Juntas, essas stacks formam uma API Node.js moderna e completa, com:

- autenticação ✅;

- cache de performance ✅;

- acesso controlado ✅;

- integração externa (ViaCEP) ✅;

> ## Instalação:

### Instale as dependências Node.js: 

```bash
npm install node-cache axios express cors dotenv
npm npm install eslint --save-dev
```

- node-cache → permite armazenar dados na memória do servidor por um determinado tempo (TTL – Time To Live);
- axios → cliente HTTP para fazer a requisição ao ViaCEP;
- express → framework web para Node.js;
- cors → permite que outros domínios acessem a API;
- dotenv → permite você carregar variáveis de ambiente.   

> SLint é uma ferramenta de análise estática de código para JavaScript, serve para encontrar problemas e inconsistências no seu código.   

### ⚡ Por que usar ESLint:
* Evita erros de sintaxe;
* Padroniza o estilo do código entre diferentes desenvolvedores;
* Facilita a manutenção e legibilidade do código;
* Inconsistências de estilo.

### No seu package.json, adicione:

 ```js
 "scripts":
 {"start": "node server.js"}
 ```

### Crie um arquivo chamado .env na raiz do projeto:

 ```conf
 API_TOKEN=meu_token_secreto_123
 PORT=3000
 ```

### Rode o projeto "desafionode":

```bash
npm start
```
