

function verificarVoto() {


    const idade = document.getElementById('idade').value
    const resultado = document.getElementById('resultado')

    resultado.innerText = ''

    if (idade == '') {
        resultado.innerText = 'Por favor, informe a sua idade.'
    } else if (idade <= 15) {
        resultado.innerText = 'Você ainda não pode votar.'
    } else if (idade >= 16 && idade < 18) {
        resultado.innerText = 'O voto é facultativo.'
    } else if (idade >= 18) {
        resultado.innerText = 'O voto é obrigatório.'
    }
}