var listaDeChamada = ["Bruno", "Ana", "Carlos"]

console.log(listaDeChamada[1])

listaDeChamada[1] = "Camila"

console.log(listaDeChamada)
console.log(listaDeChamada[1])

listaDeChamada.push("Fernando")

console.log(listaDeChamada)
console.log(listaDeChamada[3])

// Remove o último item da lista
// listaDeChamada.pop()
// console.log(listaDeChamada)

// Remove o primeiro item da lista
// listaDeChamada.shift()
// console.log(listaDeChamada)

var indice = listaDeChamada.indexOf("Camila")
listaDeChamada.splice(indice, 1)
console.log(listaDeChamada)