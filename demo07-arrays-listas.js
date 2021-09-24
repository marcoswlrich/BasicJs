//const minhalista = []
//const minhaListaDeTarefas = [
  //  'Ler o livro',
  //  'Mandar email',
   // 'Ligar para cliente'
//]

//console.log(minhaListaDeTarefas[0])
//console.log(minhaListaDeTarefas[2])
//console.log(minhaListaDeTarefas[4])

//quantidades de lista no array
//console.log(minhaListaDeTarefas.length)

//adicionar item
//minhaListaDeTarefas.push('Formatar computador')
//console.log(minhaListaDeTarefas)

//remover o ultimo da lista
//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo, minhaListaDeTarefas)

//remover o primeiro da lista
//const primeiro = minhaListaDeTarefas.shift()
//console.log(primeiro, minhaListaDeTarefas)

//remover um item especifico a partir de um indice
//minhaListaDeTarefas.splice(1,1)
//console.log(minhaListaDeTarefas)

const item = [
    1,'oi', 0.5
]
//verificar o tipo de array
//console.log(typeof(item))

//verificar se é array da forma correta
console.log(Array.isArray(item))

//ordenar

const numeros = [2,3,1,0]
console.log(numeros.sort())
//funciona com letras também

//juntar dois arrays

const novo = item.concat(["a", 'b','t'])
console.log(novo)

//juntar arrays em uma string
console.log(item.join(','))

// verificar indice do item
const index = item.indexOf('oi')
console.log(index)
console.log(item[index])