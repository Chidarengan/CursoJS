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

// const pessoa = ["Lucas", "Martins", 30, "estudante"];//array
//  
// document.getElementById("teste").innerHTML = pessoa.join(" - ");
// esse join muda as virgulas para oq tiver ali dentro do parenteses

// pessoa.pop(); //(remove o ultimo item da matriz)
// pessoa.push("Brasileiro"); 
// pessoa.shift(); //(remove o primeiro item da matriz), altera a numeraçao da tabela
// pessoa.unshift("Lucass"); //(adiciona um item no começo da matriz)
// delete pessoa[0]; //(deleta o item que estiver na posição 0, NAO altera a numeração da tabela)
// pessoa.splice(1, 0, "item adicionado 1", "item adicionado 2")

const lista1 =["Arroz, Feijão, Macarrão, Leite"];
const lista2 = ["Suco, Refrigerante, Água"];
const superLista = lista1.concat(lista2);

document.getElementById("teste").innerHTML = superLista.join(" - ");
// sort deixa em ordem alfabetica, apos isso se usar reverse deixa o contrario da ordem alfabetica. pra numeros tem q meter uma funcao
// sort((a, b) => a - b) // pra numeros