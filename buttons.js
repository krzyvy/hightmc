const navbar = document.querySelector('.navbar');
const button = document.querySelector('.buttonav');
button.addEventListener('click', function(){
    navbar.classList.toggle('active');
})
const logowanie = document.querySelector('.panel-logowanie');
const panel = document.querySelector('.panel-gracz');
panel.addEventListener('click', function(){
    logowanie.classList.toggle('on');
})