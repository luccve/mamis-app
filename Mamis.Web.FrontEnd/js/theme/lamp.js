const tema = document.getElementById('theme');
const rootElement = document.documentElement


function changeTheme(property, value){
    rootElement.style.setProperty(property, value)
}

function lamp(event){
    if (event.type === 'touchstart') event.preventDefault();
// class pra mudar <i class="bi bi-lightbulb"></i> <i class="bi bi-lightbulb-off"></i>
        if (tema.classList[1]=="bi-lightbulb-off"){
            tema.classList.remove('bi','bi-lightbulb-off');
            tema.classList.add('bi','bi-lightbulb');
            changeTheme('--fundo','#182325');
            changeTheme('--fundo-branco', '#fff');
            
        }else{
                tema.classList.remove('bi','bi-lightbulb');
                tema.classList.add('bi','bi-lightbulb-off');
                
                changeTheme('--fundo', '#f1faee');
                changeTheme('--fundo-branco', '#182325');}
}


tema.addEventListener('click', lamp);
tema.addEventListener('touchstart', lamp);