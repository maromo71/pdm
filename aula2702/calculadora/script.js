function calcular(operacao){
    let valor1 = document.getElementById('valor1').value
    let valor2 = document.getElementById('valor2').value
    valor1 = parseFloat(valor1)
    valor2 = parseFloat(valor2)
    const campoResultado = document.getElementById('resultado')
    //validacao basica para os campos vazios
    if(isNaN(valor1)||isNaN(valor2)){
        campoResultado.innerHTML = "Por favor, insira números válidos"
        return
    }
    let resultado = 0
    //logica para saber qual operacao realizaco
    switch(operacao){
        case '+':
            resultado = valor1 + valor2
            break
        case '-':
            resultado = valor1 - valor2
            break
        case '*':
            resultado = valor1 * valor2
            break
        case '/':
            resultado = valor2 !== 0 ? valor1 / valor2 : "Divisão por zero não é permitida"
            break;
        default:
            resultado = "Operação inválida"
    }
    campoResultado.innerHTML = "Resultado: " + resultado
}