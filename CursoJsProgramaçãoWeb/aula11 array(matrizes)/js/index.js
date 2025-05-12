 /* ARRAYS  
 Os arrays JavaScript são usados para armazenar vários valores  
 em uma única variável. Diferente dos objetos, que funcionam com  
  propriedades ou "nomes" que você dá para os itens dentro dele, os  
 arrays não possuem propriedades. O item dentro dele é encontrado pela  
 posição.  

 Imagine um array como uma lista de itens, com controle, por ordem de  
 posição dentro dele.  

 Ex: const lista = ["arroz","feijão","macarrão","leite"];  

 A lista[0] (lista na posição 0) vai conter o valor "arroz".  
 A lista[1] (lista na posição 1) vai conter o valor "feijão".  

 E assim por diante.
 */

// -----------------------------------------------
// var item1 = "arroz";
// var item2 = "feijão";
// var item3 = "macarrão";
// var item4 = "leite";

const lista = [
    "arroz",
    "feijão", 
    "macarrão", 
    "leite"
];
// ^ array literal porque to listando todos os items RECOMENDADOESSE

// const lista = [];
// lista[0] = "arroz";
// lista[1] = "feijão";
// lista[2] = "macarrão";
// lista[3] = "leite";

// const lista = new Array("arroz", "feijão", "macarrão", "leite");

// alert(lista[0]);
// lista[0] = "batata";
// alert(lista[0]);

const pessoa = ["Lucas", "Martins", 30, "estudante"];//array
//  
alert(pessoa[pessoa.length -1]);
pessoa.push("Brasileiro");
console.log(pessoa);