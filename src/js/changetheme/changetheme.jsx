
function changeTheme(property, value) {
    const rootElement = document.documentElement
    rootElement.style.setProperty(property, value)
}


export default function lamp(event) {

    

    const tema = document.getElementById('theme');
    if (event.type === 'touchstart') event.preventDefault();

    if (tema.classList[1] == "fa-moon") {
        tema.classList.remove('fa-moon');
        tema.classList.add('fa-sun');
        changeTheme('--fundo', '#182325');
        changeTheme('--fundo-branco', '#fff');
        changeTheme('--tema', '#ECC816');


    } else {
        tema.classList.remove('fa-sun');
        tema.classList.add('fa-moon');

        changeTheme('--fundo', '#f1faee');
        changeTheme('--fundo-branco', '#182325');
        changeTheme('--tema', '#000');

    }
} 