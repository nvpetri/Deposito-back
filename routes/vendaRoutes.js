const express = require('express');
const vendasController = require('../controllers/vendaController.js');
const router = express.Router();

router.post('/', vendasController.registrarVenda);
router.get('/', vendasController.listarVendas); // novo

module.exports = router;
