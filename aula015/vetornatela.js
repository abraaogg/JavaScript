let num = [4, 2, 6, 8]
num.sort()

// Essa maneira apresenta todos os valores do vetor, sem a necessidade de várias linhas de codigo

for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log('Versão simplificada abaixo:')

// Maneira ainda mais simples que a de cima

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}