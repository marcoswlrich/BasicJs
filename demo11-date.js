//meses começam no zero

const dataAniversario = new Date(2020, 0, 20)
console.log(dataAniversario)

const primeiraDataDoJs = new Date(0)
console.log(primeiraDataDoJs.getTime())

const hoje = new Date()
console.log(hoje.toString())
console.log(hoje.toLocaleDateString()) //local

//formato global recomendado!!!
console.log(hoje.toISOString())

const dia = hoje.getDate()
hoje.setDate(dia + 5) // +5 dias depois de hoje
hoje.setHours(10, 30, 0)
console.log(`
    Dia: ${hoje.getDate()}
    Mes: ${hoje.getMonth()}
    Ano: ${hoje.get.FullYear()}
    Hora: ${hoje.getHours()}
    Minute: ${hoje.getMinutes()}
    Seconds: ${hoje.getSeconds()}
`)

//comparar datas
console.log(new Date(2020, 1, 20) > new Date(2000, 1, 1))
