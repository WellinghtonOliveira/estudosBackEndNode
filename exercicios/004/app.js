const express = require('express')
const app = express()
const handlebars = require('express-handlebars')


// config
    //Template Engine
        app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
        app.set('view engine', ' handlebars')

        
    // Conexão com o banco de dados MySql
        const Sequelize = require('sequelize')
        const sequilize = new sequilize('sistemadecadastro', 'root', '35xqnaqw', {
            host: 'localhost',
            dialect: 'mysql'
        })



app.listen(8080, function () {
    console.log('servidor online')
})