import React from 'react';

import Logorosa from '../../assets/LOGOROSA.png'

function Footer() {
  return (
    <footer>
      <div>
        <img id="logoFooter"
          src={Logorosa}
          alt="Logo Mamis" />
      </div>
      <div>
        <a className="contato">@mamisbrasil</a>
        <a className="contato">Fale Conosco </a>
        <div className="icones">
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