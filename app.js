// src/app.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const produtoRoutes = require('./routes/produtoRoutes');
const vendasRoutes = require('./routes/vendasRoutes');

// Configuração do dotenv
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());  // Para aceitar JSON no corpo da requisição
app.use(cors());          // Permite requisições de outros domínios

// Rotas
app.use('/produtos', produtoRoutes);
app.use('/vendas', vendasRoutes);

// Porta para o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
