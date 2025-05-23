// src/controllers/produtoController.js
const produtoDao = require('../dao/produtoDao');

exports.adicionarProduto = async (req, res) => {
    const { nome, tipo, quantidade, custo, venda } = req.body;

    if (!nome || !tipo || !quantidade || !custo || !venda) {
        return res.status(400).json({ message: 'Dados incompletos!' });
    }

    try {
        const produto = await produtoDao.adicionarProduto(nome, tipo, quantidade, custo, venda);
        res.status(201).json(produto);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao adicionar produto', error: err });
    }
};

exports.listarProdutos = async (req, res) => {
    try {
        const produtos = await produtoDao.listarProdutos();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar produtos', error: err });
    }
};
