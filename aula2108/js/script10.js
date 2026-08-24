let inputNum1 = document.getElementById("txtNum1")
let inputNum2 = document.getElementById("txtNum2")
let buttonSomar = document.getElementById("btnSomar")
let p1 = document.getElementById("p1")

function somar(x, y){
    let result = x + y
    alert(result)
    //podemos apresentar o resultado no html
    p1.innerHTML = "Resultado: " + result
}
buttonSomar.addEventListener("click",function(ev){
    ev.preventDefault() //Prevenir atualizacao
    let n1 = Number(inputNum1.value)
    let n2 = Number(inputNum2.value)

    somar(n1, n2)
})