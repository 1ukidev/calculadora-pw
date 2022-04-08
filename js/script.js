let modoAtual = "";

const AC = document.getElementById("AC").onclick = () => {
    primeiroValor.value = "";
    segundoValor.value = "";
    resultado.value = "";
}

const zero = document.getElementById("0").onclick = () => {
    primeiroValor.value = primeiroValor.value + "0";
}

const um = document.getElementById("1").onclick = () => {
    primeiroValor.value = primeiroValor.value + "1";
}

const dois = document.getElementById("2").onclick = () => {
    primeiroValor.value = primeiroValor.value + "2";
}

const tres = document.getElementById("3").onclick = () => {
    primeiroValor.value = primeiroValor.value + "3";
}

const quatro = document.getElementById("4").onclick = () => {
    primeiroValor.value = primeiroValor.value + "4";
}

const cinco = document.getElementById("5").onclick = () => {
    primeiroValor.value = primeiroValor.value + "5";
}

const seis = document.getElementById("6").onclick = () => {
    primeiroValor.value = primeiroValor.value + "6";
}

const sete = document.getElementById("7").onclick = () => {
    primeiroValor.value = primeiroValor.value + "7";
}

const oito = document.getElementById("8").onclick = () => {
    primeiroValor.value = primeiroValor.value + "8";
}

const nove = document.getElementById("9").onclick = () => {
    primeiroValor.value = primeiroValor.value + "9";
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