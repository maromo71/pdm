function obterDados(callback) {
  // Simulando uma operação assíncrona
  setTimeout(function() {
    const dados = 'Dados obtidos';
    callback(dados);
  }, 2000);
}

function mostrarDados(dados) {
  console.log(dados);
}

obterDados(mostrarDados); // Chama a função obterDados com a função mostrar