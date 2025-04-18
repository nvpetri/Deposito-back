const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Criar um novo produto
const criarProduto = async (nome, tipo, quantidade, custo, venda) => {
  try {
    const produto = await prisma.produto.create({
      data: {
        nome,
        tipo,
        quantidade,
        custo,
        venda
      }
    });
    return produto;
  } catch (error) {
    throw new Error('Erro ao criar produto: ' + error.message);
  }
};

// Listar todos os produtos
const listarProdutos = async () => {
  try {
    const produtos = await prisma.produto.findMany();
    return produtos;
  } catch (error) {
    throw new Error('Erro ao listar produtos: ' + error.message);
  }
};

// Buscar produto por ID
const getProduto = async (id) => {
  try {
    const produto = await prisma.produto.findUnique({
      where: { id: parseInt(id) }
    });
    return produto;
  } catch (error) {
    throw new Error('Erro ao buscar produto: ' + error.message);
  }
};

// Atualizar produto
const atualizarProduto = async (id, nome, tipo, quantidade, custo, venda) => {
  try {
    const produto = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: { nome, tipo, quantidade, custo, venda }
    });
    return produto;
  } catch (error) {
    throw new Error('Erro ao atualizar produto: ' + error.message);
  }
};

// Deletar produto
const deletarProduto = async (id) => {
  try {
    await prisma.produto.delete({
      where: { id: parseInt(id) }
    });
    return { message: 'Produto deletado com sucesso' };
  } catch (error) {
    throw new Error('Erro ao deletar produto: ' + error.message);
  }
};

module.exports = {
  criarProduto,
  listarProdutos,
  getProduto,
  atualizarProduto,
  deletarProduto
};
