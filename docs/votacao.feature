Vamos criar um programa que verifica a
idade do usuário e informa se ele pode votar ou não.

Com base na idade informada, o sistema deve mostrar uma mensagem explicando se:

* Ele não pode votar (menor de 16 anos)
* O voto é facultativo (16 e 17 anos o voto é facultativo)
* Ou se o voto é obrigatório (quando é maior de 18 anos)

Esse programa será feito em HTML com Javascript usando tudo que aprendemos até
esse momento.

Especificação de Comportamentos (BDD de verdade)

Cenário: Usuário tem menos de 16 anos

Dado que o usuário informou a idade como 15
Quando ele verifica se pode votar
Então o sistema deve exibir a mensagem "Você ainda não pode votar."

Cenário: Usuário tem 16 anos

Dado que o usuário informou a idade como 16
Quando ele verifica se pode votar
Então o sistema deve exibir a mensagem "O voto é facultativo."

Cenário: Usuário tem 17 anos

Dado que o usuário informou a idade como 17
Quando ele verifica se pode votar
Então o sistema deve exibir a mensagem "O voto é facultativo."

Cenário: Usuário deve votar

Dado que o usuário informou a idade como 18
Quando ele verifica se pode votar
Então o sistema deve exibir a mensagem "O voto é obrigatório."

Cenário: Usuário não informa a idade

Dado que o usuário não informa a idade
Quando ele verifica se pode votar
Então o sistema deve exibir a mensagem "Por favor, informe a sua idade."
