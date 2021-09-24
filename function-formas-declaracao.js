//function anonima

/*const media = function (n1, n2) {
  return (n1 + n2) / 2
}

let a = media(8, 7)

console.log(a)*/

// Arrow function

/* const media = (n1, n2) => {
  return (n1 + n2) / 2
}

let a = media(8, 7)

console.log(a)*/

//arrow function outra forma

const media = (n1, n2) => (n1 + n2) / 2

let b = media(8, 9)
console.log(b)

//arrow dentro de objetos
const obj = {
  media: (n1, n2) => (n1 + n2) / 2
}

obj.media(8, 7)

console.log(obj.media(8, 7))
