/*function nomeDaFuncao(parametro1){
  bloco de codigo
}

*/

function queDiaEHoje() {
  const data = new Date()
  console.log(`Hoje é dia: ${data.getDate()}`)
}

queDiaEHoje()

function soma(valor1, valor2) {
  console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
}

soma(10, 20)
soma(3, 6)

// - Funções também podem retornar valores

function soma2(v1, v2) {
  return v1 + v2
}

const idade = 25
const tamanho = 2
const resultado = soma2(idade, tamanho)
console.log(resultado)

function multiplicar(valor1, valor2) {
  const resultado = valor1 * valor2
  return resultado
}

console.log('O resultado de multiplicação é:', multiplicar(10, 2))

///

const funcionario1 = {
  nome: 'Zezinho',
  desconto: 0.2,
  salarioBruto: 2000,
  salarioLiquido: 0
}

const funcionario2 = {
  nome: 'Mariazinha',
  desconto: 0.1,
  salarioBruto: 2020,
  salarioLiquido: 0
}

function calcularDesconto(salarioBruto, desconto) {
  return salarioBruto - salarioBruto * desconto
}

funcionario1.salarioLiquido = calcularDesconto(
  funcionario1.salarioBruto,
  funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
  funcionario2.salarioBruto,
  funcionario2.desconto
)

console.log(`Salario ${funcionario1.nome}: ${funcionario1.salarioLiquido}`)
console.log(`Salario ${funcionario2.nome}: ${funcionario2.salarioLiquido}`)
