let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
console.log(!isAtivo)
/* Para utilizarmos o numero 1 como tipo booleano
* devemos utilizar a negação (!), se colocarmos apenas
* uma negação o resultado sera false e se colocarmos duas
* sera true
*/

console.log(!true)
console.log(!false)
// Isso vale para o true e false literal

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
// Todos os numeros inteiros são verdadeiros com excessão do 0

console.log(!! " ")
console.log(!! "texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))
// Se a atribuição for true, sera true

console.log("Os falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))
// Se a atribuição for false, sera false

console.log("Pra finalizar...")
console.log(!!("" || null || 0 || " "))
// Pelo menos um valor tem que ser true

console.log(("" || null || 0 || "epa"))
// Vai retornar o unico valor true que ele encontrou

let nome = ""
console.log(nome || "Desconhecido")
/* O || (ou) serve para dar um valor padrão
* para uma determinada variavel
*/

let nome2 = "Lucas"
console.log(nome2 || "Desconhecido")
// Ele (||) vai imprimir o primeiro valor true que ele encontrar