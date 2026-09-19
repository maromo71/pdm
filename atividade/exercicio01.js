//Exercício 01: Escopo e Variáveis
function verificarAcesso(){
    if(true){
        var statusVar = "Acesso Permitido (var)"
        let statusLet = "Acesso Permitido (let)"
    }
    console.log(statusVar)
    console.log(statusLet)
}
verificarAcesso()
//como var tem escopo de função. Ao executar será exibido o
//conteudo da variavel statusVar, ou seja: Acesso Permitido (var)
//como let tem escopo de bloco, só existe dentro do if
//e nao externamente
//escopo global (acesso dentro e fora das funções)
//escopo local (acesso apenas dentro do bloco declarado) o
//let evita vazamentos.