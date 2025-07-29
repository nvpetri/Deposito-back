const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
    nome: { type: DataTypes.STRING, allowNull: false },
    tipo: { type: DataTypes.STRING, allowNull: false },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    custo: { type: DataTypes.FLOAT, allowNull: false },
    venda: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = { Produto };
