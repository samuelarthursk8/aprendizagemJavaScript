var numero = 1
{
    let numero = 2
    console.log("dentro =", numero)
    //Let estara visivel apenas dentro do bloco onde foi colocado
}
console.log("fora =", numero)

/* Se substituirmos o var por let não mudará nada
* ja que o primeiro esta em m bloco mais abrangente
* e o segundo esta em um bloco mais restrito
*/