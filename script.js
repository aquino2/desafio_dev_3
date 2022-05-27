const button = window.document.querySelector(".button")
const body = document.querySelector(".body")
const nome_da_cor = document.getElementById("nome_da_cor")

const event1 =(event1) =>{
    body.style.background = '#F2F2F2';
    nome_da_cor.innerHTML = "Background:  #F2F2F2";
    button.addEventListener('click', (event2));
}
const event2 =(event2) =>{
    body.style.background = '#C7C7C7';
    nome_da_cor.innerHTML = "Background:  #C7C7C7";
    button.addEventListener('click', (event3));
}
const event3 =(event3) =>{
    body.style.background = '#292929';
    nome_da_cor.innerHTML = "Background:  #292929";
    location.reload();
}
button.addEventListener('click', (event1));