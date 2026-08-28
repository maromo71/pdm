// script.js - Lógica da Calculadora

// 1. Variáveis de estado
let primeiroValor = null;
let operacao = null;
let limparVisor = false;

// 2. Seleção dos elementos do DOM
let display = document.getElementById("display");
let btnClear = document.getElementById("btnClear");
let btnBackspace = document.getElementById("btnBackspace");
let btnEquals = document.getElementById("btnEquals");

let botoesNumeros = document.querySelectorAll("[data-num]");
let botoesOperacoes = document.querySelectorAll("[data-op]");
// 3. Funções de manipulação e cálculo
function inserirNumero(num) {
    if (display.value === "0" || limparVisor) {
        if (num === ".") {
            display.value = "0.";
        } else {
            display.value = num;
        }
        limparVisor = false;
    } else {
        if (num === "." && display.value.includes(".")) {
            return;
        }
        display.value = display.value + num;
    }
}
function selecionarOperacao(op) {
    if (display.value === "Erro") {
        return;
    }

    if (operacao !== null && !limparVisor) {
        executarCalculo();
    }

    primeiroValor = parseFloat(display.value);
    operacao = op;
    limparVisor = true;
}

function executarCalculo() {
    if (operacao === null || limparVisor || display.value === "Erro") {
        return;
    }
    let segundoValor = parseFloat(display.value);
    let resultado = 0;

    if (operacao === "+") {
        resultado = primeiroValor + segundoValor;
    } else if (operacao === "-") {
        resultado = primeiroValor - segundoValor;
    } else if (operacao === "*") {
        resultado = primeiroValor * segundoValor;
    } else if (operacao === "/") {
        if (segundoValor === 0) {
            display.value = "Erro";
            primeiroValor = null;
            operacao = null;
            limparVisor = true;
            return;
        } else {
            resultado = primeiroValor / segundoValor;
        }
    }
    display.value = resultado;
    primeiroValor = resultado;
    operacao = null;
    limparVisor = true;
}

function limparTudo() {
    primeiroValor = null;
    operacao = null;
    limparVisor = false;
    display.value = "0";
}
function apagarUltimo() {
    if (limparVisor || display.value === "Erro") {
        limparTudo();
        return;
    }

    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}
// 4. Registro de eventos
for (let i = 0; i < botoesNumeros.length; i++) {
    botoesNumeros[i].addEventListener("click", function() {
        let num = botoesNumeros[i].getAttribute("data-num");
        inserirNumero(num);
    });
}

for (let i = 0; i < botoesOperacoes.length; i++) {
    botoesOperacoes[i].addEventListener("click", function() {
        let op = botoesOperacoes[i].getAttribute("data-op");
        selecionarOperacao(op);
    });
}
btnClear.addEventListener("click", function() {
    limparTudo();
});

btnBackspace.addEventListener("click", function() {
    apagarUltimo();
});

btnEquals.addEventListener("click", function() {
    executarCalculo();
});