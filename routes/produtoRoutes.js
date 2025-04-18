// src/routes/produtoRoutes.js
const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.post('/', produtoController.adicionarProduto);
router.get('/', produtoController.listarProdutos);

module.exports = router;
