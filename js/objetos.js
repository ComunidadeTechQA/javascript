

var aluno = {
    nome: "Fernando",
    idade: 40,
    curso: "Jornada TechQA",
    apresentar: function() {
        console.log('Olá, meu nome é ' + this.nome + ' e eu faço o curso: ' + this.curso)
    }
}

aluno.nome = "Bruno"
aluno.idade = 30

aluno.apresentar()

console.log(aluno.nome)
console.log(aluno.idade)

aluno.status = true

aluno.estaMatriculado = function() {
    console.log('Está matriculado?' + this.status)
}

aluno.estaMatriculado()

delete aluno.idade

console.log(aluno)