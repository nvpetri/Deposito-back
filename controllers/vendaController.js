const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Registrar uma nova venda
const registrarVenda = async (req, res) => {
  const { produtoId, quantidade, valorUnitario } = req.body;

  try {
    // Verificar se o produto existe
    const produto = await prisma.produto.findUnique({
      where: { id: parseInt(produtoId) }
    });

    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }

    if (produto.quantidade < quantidade) {
      return res.status(400).json({ message: 'Estoque insuficiente' });
    }

    // Atualizar a quantidade do produto no estoque
    await prisma.produto.update({
      where: { id: parseInt(produtoId) },
      data: { quantidade: produto.quantidade - quantidade }
    });

    // Registrar a venda
    const venda = await prisma.venda.create({
      data: {
        produtoId,
        quantidade,
        valorUnitario,
        total: (quantidade * valorUnitario).toFixed(2),
        data: new Date()
      }
    });

    res.status(201).json(venda);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar venda', error });
  }
};

// Listar todas as vendas
const listarVendas = async (req, res) => {
  try {
    const vendas = await prisma.venda.findMany({
      include: { produto: true } // Incluir as informações do produto na venda
    });
    res.status(200).json(vendas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar vendas', error });
  }
};

// Buscar venda por ID
const getVenda = async (req, res) => {
  const { id } = req.params;
  try {
    const venda = await prisma.venda.findUnique({
      where: { id: parseInt(id) },
      include: { produto: true }
    });
    if (!venda) return res.status(404).json({ message: 'Venda não encontrada' });
    res.status(200).json(venda);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar venda', error });
  }
};

// Deletar venda
const deletarVenda = async (req, res) => {
  const { id } = req.params;
  try {
    const venda = await prisma.venda.delete({
      where: { id: parseInt(id) }
    });
    res.status(200).json({ message: 'Venda deletada com sucesso', venda });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar venda', error });
  }
};

module.exports = {
  registrarVenda,
  listarVendas,
  getVenda,
  deletarVenda
};
