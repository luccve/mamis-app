import React from 'react';
import '../header/style.css'
import '../login/login.css'
import lamp from '../../js/changetheme/changetheme';
import toggleMenu from '../../js/toggleMenu/toggleMenu';
import Logorosa from '../../assets/LOGOROSA.png'
import Login from '../../js/login/login';
import LoginCheck from '../../js/login/loginCheck';

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

        <div className="dropdown" id='login'>

          {/* modal do boostrap */}
          {/* <!-- Button trigger modal --> */}
          <a type="button" data-bs-toggle="modal" data-bs-target="#LoginModal" onClick={(e) => Login(e)}>
            Login
          </a>

          {/* <!-- Modal --> */}
          <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="LoginModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">

                  <img id="logo" src={Logorosa} alt="Logo Mamis" />
                  <button id='btnlogin' type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">

                  <form action="#">
                    <div className="field email">
                      <div className="input-area">
                        <input type="email" id='loginEmail' placeholder="E-mail" />
                        <i className="icon fas fa-envelope"></i>
                        <i className="error error-icon fas fa-exclamation-circle"></i>
                      </div>
                      <div className="error error-txt">Não pode deixar em branco o campo E-mail.</div>
                    </div>
                    <div className="field password">
                      <div className="input-area">
                        <input type="password" id='loginSenha' placeholder="Password" />
                        <i className="icon fas fa-lock"></i>
                        <i className="error error-icon fas fa-exclamation-circle"></i>
                      </div>
                      <div className="error error-txt">Não pode deixar em branco o campo senha.</div>
                    </div>
                    <div className="pass-txt"><a href="#">Esqueceu a senha?</a></div>
                    <div className="pass-txt"><a href="/Cadastro">Não tem cadastro? </a></div>

                    <input type="submit" onClick={(e) => LoginCheck(e)} value="Login" />
                  </form>

                </div>
                <div className="modal-footer">


                </div>
              </div>
            </div>
          </div>


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