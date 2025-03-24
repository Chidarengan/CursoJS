let num = [5, 8, 2, 9, 3]

num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`) 

// Gerar um índice aleatório
let randomIndex = Math.floor(Math.random() * num.length);

// Pegar o valor no índice aleatório
let randomValue = num[randomIndex];
console.log(`O valor aleatório do vetor é ${randomValue}`);