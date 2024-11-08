const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '35xqnaqw', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('conectado')
}).catch(function() {
    console.log('falha')
})