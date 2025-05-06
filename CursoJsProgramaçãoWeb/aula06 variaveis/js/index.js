console.log(5+5); 
//^ele entende q isso é uma soma
console.log("5+5"); 
// assim ele entende q é uma string
// para declarar variaveis usa var, let, e const
var a = 1;
var b = 5;
var c = a + b;
//operadores aritimeticos - + * / 
console.log(c);

var PESSOA = "Jorge";
var pessoa = "Igor";

console.log(pessoa);
console.log(PESSOA);
//-----------------

var pote = "Bombom";
alert(pote);

// var a = 2;
// var b = 3;
// var c = a + b;

//declaracao de variaveis
var a, b, c;

// atribuiçao dos valores
a = 2;
b = 3;
c = a + b;
alert(c); //se eu nao atribuir valor ele vai me mostrar undefined. se eu pedir pra printar c sem atribuir valor a a e b ele vai dizer que nao é um numero NaN
//no var da pra REATRIBUIR VALOR por exemplo resolendo posteriormente q o 2 é 3. mas nao no let e nao no const

// declaração de variavel nao pode começar com numero, nao pode ter espaços, use underline ou inicie a segunda palavra com letra maiuscula. pode usar $.

var nome, sobrenome, nomeCompleto;
nome = "Pedro";
sobrenome = "Pedregulho";
nomeCompleto = nome + " " + sobrenome;
document.getElementById("texto").innerHTML = nomeCompleto;