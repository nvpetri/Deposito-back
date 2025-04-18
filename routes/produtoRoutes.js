const express = require('express');
const router = express.Router();

// Importando o controller de produtos
const produtoController = require('../controllers/produtoController');

// Definindo as rotas de CRUD para produtos
router.post('/', produtoController.criarProduto);      // Criar produto
router.get('/', produtoController.listarProdutos);    // Listar todos os produtos
router.get('/:id', produtoController.getProduto);     // Buscar produto por ID
router.put('/:id', produtoController.atualizarProduto); // Atualizar produto
router.delete('/:id', produtoController.deletarProduto); // Deletar produto

module.exports = router;
