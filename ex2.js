/* 
2) Dado um vetor de números, como poderia ser realizada a 
soma de todos os valores pares utilizando reduce e filter.

*/

const vetor = [1, 2, 3, 4, 5]
const numPar = numero => numero % 2 === 0
const pares = vetor.filter(numPar)
const soma = (total, atual) => total + atual
const resultado = pares.reduce(soma, 0)

console.log(resultado)

//outra forma mais curta de resolver

const vetor2 = [2, 6, 10, 7, 5]
const numPar2 = num => num % 2 === 0
const soma2 = (total, atual) => total + atual
const resultado2 = vetor2.filter(numPar2).reduce(soma2, 0)

console.log(resultado2)
