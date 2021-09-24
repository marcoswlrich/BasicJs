const textoPar = 'Par'
const textoImpar = 'Impar'

// for (let index = 0; index <= 10; index++) {
//      const decisao = index % 2 === 0 ? textoPar : textoImpar
//      console.log(`O número ${index} é ${decisao}`)
// }

const minhaListaDeTarefas = [
  {
    id: parseInt(Math.random() * 10),
    nome: 'Zezinho',
    superPoder: 'Veloz'
  },
  {
    id: Math.random(),
    nome: 'Mariazinha',
    superPoder: 'Super Força'
  }
]

for (let index = 0; index < minhaListaDeTarefas.length; index++) {
  const item = minhaListaDeTarefas[index]
  console.log(
    `
    id: ${item.id}
    nome: ${item.nome}
    `
  )
}

//Não precisa de um contador

for (const index in minhaListaDeTarefas) {
  const item = minhaListaDeTarefas[index]
  console.log('Nome', item.nome)
}

// não precisa usar index

for (const item of minhaListaDeTarefas) {
  console.log('Nome', item.nome)
}
