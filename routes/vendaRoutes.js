// src/routes/vendasRoutes.js
const express = require('express');
const vendasController = require('../controllers/vendasController');
const router = express.Router();

router.post('/', vendasController.registrarVenda);

module.exports = router;
