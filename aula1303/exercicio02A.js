// Usando getElementById
const elementoId = document.getElementById('elementoUnico');
console.log("Retorno de getElementById:");
console.log(elementoId); // Retorna o próprio elemento <div>

// Usando querySelectorAll
const elementosClasse = document.querySelectorAll('.paragrafo');
console.log("\nRetorno de querySelectorAll:");
console.log(elementosClasse); // Retorna uma NodeList com os dois elementos <p>

// Você pode iterar sobre a NodeList
elementosClasse.forEach((p, index) => {
    console.log(`Item ${index}:`, p);
});

/*
getElementById(id): Retorna um único objeto Element. 
Ele foi projetado para buscar um elemento específico, 
pois o id deve ser único em uma página. 

querySelectorAll(selector): Retorna uma NodeList, que 
é uma coleção (semelhante a um array) de todos 
os elementos que correspondem ao seletor CSS 
especificado.
*/