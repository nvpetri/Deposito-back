const { Venda } = require('../models/venda.js');
const { Produto } = require('../models/produtos.js');

exports.registrarVenda = async (produtoId, quantidade, valorUnitario) => {
    const produto = await Produto.findByPk(produtoId);
    if (!produto) throw new Error('Produto não encontrado');

    if (produto.quantidade < quantidade) throw new Error('Estoque insuficiente');

    produto.quantidade -= quantidade;
    await produto.save();

    return await Venda.create({
        produtoId,
        quantidade,
        valorUnitario,
        total: quantidade * valorUnitario
    });
};

exports.listarVendas = async () => {
    return await Venda.findAll({
        include: [{ model: Produto, attributes: ['nome', 'tipo', 'custo'] }],
        order: [['createdAt', 'DESC']]
    });
};
