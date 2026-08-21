function fatorial(n){
    if(n==1) return 1
    return n * fatorial(n - 1)
}
let num = 6
console.log(fatorial(num))