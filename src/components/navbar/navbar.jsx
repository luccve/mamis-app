import React from 'react'
import '../header/style.css'
import '../login/login.css'

import lamp from '../../js/changetheme/changetheme'
import toggleMenu from '../../js/toggleMenu/toggleMenu'
import Logorosa from '../../assets/LOGOROSA.png'
import Login from '../../js/login/login'
import LoginCheck from '../../js/login/loginCheck'
import { Link } from 'react-router-dom'

function Navbar() {
  const PATH = 'mamis-app'

  return (
    <nav id="nav">
      <button
        aria-label="Abrir Menu"
        id="btn-mobile"
        aria-haspopup="true"
        aria-controls="menu"
        aria-expanded="false"
        onClick={e => toggleMenu(e)}
      >
        <span id="hamburger"></span>
      </button>

      <ul id="menu" role="menu">
        <div className="dropdown ">
          <li className="btn-dropdown" id="Quem">
            <Link id="1" className="link-menu show" to={PATH + '/quemsomos'}>
              Quem somos
            </Link>
          </li>

          <div className="dropdown_submenu">
            <Link to={PATH + '/historia'}>História</Link>
            <Link to={PATH + '/FAQ'}>FAQ</Link>
            <Link to={PATH + '/comoajudar'}>Como ajudar?</Link>
          </div>
        </div>

        <div className="dropdown">
          <li className="btn-dropdown">
            <Link id="2" className="link-menu" to={PATH + '/mamis'}>
              Mamis
            </Link>
          </li>
          <div className="dropdown_submenu">
            <Link to={PATH + '/missao'}>Missão</Link>
            <Link to={PATH + '/maeparamae'}>Mãe para Mãe</Link>
            <Link to={PATH + '/mapa'}>Mapa</Link>
          </div>
        </div>
        <div className="dropdown">
          <li className="btn-dropdown">
            <Link id="3" className="link-menu" to={PATH + '/doacao'}>
              Doe
            </Link>
          </li>
        </div>

        <div className="dropdown">
          <li className="btn-dropdown">
            <Link id="4" className="link-menu" to={PATH + '/contato'}>
              Contato
            </Link>
          </li>
        </div>

        <div className="dropdown" id="login">
          {/* modal do boostrap
          {/* <!-- Button trigger modal --> */}
          {/* <a
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#LoginModal"
            onClick={e => Login(e)}
          ></a>  */}

          <Link id="4" className="link-menu" to={PATH + '/login'}>
            Login
          </Link>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="LoginModal"
            tabIndex="-1"
            aria-labelledby="LoginModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <img id="logo" src={Logorosa} alt="Logo Mamis" />
                  <button
                    id="btnlogin"
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form action="#">
                    <div className="field email">
                      <div className="input-area">
                        <input
                          type="email"
                          id="loginEmail"
                          placeholder="E-mail"
                        />
                        <i className="icon fas fa-envelope"></i>
                        <i className="error error-icon fas fa-exclamation-circle"></i>
                      </div>
                      <div className="error error-txt">
                        Não pode deixar em branco o campo E-mail.
                      </div>
                    </div>
                    <div className="field password">
                      <div className="input-area">
                        <input
                          type="password"
                          id="loginSenha"
                          placeholder="Password"
                        />
                        <i className="icon fas fa-lock"></i>
                        <i className="error error-icon fas fa-exclamation-circle"></i>
                      </div>
                      <div className="error error-txt">
                        Não pode deixar em branco o campo senha.
                      </div>
                    </div>
                    <div className="pass-txt">
                      <a href="#">Esqueceu a senha?</a>
                    </div>
                    <div className="pass-txt">
                      <Link to={PATH + '/Cadastro'}>Não tem cadastro? </Link>
                    </div>

                    <input
                      type="submit"
                      onClick={e => LoginCheck(e)}
                      value="Login"
                    />
                  </form>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown">
          <li>
            <a href="#">
              <i
                id="theme"
                onClick={e => lamp(e)}
                alt="Mudar tema"
                className="far fa-sun"
              ></i>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  )
}
export default Navbar
