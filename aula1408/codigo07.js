let nome = "Maria Silva" //global

function saudar(){
    let nome = "Oscar" //local
    let mens = "ola, "
    let completo = mens + nome  //concat com local
    console.log(completo)
}

saudar()
console.log(nome) //nome global