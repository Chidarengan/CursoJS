let num = [5, 8, 2 ]
// aqui apenas os elementos 0,1 e 2 estao sendo exibidos
num[3] = 6
// aqui o elemento 3 foi adicionado na posiçao 3
num[3] = 91
// aqui o elemento 3 foi alterado para 91, substituindo o elemento anterior
num.push(7)
// aqui o elemento 7 foi adicionado na ultima posiçao
num.push(5) 
// aqui o elemento 5 foi adicionado na ultima posiçao disponivel, SEM remover o ultimo push
num.length
// aqui foi solicitado o tamanho do vetor
num.sort()
// aqui foi ordenado o vetor
console.log(`nosso vetor é o ${num}`)