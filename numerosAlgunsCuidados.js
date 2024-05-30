console.log(7 / 0)
// Retotna infinity pois tem um tipo do mesmo

console.log("10" / 2)
// Verifica se pode ser dividido ou não e faz a operação

console.log("3" + 2)
/* Nao vai somar pois string tem prioridade, entao vai apenas juntar
* e o + tambem tem sentido na concatenação
*/

console.log("3" - 2)
// Vai diminuir ja que o - nao tem sentido na concatenação

console.log("Show!" * 2)
//NaN = Not a Number

console.log(0.1 + 0.7)
// Tem imprecisoes em numeros do tipo float

/* console.log(10.toString)
* Não é permitido fazer isso!
*/

console.log((10.345).toFixed(2))
/* Mostrar só os dois ultimos
* numeros depois do ponto
*/