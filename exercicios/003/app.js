const express = require('express')
const app = express()

app.get("/", function(req, res) { // descreve uma rota
    res.sendFile(__dirname + '/html/index.html') // __dirname volta a rota inicial 
    
    //res.send('seja bem vindo')
})

/*
app.get('/inf/:nome/:sexo', function(req, res) { // caminhos usando variaveis
    res.send(`<h1>Ola ${req.params.nome}, voce e ${req.params.sexo == 'masculino' ? "Macho" : "Femia"}</h1>`)
}) // so pode enviar um send
*/

app.listen(8080, function() {
    console.log('servidor rodando em localhost:8080')
})



// instalado o npm e express
// npm install express --save