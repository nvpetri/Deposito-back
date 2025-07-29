const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const { Produto } = require('./produtos.js');

const Venda = sequelize.define('Venda', {
    produtoId: { type: DataTypes.INTEGER, allowNull: false },
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    valorUnitario: { type: DataTypes.FLOAT, allowNull: false },
    total: { type: DataTypes.FLOAT, allowNull: false }
});

Venda.belongsTo(Produto, { foreignKey: 'produtoId' });

module.exports = { Venda };
