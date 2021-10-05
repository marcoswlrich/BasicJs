// function expression
// function anonymous

const sum = function (num1, num2) {
  console.log(num1 + num2)
}

sum(2, 2) // arguments - argumentos

// function hoisting

sayMyName()

function sayMyName() {
  console.log('Marcos Wlrich')
}

//Arrow Function

const sayMyName = name => {
  console.log(name)
}

sayMyName('Marcos')

//callback function

function sayMyName(name) {
  console.log('Antes de executar a função callback')

  name()

  console.log('Depois de executar a função callback')
}

sayMyName(() => {
  console.log('estou em uma callback')
})

/*

function() constructor

* expressão new
* criar um novo objeto
* this keyword

colocar o nome da função com maisculo é boa prática

*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + 'está andando'
  }
}

const marcos = new Person('Marcos')
const maria = new Person('Maria')
console.log(marcos.walk())
console.log(maria.walk())
