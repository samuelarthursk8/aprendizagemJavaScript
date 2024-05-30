/* A variável (var) ficara visível dentro de um bloco
* de código (que não seja uma função) e fora também.
* ou seja, ela so estara visivelmente dentro do bloco.
*/

{
    {
        {
            {
                var sera = "será???"
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()

// Não estará visivel fora da função e nao ira imprimir

/* Quando se cria uma variável fora de uma função
* se torna uma variável global e estará disponivel
* dentro do objeto "window"
*/

/* Não criar variáveis com var porque ele é muito aberto
* qualquer um pode subscrever a variavel, ocasionando
* em erros no código entre outros.
*/