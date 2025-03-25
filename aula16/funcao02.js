function soma (n1=0, n2=0){
    return n1 + n2
}

function subtracao (n1=0, n2=0){
    return n1 - n2
}

function multiplicacao (n1=0, n2=0){
    return n1 * n2
}

function divisao (n1=0, n2=0){
    return n1 / n2
}

console.log(soma(2,5))
// console.log(soma(2)) se fizer assim ele vai considerar o n2 um undefined e vai dar NaN. porem la na funçao igualando o n2 a 0 ele vai considerar o n2 como 0 e vai dar certo.
