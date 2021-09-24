const readline = require('readline')
const terminal = readline.createInterface({
  //definir o modo de entrada via terminal
  input: process.stdin,
  // todo texto de saída sairá no terminal
  output: process.stdout
})

//texto do menu
const textoMenu = `
Olá, seja bem vindo ao sistema media 
Digite 1 para acessar o menu principal
Digite 2 para acessar o menu de herois
Digite 3 para acessar o menu de guerreiros
Digite 0 para sair`
console.log('Texto Menu', textoMenu)
//const opcao = 3
//switch (opcao) {
// case 1:
//   console.log('pressionou 1')
//   break
// case 2:
//    console.log('pressionou 2')
//    break
//  default:
//    console.log('opção invalida')
//    break
//}

//terminal.question('Qual seu nome?', msg => {
// console.log('Vc escreveu', msg)
// terminal.close
//})

const questoes = {
  menuInicial: {
    texto: textoMenu,
    fn: menuInicial
  },
  opcao1: {
    texto: 'submenu! Pressione enter para selecionar mais opções...',
    fn: opcao1
  }
}

function opcao1(msg) {
  console.log('Não a mais opçoes')
  terminal.close()
}

function menuInicial(msg) {
  const opcao = Number(msg)
  if (isNaN(opcao)) {
    throw new Error('Não é um numero', msg)
  }
  switch (opcao) {
    case 0:
      console.log('Saindo...')
      terminal.close()
      break
    case 1:
      console.log('Menu Inicial')
      terminal.question(questoes.opcao1.texto, questoes.opcao1.fn)
      break
    default:
      console.log('opcao Invalida mané!')
      terminal.close()
      break
  }
}

terminal.question(questoes.menuInicial.texto, questoes.menuInicial.fn)
