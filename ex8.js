/*
9) Modifique a calculadora do exercício anterior para que ela receba 
2 números e uma função, e realize o cálculo. 
Exemplo:

  const soma = (num1, num2) => num1+num2
  const calculadoraFn = (....) => ….
  calculadoraFn(10, soma, 20)

*/

const calculadoraFn = (num1, op, num2) => op(num1, num2)
const soma = (num1, num2) => num1 + num2
const sub = (num1, num2) => num1 - num2
const mult = (num1, num2) => num1 * num2
const div = (num1, num2) => num1 / num2

console.log(calculadoraFn(10, soma, 20))
console.log(calculadoraFn(5, sub, 3))
console.log(calculadoraFn(3, mult, 8))
console.log(calculadoraFn(20, div, 2))
