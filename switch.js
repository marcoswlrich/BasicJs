let nota1 = 8
let nota2 = 5.5
let media = (nota1 + nota2) / 2

if (media >= 8) {
  conceito = 'ótimo'
} else if (media >= 6.5) {
  conceito = 'Bom'
} else {
  conceito = 'Regular'
}

console.log(media)
console.log(conceito)

switch (conceito) {
  case 'ótimo':
    console.log('Parabens. ótimo aluno')
    break
  case 'Bom':
    console.log('Continue esforçado')
    break
  case 'Regular':
    console.log('Baixo demais. Estude Mais')
    break

  default:
    console.log('Erro')
    break
}
