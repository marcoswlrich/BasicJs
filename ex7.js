/*
8) Uma função é chamada da seguinte forma:
  calculadora(10, '+', 20)
crie o corpo da função de forma que ela realize as 4 operações aritméticas


*/

const calculadora = (num1, op, num2) => {
  if (op === '+') {
    return num1 + num2
  } else if (op === '-') {
    return num1 - num2
  } else if (op === '*') {
    return num1 * num2
  } else if (op === '/') {
    return num1 / num2
  } else return 'Inválido'
}

console.log(calculadora(10, '+', 10))
console.log(calculadora(11, '-', 10))
console.log(calculadora(5, '*', 5))
console.log(calculadora(10, '/', 2))
console.log(calculadora(10, 'f', 10))
