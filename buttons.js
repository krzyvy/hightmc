//Rozwijana nawigacja
const navbar = document.querySelector('.navbar');
const button = document.querySelector('.buttonav');
button.addEventListener('click', function(){navbar.classList.toggle('active');});
//Panel logowania/gracza
const logowanie = document.querySelector('.panel-logowanie');
const panel = document.querySelector('.panel-gracz');
const lconteiner = document.querySelector('.conteiner-panel');
const lbuttonx = document.querySelector('.panel-x');
panel.addEventListener('click', function(){logowanie.classList.toggle('on'); lconteiner.classList.add('off'); });
lbuttonx.addEventListener('click', function(){lconteiner.classList.remove('off'); logowanie.classList.remove('on'); });
//Rankingi
const menuitem1 = document.querySelector('#r-1');
const menuitem2 = document.querySelector('#r-2');
const menuitem3 = document.querySelector('#r-3');
const r1 = document.querySelector('#ri-1');
const r2 = document.querySelector('#ri-2');
const r3 = document.querySelector('#ri-3');
window.onload = function(){menuitem1.classList.add('active'); r1.classList.add('active');}
menuitem2.addEventListener('click', function(){
    r1.classList.remove('active');
    r2.classList.add('active');
    r3.classList.remove('active');
    menuitem1.classList.remove('active');
    menuitem2.classList.add('active');
    menuitem3.classList.remove('active');
});
menuitem3.addEventListener('click', function(){
    r1.classList.remove('active');
    r2.classList.remove('active');
    r3.classList.add('active');
    menuitem1.classList.remove('active');
    menuitem2.classList.remove('active');
    menuitem3.classList.add('active');
});
function newFunction() {
    menuitem1.addEventListener('click', function () {
        r1.classList.add('active');
        r2.classList.remove('active');
        r3.classList.remove('active');
        menuitem1.classList.add('active');
        menuitem2.classList.remove('active');
        menuitem3.classList.remove('active');
    });
}