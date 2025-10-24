// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// Rota principal
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de consulta de CEP via ViaCEP' });
});

// Rota para consultar o CEP
app.get('/cep/:cep', async (req, res) => {
  const { cep } = req.params;

  try {
    // Consulta o site oficial ViaCEP
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.data.erro) {
      return res.status(404).json({ erro: 'CEP não encontrado' });
    }

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao consultar o CEP' });
  }
});

// Sobe o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
