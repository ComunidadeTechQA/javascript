# 🧭 Controles de Fluxo em JavaScript

No desenvolvimento de software, **controlar o fluxo de execução** é essencial. Em JavaScript, usamos comandos que permitem **tomar decisões com base em testes lógicos**. Esses comandos são conhecidos como **controles de fluxo**.

Vamos conhecer os principais:

---

## ✅ `if`: execute algo *se* for verdadeiro

O `if` é utilizado para executar um trecho de código **somente se uma condição for verdadeira**.

### Sintaxe:

```jsx
if (<condição>) {
  // código que será executado se a condição for verdadeira
}
```

### Exemplo:

```jsx
let idade = 20;

if (idade >= 18) {
  console.log('Você já pode tirar a carteira de motorista!');
}
```

> Como a variável idade é 20, a mensagem será exibida.
> 
> 
> Se fosse menor que 18, nada aconteceria.
> 

```jsx
let idade = 16;

if (idade >= 18) {
  console.log('Você já pode tirar a carteira de motorista!');
}

console.log('Verificação finalizada.');
```

> A frase “Verificação finalizada.” será exibida independente do resultado do if.
> 

---

## ❗ `else`: e *se não* for verdadeiro?

O `else` complementa o `if` e permite **executar um bloco de código quando a condição for falsa**. Ele **não faz testes**, apenas oferece uma **alternativa**.

### Exemplo:

```jsx
let temperatura = 15;

if (temperatura > 25) {
  console.log('Está calor, melhor usar roupas leves.');
} else {
  console.log('Está frio, melhor levar um casaco.');
}
```

> Como a temperatura é 15, a condição do if falha, e o else é executado.
> 

---

## 🔄 `switch`: quando há muitos caminhos possíveis

O `switch` é excelente quando precisamos **testar uma variável contra diversos valores diferentes**. Em vez de usar vários `else if`, o `switch` oferece **mais clareza e organização**.

### Exemplo com `switch`:

```jsx
let diaDaSemana = 'quarta';

switch (diaDaSemana) {
  case 'segunda':
    console.log('Início da semana, foco total!');
    break;
  case 'quarta':
    console.log('Metade da semana, força!');
    break;
  case 'sexta':
    console.log('Sextou! Hora de relaxar.');
    break;
  default:
    console.log('Dia normal, siga com seus planos.');
    break;
}
```

> Cada valor executa um comportamento diferente, com o break evitando que os blocos continuem executando após um caso verdadeiro.
> 

### Reescrevendo com `if / else if`:

```jsx
let diaDaSemana = 'quarta';

if (diaDaSemana === 'segunda') {
  console.log('Início da semana, foco total!');
} else if (diaDaSemana === 'quarta') {
  console.log('Metade da semana, força!');
} else if (diaDaSemana === 'sexta') {
  console.log('Sextou! Hora de relaxar.');
} else {
  console.log('Dia normal, siga com seus planos.');
}
```

> Funciona do mesmo jeito, mas o switch deixa mais fácil de ler e manter quando há muitos casos.
> 

---

## 👨‍💻 Conclusão

Os **controles de fluxo** são essenciais para que nossos programas **reajam a diferentes situações**. Saber escolher entre `if`, `else` e `switch` faz toda a diferença na **clareza e manutenção do código**.

🔁 Use `if` para condições simples.

🔀 Use `switch` quando houver vários caminhos.

⚠️ E lembre-se: **sem `if`, não existe `else`!**