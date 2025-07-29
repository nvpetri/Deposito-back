const { Produto } = require('../models/produtos.js');

exports.adicionarProduto = async (nome, tipo, quantidade, custo, venda) => {
    return await Produto.create({ nome, tipo, quantidade, custo, venda });
};

exports.listarProdutos = async () => {
    return await Produto.findAll();
};

exports.reporEstoque = async (id, quantidade) => {
    const produto = await Produto.findByPk(id);
    if (!produto) throw new Error('Produto não encontrado');
    produto.quantidade += parseInt(quantidade);
    await produto.save();
    return produto;
};

exports.removerProduto = async (id) => {
    const produto = await Produto.findByPk(id);
    if (!produto) throw new Error('Produto não encontrado');
    await produto.destroy();
};
