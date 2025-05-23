function parimpar(n){
    if(n%2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}
// explicando a funçao o n%2 ta pegando o restante da divisao, se nao tiver resto é par, se tiver é impar
// o return serve para retornar o valor da funçao
// o else serve para caso a primeira condiçao nao seja atendida

// let res = parimpar(5)
// console.log(res)

console.log(parimpar(5))