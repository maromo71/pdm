function verificarAcesso() {
    if (true) {
        var statusVar = "Acesso Permitido (var)";
        let statusLet = "Acesso Permitido (let)";
    }
    console.log(statusVar); // (A)
    console.log(statusLet); // (B)
}
verificarAcesso();

/*
A linha //A 
imprimirá "Acesso Permitido (var)" no console.
Isso ocorre porque variáveis declaradas com var 
têm escopo de função, o que significa que 
statusVar é acessível em qualquer lugar 
dentro da função verificarAcesso, 
mesmo fora do bloco if onde foi declarada.

A linha //B 
causará um erro (ReferenceError). Variáveis declaradas 
com let têm escopo de bloco, então statusLet só existe 
dentro do bloco if. 
Tentar acessá-la fora desse bloco resulta em um erro 
porque ela não está definida nesse escopo.
*/