/*1) Dado um vetor de números, como poderia ser realizada a soma de 
todos os valores utilizando reduce. */

const vetor = [1, 3, 5, 7]
const soma = (previousValue, currentValue) => previousValue + currentValue

console.log(vetor.reduce(soma))
