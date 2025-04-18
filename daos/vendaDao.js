// src/dao/vendasDao.js
const { Venda } = require('../models/venda');

exports.registrarVenda = async (produtoId, quantidade, valorUnitario) => {
    const venda = await Venda.create({
        produtoId,
        quantidade,
        valorUnitario,
        total: quantidade * valorUnitario
    });
    return venda;
};
