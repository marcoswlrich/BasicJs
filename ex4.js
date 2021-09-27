/* 

4) Dado um vetor de valores, retorne um objeto com 
quantas vezes cada valor está presente no vetor (dica: utilize reduce)


*/

const vetor = [1, 2, 3, 2, 2, 2, 3]
const howManyTimes = (agg, val) => {
  if (!agg[val]) {
    agg[val] = 0
  }
  agg[val] = agg[val] + 1
  return agg
}
const times = vetor.reduce(howManyTimes, {})
console.log(times)
