const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar um novo produto
const criarProduto = async (req, res) => {
  try {
    const { nome, tipo, quantidade, custo, venda } = req.body;
    const produto = await prisma.produto.create({
      data: {
        nome,
        tipo,
        quantidade,
        custo,
        venda
      }
    });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

// Listar todos os produtos
const listarProdutos = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar produtos', error });
  }
};

// Buscar produto por ID
const getProduto = async (req, res) => {
  const { id } = req.params;
  try {
    const produto = await prisma.produto.findUnique({
      where: { id: parseInt(id) }
    });
    if (!produto) return res.status(404).json({ message: 'Produto não encontrado' });
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produto', error });
  }
};

// Atualizar produto
const atualizarProduto = async (req, res) => {
  const { id } = req.params;
  const { nome, tipo, quantidade, custo, venda } = req.body;
  try {
    const produto = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: { nome, tipo, quantidade, custo, venda }
    });
    res.status(200).json(produto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

// Deletar produto
const deletarProduto = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.produto.delete({
      where: { id: parseInt(id) }
    });
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};

module.exports = {
  criarProduto,
  listarProdutos,
  getProduto,
  atualizarProduto,
  deletarProduto
};
