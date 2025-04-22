let num = [5, 8, 2, 9, 3]

// Adicionando um elemento extra no vetor 
num[3] = 6 
num.push(7)

//atributo/ comprimento do vetor
num.length

// o num.sort coloca os elementos em ordem crescente
num.sort()

console.log(num)


console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
//num.indexOf procura no vetor onde está o valor (8)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)
