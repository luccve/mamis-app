import React from 'react';
import './footer.css';
import Logorosa from '../../assets/LOGOROSA.png'

function Footer() {
  return (
    <footer className="footer container-fluid">
      <div className="row align-items-center">
        <div className="col">
          <a href="/"><img id="logoFooter"
            src={Logorosa}
            alt="Logo Mamis" /></a>
        </div>
        <div className="col">
          <a href='/quemsomos' className="contato">Quem somos</a>
          <ul>
            <li><a href="/historia">História</a></li>
            <li><a href="/FAQ">FAQ</a></li>
            <li><a href="/comoajudar">Como ajudar?</a></li>
          </ul>

        </div>
        <div className="col">
        <a href='/mamiss' className="contato">Mamis</a>
          <ul>
            <li><a href="/missao">Missão</a></li>
            <li><a href="/maeparamae">Mãe para Mãe</a></li>
          </ul>
        </div>
        <div className="col">
          <a href='/doacao' className="contato">Doe</a>
          <ul>
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>
      

        <div className="col icones">
          <a href="https://www.instagram.com/mamisbrasil/">
            <i alt='instagram' className="fab fa-instagram"></i>
          </a>
          <a href="https://github.com/luccve/mamis">
            <i alt='github' className="fab fa-github"></i>
          </a>
          <a href="#">
            <i alt='linkedin' className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

    </footer>
  )
}

export default Footer;