const express = require('express');
const produtoController = require('../controllers/produtoController.js');
const router = express.Router();

router.post('/', produtoController.adicionarProduto);
router.get('/', produtoController.listarProdutos);
router.patch('/:id/reposicao', produtoController.reporEstoque); // novo
router.delete('/:id', produtoController.removerProduto);        // novo

module.exports = router;
