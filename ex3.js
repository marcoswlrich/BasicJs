/*

3) Dado um vetor de números, como poderia ser realizada a 
soma de todos os valores ímpares utilizando reduce e filter.

*/

const vetor = [2, 6, 10, 7, 5, 3]
const numImpar = num => num % 2 !== 0
const soma = (total, atual) => total + atual
const resultado = vetor.filter(numImpar).reduce(soma, 0)

console.log(resultado)
