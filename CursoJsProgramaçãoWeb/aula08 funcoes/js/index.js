/* FUNÇÕES

Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.

É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função JavaScript é executada quando "algo" a invoca (chama-a).
*/

function soma(valor1, valor2){
    return valor1 + valor2;
}

function alertaHello(){
    alert("Ola Pessoal");
}

//alertaHello();
//^assim ativa ela diretamente sem usar um botao
document.getElementById("texto").innerHTML = soma(10, 10);