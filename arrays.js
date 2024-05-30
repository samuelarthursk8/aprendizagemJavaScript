/* O array é heterogenio, ou seja
* aceita multiplos valores
*/

const valores = [7.7, 8.9, 6.3, 9.2]
// Vigrula é o separador dos elementos
console.log(valores[0], valores[3])

console.log(valores[4])
/* Nao da erro caso coloque um indice 
* inexistente, apenas o considera indefinido.
*/ 

valores[4] = 10
console.log(valores)
// Adicionou o indice 4

console.log(valores.length)
// Quantidade de elementos de um array

valores.push ({id: 3}, false, null, 'teste')
console.log(valores)
// O push serve para adicionar outros elementos

/* Nao é recomendado um array ter varios
* tipos de dados, e sim cada tipo de dado
* ter um array.
*/

console.log(valores.pop())
// Retira (exclui) o ultimo valor do array

delete valores[0]
console.log(valores)
// Tambem exclui um valor do array

console.log(typeof valores)