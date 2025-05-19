 /* Switch
É usado para realizar diferentes ações com base em diferentes condições
no mesmo bloco de verificação. Caso a condição não seja compatível
não será executada e o valor padrão será acionado.
 */


function verificaCor(){
    let cor = document.getElementById("cor").value;


switch(cor){
    case "azul":
        // caso seja azul acontece:
        document.body.style.backgroundColor = "blue";
        break;
    case "vermelho":
        // caso seja vermelho acontece:
        document.body.style.backgroundColor = "red";
        break;    
    case "amarelo":
        // caso seja amarelo acontece:
        document.body.style.backgroundColor = "yellow";
        break;
default:
    document.getElementById("teste").innerHTML = "nenhuma cor disponivel para: " + cor;
}
}
