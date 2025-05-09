/* EVENTOS

Eventos são ações disparadas pela interação dos usuários na página. É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um clique.
ondblclick -> Disparado quando recebe um clique duplo.
onmouseover -> Disparado quando o mouse está sobre o elemento.
onmouseout -> Disparado quando o mouse sai do elemento.
onmousemove -> Disparado quando o mouse se move sobre o elemento.
onmousedown -> Disparado quando o botão do mouse é pressionado.
onmouseup -> Disparado quando o botão do mouse é liberado.
onfocus -> Disparado quando o elemento recebe foco (válido para inputs, selects, etc.).
onchange -> Disparado quando o conteúdo do elemento é alterado ("ao mudar").
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é liberada sobre um elemento.
onload -> Disparado quando a página termina de carregar (usado no <body>).
onresize -> Disparado quando ocorre redimensionamento da janela.
*/ 

function eventoClick(){
    alert("Acionou um evento de click maroto ai doido");
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick(){
    alert("Evento de clique duplo dos deuses");
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraRoxo(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blueviolet";
}
//será q tem um jeito mais facil de fazer esse vai e vem de cores usando apenas uma funçao?

function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('se mexer é pilantra<br>');
//parei a aula em 11min