const Sequelize = require('sequelize');

const sequelize = require('../database/database.js');

const Produto = sequelize.define("produto", {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome:{
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    precoCusto:{
        allowNull: false,
        type: Sequelize.FLOAT(),
        validate:{
            len: [0, 2]
        }
    },
    precoVenda:{
        allowNull: false,
        type: Sequelize.FLOAT(),
        validate:{
            len: [0, 100]
        }
    },
    qtdEstoque:{
        allowNull: false,
        type: Sequelize.INTEGER(),
        validate: {
            len: [0, 9999]
        }
    }
});

module.exports = Produto;