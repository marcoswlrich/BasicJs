const fs = require('fs')

// // Callback hell

// fs.readFile('temporizadores.js', (err, data) => {
//   fs.writeFile('temporizador-copy.js', data, err => {
//     console.log('arquivo copiado')
//   })
// })

// promises + async/await

const readFile = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })

const writeFile = (path, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })

// readFile('temporizadores.js')
//   .then(data => writeFile('cópia-promise.js', data))
//   .then(() => console.log('Arquivo copiado'))
//   .catch(err => console.log(err))

// async/await

const copyFile = async () => {
  console.log('Olá async/await')
  const data = await readFile('temporizadores.js')
  await writeFile('copy-async-await.js', data)
  console.log('arquivo lido e escrito')
}

copyFile().then(() => console.log('fim do async/await'))
