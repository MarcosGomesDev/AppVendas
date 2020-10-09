const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

//ID do pedido, Numero do pedido, Data do pedido, Qtd, 
const Pedido = sequelize.define("pedido", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    numPedido:{
        allowNull: false,
        type: Sequelize.INTEGER(),
        autoIncrement: true
    },
    dtPedido:{ 
        allowNull: false,
        type: Sequelize.DATE()
    },
    qtdPedido:{
        allowNull: false,
        type: Sequelize.INTEGER()
    }
});

module.exports = Pedido;