require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const NodeCache = require('node-cache');

const app = express();
app.use(cors());
app.use(express.json());

// Cria o cache com tempo padrão de 5 minutos (300 segundos)
const cache = new NodeCache({ stdTTL: 300 });

// Middleware de autenticação simples
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ erro: 'Token de autenticação não fornecido.' });
  }

  if (token !== process.env.API_TOKEN) {
    return res.status(403).json({ erro: 'Token inválido.' });
  }

  next();
}

// Rota protegida por token
app.post('/cep', autenticarToken, async (req, res) => {
  const { cep } = req.body;

  if (!cep) {
    return res.status(400).json({ erro: 'CEP não fornecido.' });
  }

  try {
    // Verifica se o CEP está no cache
    const cacheKey = cep.trim();
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log(`Retornando do cache: ${cep}`);
      return res.json({
        origem: 'cache',
        ...cachedData
      });
    }

    // Se não estiver no cache, busca no ViaCEP
    console.log(`Buscando no ViaCEP: ${cep}`);
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    // Caso o CEP seja inválido
    if (response.data.erro) {
      return res.status(404).json({ erro: 'CEP não encontrado no ViaCEP.' });
    }

    const data = response.data;

    // Armazena no cache
    cache.set(cacheKey, data);

    return res.json({
      origem: 'viacep',
      ...data
    });

  } catch (erro) {
    console.error(erro);
    res.status(500).json({ erro: 'Erro ao consultar o CEP.' });
  }
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
