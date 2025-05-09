// OBJETOS

// Objetos são basicamente variáveis com muitos valores dentro.

// Ex: const carro = {marca:"ford", modelo:"ka", ano: 2015}

// Os valores dentro de um objeto são chamados propriedades.

// Objetos também podem ter métodos. Um Método é uma função colocada dentro de uma propriedade.

const carro = {
    marca:"ford", 
    modelo:"ka", 
    ano:2015, 
    placa:"ABC-1234",
    buzina:function(){alert('biiiii')},
    completo:function(){
        return this.marca + " " + this.modelo + " " + this.ano;
    },
}; //pra transformar em um objeto coloque chaves,cada item desse é uma propriedade, ou método. se for texto coloca em aspas duplas e se for numero nao. costumasse usar const para objetos em JS
// esse é um objeto literal
//carro.buzina();
console.log(carro.completo());