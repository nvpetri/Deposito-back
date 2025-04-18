// Importando as dependências
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Carregando variáveis de ambiente
dotenv.config();

// Criando a instância do app
const app = express();

// Configurando o middleware
app.use(express.json()); // Para ler JSON no corpo das requisições
app.use(cors()); // Habilita CORS (Cross-Origin Resource Sharing)

// Importando as rotas
const produtoRoutes = require('./routes/produtoRoutes');

// Usando as rotas
app.use('/api/produtos', produtoRoutes);

// Definindo a porta do servidor
const PORT = process.env.PORT || 5000;

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
