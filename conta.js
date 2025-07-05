
class Conta {
    constructor(titular) {
        this.titular = titular
        this.saldo = 0
    }

    mostraSaldo() {
        console.log('O saldo de ' + this.titular + ' é: ' + this.saldo)
    }

    depositar(valor) {
        this.saldo = this.saldo + valor
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente!')
        } else {
            this.saldo = this.saldo - valor
            console.log('Saque de R$ ' + valor + ' realizado com sucesso.')
        }
    }
}


class ContaCorrente extends Conta {

    constructor(titular) {
        super(titular)
        this.taxaSaque = 1
    }

    sacar(valor) {
        var valorComTaxa = valor + this.taxaSaque

        if (valorComTaxa > this.saldo) {
            console.log('Saldo insuficiente!')
        } else {
            this.saldo = this.saldo - valorComTaxa
            console.log('Saque de R$ ' + valor + ' realizado com sucesso com a taxa de ' + this.taxaSaque)
        }
    }

}

class ContaPoupanca extends Conta {
    constructor(titular) {
        super(titular)
        this.saldo = 0
    }
}



var fernando = new ContaCorrente('Fernando')
fernando.depositar(50)
fernando.mostraSaldo()
fernando.sacar(10)
fernando.mostraSaldo()

var camila = new ContaPoupanca('Camila')
camila.depositar(100)
camila.sacar(50)
camila.mostraSaldo()