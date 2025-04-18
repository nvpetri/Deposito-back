// src/dao/produtoDao.js
const { Produto } = require('../models/Produto');

exports.adicionarProduto = async (nome, tipo, quantidade, custo, venda) => {
    const produto = await Produto.create({ nome, tipo, quantidade, custo, venda });
    return produto;
};

exports.listarProdutos = async () => {
    const produtos = await Produto.findAll();
    return produtos;
};
