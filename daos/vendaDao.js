const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Registrar uma nova venda
const registrarVenda = async (produtoId, quantidade, valorUnitario) => {
  try {
    const produto = await prisma.produto.findUnique({
      where: { id: parseInt(produtoId) }
    });

    if (!produto) {
      throw new Error('Produto não encontrado');
    }

    if (produto.quantidade < quantidade) {
      throw new Error('Estoque insuficiente');
    }

    // Atualizar quantidade do produto
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

    return venda;
  } catch (error) {
    throw new Error('Erro ao registrar venda: ' + error.message);
  }
};

// Listar todas as vendas
const listarVendas = async () => {
  try {
    const vendas = await prisma.venda.findMany({
      include: { produto: true } // Incluir dados do produto
    });
    return vendas;
  } catch (error) {
    throw new Error('Erro ao listar vendas: ' + error.message);
  }
};

// Buscar venda por ID
const getVenda = async (id) => {
  try {
    const venda = await prisma.venda.findUnique({
      where: { id: parseInt(id) },
      include: { produto: true }
    });
    return venda;
  } catch (error) {
    throw new Error('Erro ao buscar venda: ' + error.message);
  }
};

// Deletar venda
const deletarVenda = async (id) => {
  try {
    const venda = await prisma.venda.delete({
      where: { id: parseInt(id) }
    });
    return { message: 'Venda deletada com sucesso', venda };
  } catch (error) {
    throw new Error('Erro ao deletar venda: ' + error.message);
  }
};

module.exports = {
  registrarVenda,
  listarVendas,
  getVenda,
  deletarVenda
};
