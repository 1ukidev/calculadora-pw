const primeiroValor = document.getElementById("primeiroValor");
const segundoValor = document.getElementById("segundoValor");
const resultado = document.getElementById("resultado");
const modo = document.getElementById("modo");
let modoAtual = null;
const zero = document.getElementById("0");
const um = document.getElementById("1");
const dois = document.getElementById("2");
const tres = document.getElementById("3");
const quatro = document.getElementById("4");
const cinco = document.getElementById("5");
const seis = document.getElementById("6");
const sete = document.getElementById("7");
const oito = document.getElementById("8");
const nove = document.getElementById("9");
const divisao = document.getElementById("divisao");
const multiplicao = document.getElementById("multiplicao");
const soma = document.getElementById("soma");
const subtracao = document.getElementById("subtracao");
const igualdade = document.getElementById("igualdade");
const AC = document.getElementById("AC");

AC.onclick = () => {
    primeiroValor.value = "";
    segundoValor.value = "";
    resultado.value = "";
}

zero.onclick = () => {
    primeiroValor.value = primeiroValor.value + "0";
}

um.onclick = () => {
    primeiroValor.value = primeiroValor.value + "1";
}

dois.onclick = () => {
    primeiroValor.value = primeiroValor.value + "2";
}

tres.onclick = () => {
    primeiroValor.value = primeiroValor.value + "3";
}

quatro.onclick = () => {
    primeiroValor.value = primeiroValor.value + "4";
}

cinco.onclick = () => {
    primeiroValor.value = primeiroValor.value + "5";
}

seis.onclick = () => {
    primeiroValor.value = primeiroValor.value + "6";
}

sete.onclick = () => {
    primeiroValor.value = primeiroValor.value + "7";
}

oito.onclick = () => {
    primeiroValor.value = primeiroValor.value + "8";
}

nove.onclick = () => {
    primeiroValor.value = primeiroValor.value + "9";
}

soma.onclick = () => {
    modo.innerHTML = "+";
    modoAtual = "+";
}

subtracao.onclick = () => {
    modo.innerHTML = "-";
    modoAtual = "-";
}

divisao.onclick = () => {
    modo.innerHTML = "/";
    modoAtual = "/";
}

multiplicao.onclick = () => {
    modo.innerHTML = "*";
    modoAtual = "*";
}

igualdade.onclick = () => {
    switch(modoAtual) {
        case "+":
            resultado.value = Number(primeiroValor.value) + Number(segundoValor.value);
            break;
        case "-":
            resultado.value = Number(primeiroValor.value) - Number(segundoValor.value);
            break;
        case "*":
            resultado.value = Number(primeiroValor.value) * Number(segundoValor.value);
            break;
        case "/":
            resultado.value = Number(primeiroValor.value) / Number(segundoValor.value);
            break;
    }
}