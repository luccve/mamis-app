import React from 'react'
import './footer.css'
import Logorosa from '../../assets/LOGOROSA.png'
import { Link } from 'react-router-dom'

function Footer() {
  const PATH = 'mamis-app'

  return (
    <footer className="footer container-fluid">
      <div className="row align-items-center">
        <div className="col">
          <Link to={PATH + '/'}>
            <img id="logoFooter" src={Logorosa} alt="Logo Mamis" />
          </Link>
        </div>
        <div className="col">
          <Link to={PATH + '/quemsomos'} className="contato">
            Quem somos
          </Link>
          <ul>
            <li>
              <Link to={PATH + '/historia'}>História</Link>
            </li>
            <li>
              <Link to={PATH + '/FAQ'}>FAQ</Link>
            </li>
            <li>
              <Link to={PATH + '/comoajudar'}>Como ajudar?</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Link to={PATH + '/mamis'} className="contato">
            Mamis
          </Link>
          <ul>
            <li>
              <Link to={PATH + '/missao'}>Missão</Link>
            </li>
            <li>
              <Link to={PATH + '/maeparamae'}>Mãe para Mãe</Link>
            </li>
            <li>
              <Link to={PATH + '/mapa'}>Mapa</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Link to={PATH + '/doacao'} className="contato">
            Doe
          </Link>
          <ul>
            <li>
              <Link to={PATH + '/cadastro'}>Cadastro</Link>
            </li>
            <li>
              <Link to={PATH + '/contato'}>Contato</Link>
            </li>
            <li>
              <Link to={PATH + '/Login'}>Login</Link>
            </li>
          </ul>
        </div>

        <div className="col icones">
          <a href="https://www.instagram.com/mamisbrasil/" target="_blank">
            <i alt="instagram" className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/luccve/mamis-app" target="_blank">
            <i alt="github" className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/estevao-lucas/" target="_blank">
            <i alt="linkedin" className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
