let elementos = document.querySelectorAll("ul li")

for(let i=0; i<elementos.length; i++){
    if(elementos[i].textContent < 0){
        elementos[i].classList.add("destaque")
    }
}