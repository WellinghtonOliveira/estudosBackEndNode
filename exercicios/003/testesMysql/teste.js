const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '35xqnaqw', {
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.create({
//     titulo: 'teste de titulo',
//     conteudo: 'dfnsedofi dfoidfoisdjfsõdifj idsjf~sidjf'
// })

const  Ususario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Ususario.create({
    nome: 'wellinghton',
    sobrenome: 'Oliveira Batista',
    idade: '19',
    email: 'teste@gmail.com'
})

//Ususario.sync({force: true})