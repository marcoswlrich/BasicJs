/*
6) Dado um vetor com números, retorne somente os números pares;
7) Dado um vetor com números, retorne somente os números ímpares;


*/
//par

const vetor = [2, 5, 6, 7, 9, 60, 10, 11]
const vetorPar = array => array.filter(item => item % 2 === 0)
const vetorImpar = array => array.filter(item => item % 2 !== 0)

console.log(vetorPar(vetor))
console.log(vetorImpar(vetor))
