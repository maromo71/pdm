let nome = "Maromo" //variavel global

function nomear(nome_pessoa){
    //outra variavel com o mesmo nome
    //porem o escopo dela é restrito a funcao nome
    let nome = nome_pessoa
    console.log(nome)
}

nomear("Maria")

console.log(nome)