const navbar = document.querySelector('.navbar');
const button = document.querySelector('.buttonav');
button.addEventListener('click', function(){
    navbar.classList.toggle('active');
})
const logowanie = document.querySelector('.panel-logowanie');
const panel = document.querySelector('.panel-gracz');
const lconteiner = document.querySelector('.conteiner-panel')
const lbuttonx = document.querySelector('.panel-x')
panel.addEventListener('click', function(){
    logowanie.classList.add('on');
    lconteiner.classList.add('off');
})
lbuttonx.addEventListener('click', function(){
    lconteiner.classList.remove('off');
    logowanie.classList.remove('on');
})