import React from 'react';
import '../header/style.css'
import Login from '../login/login';
import lamp from '../../js/changetheme/changetheme';
import toggleMenu from '../../js/toggleMenu/toggleMenu';

function Navbar() {
  


  return (
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
            <li className="btn-dropdown"><a id="2" className="link-menu" href="/mamiss">Mamis</a></li>
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
            <li className="btn-dropdown"><a id="5" className="link-menu" onClick={(e) => Login(e)}>Login</a></li>
          </div>
          <div className="dropdown">
            <li>
              <a href="#"><i id="theme" onClick={(e) => lamp(e)} onTouchStart={(e) => lamp(e)} alt="Mudar tema" className="far fa-sun"></i></a>
            </li>
          </div>
        </ul>
      </nav>
    )
  }
export default Navbar;