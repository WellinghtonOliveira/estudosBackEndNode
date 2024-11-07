const express = require('express')
const app = express()

app.get("/", function(req, res) { // descreve uma rota
    res.send('seja bem vindo')
})




app.listen(8080, function() {
    console.log('servidor rodando em localhost:8080')
})



// instalado o npm e express
// npm install express --save