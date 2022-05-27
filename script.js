const button = window.document.querySelector(".button")
const body = document.querySelector(".body")
const nome_da_cor = document.getElementById("nome_da_cor")

let aux = 0
let event1 =(event1) =>{
    body.style.background = '#F2F2F2';
    nome_da_cor.innerHTML = "Background:  #F2F2F2";
    button.addEventListener('click', (event2));
}
let event2 =(event2) =>{
    body.style.background = '#C7C7C7';
    nome_da_cor.innerHTML = "Background:  #C7C7C7";
    button.addEventListener('click', (event3));
}
let event3 =(event3) =>{
    body.style.background = '#292929';
    nome_da_cor.innerHTML = "Background:  #292929";
    button.addEventListener('click', (event4));
}
let event4 =(event1) =>{
    body.style.background = '#F2F2F2';
    nome_da_cor.innerHTML = "Background:  #F2F2F2";
    button.addEventListener('click', (event5));
}
let event5 =(event2) =>{
    body.style.background = '#C7C7C7';
    nome_da_cor.innerHTML = "Background:  #C7C7C7";
    button.addEventListener('click', (event6));
}
let event6 =(event3) =>{
    body.style.background = '#292929';
    nome_da_cor.innerHTML = "Background:  #292929";
    button.addEventListener('click', (event1));
}
button.addEventListener('click', (event1))