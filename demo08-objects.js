const heroi = {
    nome: 'Batman',
    idade: 75,
    sexo: 'Masculino',
}

console.log('Nome:', heroi.nome);
console.log('Idade:', heroi['idade']);
console.log('Sexo:', heroi.sexo);
console.log('naoExiste:', heroi.naoExiste);
heroi.id = 001;
console.log(heroi)

//saber chaves - Em listas
console.log(Object.keys(heroi))

//saber valores - Em listas

console.log(Object.values(heroi))

//Juntar dois objetos
const pessoa = {
    tamanho: '3 metros'
}

const novoObjet = Object.assign(heroi, pessoa)

console.log(novoObjet)

//remover uma chave do objeto

delete novoObjet.nome

console.log(novoObjet)



