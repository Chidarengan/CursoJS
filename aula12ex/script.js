function carregar(){ 
var msg = window.document.getElementById('msg')    
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
 //bom dia 
    img.src = '/aula12ex/imgs/manha.png'
    document.body.style.background = '#e9cfab'
 }else if (hora >= 12 && hora <= 18){
 //boa tarde
    img.src = '/aula12ex/imgs/tarde.png'
    document.body.style.background = '#874e35'
 }else{
 //boa noite
    img.src = '/aula12ex/imgs/noite.png'
    document.body.style.background = '#5f5499'
 }  
}