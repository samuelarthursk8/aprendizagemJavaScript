const escola = "Cod3r"

console.log(escola.charAt(4))
// Vai retornar a 4º letra

// A primeira letra é a letra 0 por isso retorna o "r"como a 4º

console.log(escola.charAt(5))
// Retorna um vaor vazio

console.log(escola.charCodeAt(3))
/* Retorna o valor do 3 na tabela do unicode
* que no html o valor é 51
*/

console.log(escola.indexOf('3'))
// Indice associado ao digito 3 que esta dentro da palavra escola

console.log(escola.substring(1))
//Imprime de um indice especifico pra frente

console.log(escola.substring(0, 3))
// Vai imprimir apenas do indice 0 ate o indice 3 (nao vai imprimir o indice 3)

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
//Junta varias strings

console.log(escola.replace(3, 'e'))
// Trocou o 3 pela a letra 'e'

console.log('Ana, Maria, Pedro'.split(','))
// Separa os nomes por uma virgula gerando um array (pode guardar coisas nele) com 3 elemetos