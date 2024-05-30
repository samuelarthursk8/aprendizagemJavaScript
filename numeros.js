const peso1 = 1.0
// Por ter ".0" é considerado número inteiro
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
// Testar se um valor é inteiro ou não com a metodo "Number.isInteger"

// Exemplo:
const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 *peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
// Limitar a quantidade de casas decimais que ele ira imprimir

console.log(media.toString())
// Inverter valor numerico em string (texto)

console.log(media.toString(2))
// Inverter para binário

console.log(typeof media)
console.log(typeof Number)

// Number (tipo do dado quanto inteiro quanto float) Number (Função)