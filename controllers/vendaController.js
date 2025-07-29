const vendasDao = require('../dao/vendaDao.js');

exports.registrarVenda = async (req, res) => {
    const { produtoId, quantidade, valorUnitario } = req.body;

    if (!produtoId || !quantidade || !valorUnitario) {
        return res.status(400).json({ message: 'Dados incompletos!' });
    }

    try {
        const venda = await vendasDao.registrarVenda(produtoId, quantidade, valorUnitario);
        res.status(201).json(venda);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao registrar venda', error: err.message });
    }
};

exports.listarVendas = async (req, res) => {
    try {
        const vendas = await vendasDao.listarVendas();
        const formatadas = vendas.map(v => ({
            nome: v.Produto.nome,
            tipo: v.Produto.tipo,
            quantidade: v.quantidade,
            valorUnitario: v.valorUnitario,
            total: v.total.toFixed(2),
            custoTotal: v.Produto.custo * v.quantidade,
            data: new Date(v.createdAt).toLocaleDateString('pt-BR')
        }));
        res.status(200).json(formatadas);
    } catch (err) {
        res.status(500).json({ message: 'Erro ao listar vendas', error: err.message });
    }
};
