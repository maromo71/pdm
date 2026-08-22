let elementos = document.querySelectorAll(".frutas li")

console.log("Abaixo lista de frutas")
for(let i=0; i<elementos.length; i++){
    console.log(elementos[i].innerHTML)
}