// server.js
require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // permite receber JSON no corpo da requisição

// Middleware de autenticação simples
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // "Bearer token"

  if (!token) {
    return res.status(401).json({ erro: 'Token de autenticação não fornecido.' });
  }

  if (token !== process.env.API_TOKEN) {
    return res.status(403).json({ erro: 'Token inválido.' });
  }

  next();
}

// Rota inicial
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de consulta de CEP via ViaCEP (POST + Autenticação)' });
});

// Rota POST protegida por token
app.post('/cep', autenticarToken, async (req, res) => {
  const { cep } = req.body;

  if (!cep) {
    return res.status(400).json({ erro: 'O campo "cep" é obrigatório.' });
  }

  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return res.status(404).json({ erro: 'CEP não encontrado.' });
    }

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar o CEP.' });
  }
});

// Inicializa o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
