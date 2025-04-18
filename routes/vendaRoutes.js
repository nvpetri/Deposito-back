const express = require('express');
const router = express.Router();

// Importando o controller de vendas
const vendaController = require('../controllers/vendaController');

// Definindo as rotas de CRUD para vendas
router.post('/', vendaController.registrarVenda);      // Registrar venda
router.get('/', vendaController.listarVendas);        // Listar todas as vendas
router.get('/:id', vendaController.getVenda);         // Buscar venda por ID
router.delete('/:id', vendaController.deletarVenda);  // Deletar venda

module.exports = router;
