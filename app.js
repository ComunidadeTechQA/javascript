const express = require('express')
const app = express()
const port = 5000

app.get('/alunos', (req, res) => {

    var aluno = {
        nome: "Fernando",
        idade: 40,
        curso: "Jornada TechQA",
    }


    res.json({ aluno, apresentar: 'Olá, meu nome é ' + aluno.nome + ' e eu faço o curso: ' + aluno.curso })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
