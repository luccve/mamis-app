const tema = document.getElementById('theme');
console.log(tema);
function lamp(event){
// class pra mudar <i class="bi bi-lightbulb"></i> <i class="bi bi-lightbulb-off"></i>
    if (tema.classList[1]=="bi-lightbulb-off"){
        tema.classList.remove('bi','bi-lightbulb-off');
        tema.classList.add('bi','bi-lightbulb');
        document.documentElement.style.setProperty('--fundo', '#f1faee');
        document.documentElement.style.setProperty('--fundo-branco', '#182325');
        
    }else{
            tema.classList.remove('bi','bi-lightbulb');
            tema.classList.add('bi','bi-lightbulb-off');
            document.documentElement.style.setProperty('--fundo','#182325');
            document.documentElement.style.setProperty('--fundo-branco', '#fff');}
}

tema.addEventListener('click', lamp);