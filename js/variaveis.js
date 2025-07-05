const nomeCompleto = "Fernando Papito"
const idade = 40
const salario = 1.000
const genteBoaEBonito = true

// Quando é const não pode mudar o valor, portando vai dar erro na linha 7
// nomeCompleto = "Papito"

console.log(nomeCompleto)
console.log(idade)
console.log(salario)
console.log(genteBoaEBonito)

console.log(typeof genteBoaEBonito)

const aluno = {
    nome: "Camila",
    email: "camila@camila.com.br"
}

// quando é const, é possível alterar um campo do objeto
aluno.email = "camila@nenhumdenos.com.br"

// mas não é possível redeclarar o objeto inteiro
// aluno = {
//     nome: "Camila Camila"
// }

console.log(aluno)

const alunos = ["bruno", "camila"]

// quando é const, é possível alterar um item no array
alunos.push("Fernando")

// mas não é possível redeclarar o array inteiro
alunos = ["caio"]

console.log(alunos)


// function testeVar() {
//     var lang = "Javascript"

//     if (true) {
//         var lang = "TypeScript"
//         console.log(lang)
//     }

//     console.log(lang)
// }

// testeVar()

// function testeLet() {
//     let lang = "Javascript"

//     if (true) {
//         let lang = "TypeScript"
//         console.log(lang)
//     }

//     console.log(lang)
// }

// testeLet()