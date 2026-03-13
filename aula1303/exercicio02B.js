const botao = document.getElementById('meuBotao');

// Listener 1: Mostra uma mensagem no console.
botao.addEventListener('click', function () {
    console.log('Listener 1 foi ativado!');
});

// Listener 2: Mostra um alerta.
// Ambos os listeners serão executados quando o botão for clicado.
botao.addEventListener('click', function () {
    alert('Listener 2 foi ativado!');
});

// Se usássemos o método antigo, o segundo sobrescreveria o primeiro:
// botao.onclick = function() { console.log('Listener 1'); };
// botao.onclick = function() { alert('Listener 2'); }; // Apenas este seria executado.



/**
O método addEventListener "escuta" por um evento específico (como um clique, passagem do mouse, ou o pressionar de uma tecla) em um elemento HTML. 
Quando o evento ocorre, ele executa uma função que você definiu. 
Sua principal utilidade é criar interatividade em uma página web, 
respondendo às ações do usuário.
*/