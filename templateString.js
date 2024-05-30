const nome = "rebeca"
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)
// Usa crase e o cifrão e chaves interpreta 

// Sem a template String nao se pode quebrar a linha de uma String

// Ja no template pode sim quebrar, usar tab, etc.

console.log(`1 + 1 = ${1 + 1}`)
// Da para usar expressões numéricas com a template String

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
// Transforma em letra maiuscula