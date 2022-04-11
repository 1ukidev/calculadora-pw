const primeiroNumero = document.getElementById("primeiroNumero");
const segundoNumero = document.getElementById("segundoNumero");
const resultado = document.getElementById("resultado");
let modoAtual = "";

const AC = document.getElementById("AC").onclick = () => {
    primeiroNumero.value = "";
    segundoNumero.value = "";
    resultado.value = "";
}

const zero = document.getElementById("0").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "0";
}

const um = document.getElementById("1").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "1";
}

const dois = document.getElementById("2").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "2";
}

const tres = document.getElementById("3").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "3";
}

const quatro = document.getElementById("4").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "4";
}

const cinco = document.getElementById("5").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "5";
}

const seis = document.getElementById("6").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "6";
}

const sete = document.getElementById("7").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "7";
}

const oito = document.getElementById("8").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "8";
}

const nove = document.getElementById("9").onclick = () => {
    primeiroNumero.value = primeiroNumero.value + "9";
}

const soma = document.getElementById("soma").onclick = () => {
    modo.innerHTML = "+";
    modoAtual = "+";
}

const subtracao = document.getElementById("subtracao").onclick = () => {
    modo.innerHTML = "-";
    modoAtual = "-";
}

const divisao = document.getElementById("divisao").onclick = () => {
    modo.innerHTML = "/";
    modoAtual = "/";
}

const multiplicao = document.getElementById("multiplicao").onclick = () => {
    modo.innerHTML = "*";
    modoAtual = "*";
}

const igualdade = document.getElementById("igualdade").onclick = () => {
    switch(modoAtual) {
        case "+":
            resultado.value = Number(primeiroNumero.value) + Number(segundoNumero.value);
            break;
        case "-":
            resultado.value = Number(primeiroNumero.value) - Number(segundoNumero.value);
            break;
        case "*":
            resultado.value = Number(primeiroNumero.value) * Number(segundoNumero.value);
            break;
        case "/":
            resultado.value = Number(primeiroNumero.value) / Number(segundoNumero.value);
            break;
    }
}