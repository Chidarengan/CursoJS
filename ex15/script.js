function verificar(){
   var data = new Date();
   var ano = data.getFullYear();
   var fano = document.getElementById('txtano');
   var res = document.querySelector('div#res');
   if (fano.value.lenght == 0 || Number(fano.value) > ano){window.alert('[ERRO] Verifique os dados e tente novamente!')}
   else{
    var fsex = document.getElementsByName('radsexo')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
            // Criança
        } else if (idade < 21) {
            // Jovem
        } else if (idade < 58) {
            // Adulto
        } else {
            // Idoso
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'imgs/pexels-amir-1183434.jpg')
        } else if (idade < 21) {
            // Jovem
        } else if (idade < 58) {
            // Adulto
        } else {
            // Idoso
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
   }
}
nao aguento mais essa aula. dia ruim
configura o ctrl enter e o ctrl /