import React from 'react'
import './style.css'
import Logorosa from '../../assets/LOGOROSA.png'

function Header() {

  function changeTheme(property, value) {
    const rootElement = document.documentElement
    rootElement.style.setProperty(property, value)
  }

  function lamp(event) {
    const tema = document.getElementById('theme');
    if (event.type === 'touchstart') event.preventDefault();

    if (tema.classList[1] == "fa-moon") {
      tema.classList.remove( 'fa-moon');
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

  function toggleMenu(event) {
    // if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    console.log(nav)
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  return (
    <header id="header">
      <img id="logo" src={Logorosa} alt="Logo Mamis" />

      <nav id="nav">

        <button aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onClick={(e) => toggleMenu(e)}
          onTouchStart={(e) => toggleMenu(e)}
        >
          <span id="hamburger"></span>
        </button>

        <ul id="menu" role="menu">

          <div className="dropdown ">
            <li className="btn-dropdown" id="Quem"><a id="1" className="link-menu show" href="/quemsomos">Quem somos</a></li>

            <div className="dropdown_submenu">
              <a href="/historia">História</a>
              <a href="/FAQ">FAQ</a>
              <a href="/comoajudar">Como ajudar?</a>
            </div>
          </div>

          <div className="dropdown">
            <li className="btn-dropdown"><a id="2" className="link-menu" href="/mamis">Mamis</a></li>
            <div className="dropdown_submenu">
              <a href="/missao">Missão</a>
              <a href="/maeparamae">Mãe para Mãe </a>

            </div>
          </div>
          <div className="dropdown">
            <li className="btn-dropdown"><a id="3" className="link-menu" href="/doacao">Doe</a></li>

          </div>

          <div className="dropdown">
            <li className="btn-dropdown"><a id="4" className="link-menu" href="/contato">Contato</a></li>
          </div>

          <div className="dropdown">
            <li className="btn-dropdown"><a id="5" className="link-menu" href="/login">Login</a></li>
          </div>
          <div className="dropdown">
            <li>
              <a href="#"><i id="theme" onClick={(e) => lamp(e)} onTouchStart={(e) => lamp(e)} alt="Mudar tema" className="far fa-sun"></i></a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Header