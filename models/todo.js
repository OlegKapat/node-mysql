const Sequileze = require('sequelize');
const sequilize = require('../utils/database');


const todo = sequilize.define('Todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequileze.INTEGER
    },
    done: {
        type: Sequileze.BOOLEAN,
        allowNull: false
    },
    title: {
        type: Sequileze.STRING,
        allowNull: false
    },

})

module.exports = todo;