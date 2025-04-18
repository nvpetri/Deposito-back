// src/controllers/vendasController.js
const vendasDao = require('../dao/vendasDao');

exports.registrarVenda = async (req, res) => {
    const { produtoId, quantidade, valorUnitario } = req.body;

    if (!produtoId || !quantidade || !valorUnitario) {
        return res.status(400).json({ message: 'Dados incompletos!' });
    }

    try {
        const venda = await vendasDao.registrarVenda(produtoId, quantidade, valorUnitario);
        res.status(201).json(venda);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao registrar venda', error: err });
    }
};
