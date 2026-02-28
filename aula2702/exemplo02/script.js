let elemento = document.getElementById("titulo")
//let paragrafos = document.getElementsByClassName("paragrafo")
//let paragrafos = document.getElementsByTagName('p')
//let paragrafo = document.querySelector('.paragrafo')
let paragrafos = document.querySelectorAll('.paragrafo')

let titulo = elemento.innerHTML

for(let i = 0; i < paragrafos.length; i++){
    console.log(paragrafos[i].innerHTML)
}

