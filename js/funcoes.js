

function soma() {
    var v1 = parseInt(document.getElementById('v1').value)
    var v2 = parseInt(document.getElementById('v2').value)

    var resultado = v1 + v2

    document.getElementById('resultado').innerText = resultado
    console.log(resultado)
}

// teste
// soma(2, 2)
// soma(5, 3)