// Função sem retorno.

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
// Só chamar que ja imprimir.

imprimirSoma(2)
// Vai ser NaN por chamar apenas um valor, porque vai somar um número com nada.

imprimirSoma(2, 10, 4, 5, 6, 7, 8)
// Vai imprimir os dois primeiros e depois vai ignorar o resto.

imprimirSoma()
// Imprime NaN

// Função com retorno

function soma (a, b = 1){
    return a + b
}

console.log(soma(2, 3))

console.log(soma(2))
// Como b = 0 ele não considera como NaN

/* Se eu colocar outro número no
* lugar do 0, ele somara esse valor
* mesmo eu chamando apenas parametro
*/