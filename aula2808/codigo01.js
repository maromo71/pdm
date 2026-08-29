function ObterDados(callback){
    //simulando uma busca de dados.
    setTimeout(function(){
        const dados = "Valor recebido do servidor"
        callback(dados)
    }, 2000)
}

function mostrarDados(dados){
    console.log(dados)
}

ObterDados(mostrarDados)