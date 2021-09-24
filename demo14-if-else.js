let frutaExistenteNoMercado = false
let temCPUSuficiente = true

// obter valores do terminal

const args = process.argv
const saldo = args[args.length - 1]
//console.log('args', args)
//console.log('saldo', saldo)

if (isNaN(saldo)) {
  console.log('valor inválido')
  return
}

let tipoCliente = 'premium'
if (saldo < 9) {
  tipoCliente = 'Basic'
} else if (saldo > 10 && saldo < 20) {
  tipoCliente = 'Gold'
} else {
  tipoCliente = null
}

//null, undefined, vazio, 0===false!

if (!tipoCliente) {
  tipoCliente = 'indefinido'
}

console.log('tipoDoCliente', tipoCliente)

//outra forma

const idade = 18
const resultado = idade >= 18 ? 'pode dirigir' : 'Não pode dirigir'

console.log('Resultado', resultado)
