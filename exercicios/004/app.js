const express = require('express');
const app = express();
const { engine } = require('express-handlebars');  // Correção no modo de importação
const bodyParser = require('body-parser')


// config
    // Template Engine
    app.engine('handlebars', engine({ defaultLayout: 'main' }));
    app.set('view engine', 'handlebars');

    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

    // Conexão com o banco de dados MySQL
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('sistemadecadastro', 'root', '35xqnaqw', {
        host: 'localhost',
        dialect: 'mysql'
    });

    // Teste de conexão com o banco de dados
    sequelize.authenticate()
        .then(() => {
            console.log('Conexão com o banco de dados bem-sucedida!');
        })
        .catch((err) => {
            console.error('Não foi possível conectar ao banco de dados:', err);
        });

    // Rotas
    app.get('/', function(req, res) {
        res.render('formulario')
    });

    app.post('/rp', function(req, res) {
        res.send(`Texto: ${req.body.titulo}</br> Conteudo: ${req.body.conteudo}`)
    })





app.listen(8080, function () {
    console.log('servidor online');
});
