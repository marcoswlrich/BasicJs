const podeDirigir = true
if (podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if(!saldoEmConta) {      //! - simbolo de negação
    console.log('não tem saldo') 
}

const bollComString ="Ae hackerzão"
//força o valor true ou false
//de acordo com a tabela
console.log('boolComString', !!bollComString)

//negação
console.log('negaçao', !bollComString)

console.log(
    'negação + forçar bool',
    ! (!!bollComString)
)