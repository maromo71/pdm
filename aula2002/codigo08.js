function calcularIdade(){
    var idade = 25 // Escopo - local a calcularIdade

    function exibirIdade(){
        console.log(idade)
    }
    exibirIdade()

}

calcularIdade()
console.log(idade)