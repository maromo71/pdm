let inputNum1 = document.getElementById("txtNum1")
let inputNum2 = document.getElementById("txtNum2")
let buttonSomar = document.getElementById("btnSomar")


function somar(x, y){
    let result = x + y
    alert(result)
}
buttonSomar.addEventListener("click",somar(12, 5))