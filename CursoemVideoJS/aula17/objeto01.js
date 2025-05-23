let amigo = {
    nome: 'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
// console.log(typeof amigo) //em js array é um objeto, e objeto tbm é um objeto. o type off diz o q a variavel é.
amigo.engordar(2)
console.log(amigo)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)