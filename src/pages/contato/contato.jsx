import React from 'react'
import ReactDOM from 'react-dom'

import '../css/contato.css'
import TextareaJS from '../../js/textarea/textarea'
import Clear from '../../js/clear/clear'
import Upload from '../../js/upload/upload'
import MaskPhone from '../../js/mask/maskphone'
import MaskEmail from '../../js/mask/maskemail'

import Logorosa from '../../assets/LOGOROSA.png'
import NameMask from '../../js/mask/maskname'

function Contato() {
  return (
    <section className="formulario">
      <div className="cabecario">
        <img id="logo" src={Logorosa} alt="Logo Mamis" />
        <h1>Formulário de contato</h1>
        <h5>Como podemos ajudá-lo?</h5>
      </div>
      <form action="#" method="post">
        <div className="input-group">
          <div className="input-box">
            {/*  nome completo */}
            <label htmlFor="username"></label>
            <input
              id="username"
              onKeyUp={event => NameMask(event)}
              maxLength="30"
              type="text"
              name="username"
              placeholder="Nome completo"
              required
            ></input>
            <span id="nameValidation"></span>
          </div>
          <div className="input-box">
            {/* email */}
            <label htmlFor="email"></label>
            <input
              onChange={event => MaskEmail(event)}
              id="email"
              type="email"
              name="email"
              placeholder="E-mail"
              required
            ></input>
            <span id="emailValidation"></span>
          </div>
          {/* TELEFONE */}
          <div className="input-box">
            <label htmlFor="telefone"></label>
            <input
              maxLength={11}
              id="telefone"
              onKeyUp={event => MaskPhone(event)}
              onBlur={event => MaskPhone(event)}
              type="tel"
              name="telefone"
              placeholder="(xx) xxxxx-xxxx (WhatsApp)"
            ></input>
            {/* ASSUNTO */}
          </div>
          {/* ASSUNTO */}
          <div className="input-box">
            <label htmlFor="assunto"></label>
            <input
              maxLength="50"
              id="assunto"
              type="text"
              name="assunto"
              placeholder="Assunto"
              required
            ></input>
          </div>
          {/* MENSAGEM */}
          <div className="input-box">
            <label htmlFor="msg"></label>
            <textarea
              onChange={event => TextareaJS(event)}
              maxLength="400"
              rows="5"
              id="msg"
              name="msg"
              placeholder="  Mensagem limite (400)"
              required
            ></textarea>
            <span id="valueSpan"> </span>
          </div>
          {/* INPUT DE ARQUIVO */}
          <div className="input-box">
            <div id="file">
              {' '}
              <label
                htmlFor="upload"
                name="upload"
                placeholder="Upload"
                required
              >
                {' '}
                <i className="fas fa-file-upload"></i>
                <b> Arquivos</b>
              </label>
            </div>
            <input
              id="upload"
              accept="image/*"
              type="file"
              multiple
              name="upload"
              onChange={event => Upload(event)}
            ></input>
          </div>
        </div>
        <div className="rodape">
          <div className="buttoes">
            <input
              type="reset"
              value="Limpar"
              onClick={event => Clear(event)}
            />
            <input
              type="submit"
              target="_blank"
              onClick={event => () =>
                (window.location = 'mailto:lev.sac.br@gmail.com')}
              value="Enviar"
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default Contato
