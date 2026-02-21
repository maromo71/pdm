function fatorial(numero){
    let fat = 1
    for(let i=1; i<=numero; i++){
        fat *= i
    }
    return fat
}
function fatrec(numero){
    if(numero == 1) return 1
    return numero * fatrec(numero -1)
}
console.log(fatorial(5))
console.log(fatrec(5))