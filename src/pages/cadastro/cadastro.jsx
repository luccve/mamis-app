import React from 'react'
import ReactDOM from 'react-dom'
import '../css/contato.css'
import TextareaJS from '../../js/textarea/textarea'
import Clear from '../../js/clear/clear'
import Upload from '../../js/upload/upload'
import MaskPhone from '../../js/mask/maskphone'
import MaskEmail from '../../js/mask/maskemail'
import Checker from '../../js/checker/checker'
import ClearPassword from '../../js/checker/clearpass'
import CheckerClear from '../../js/checker/checkerclear'
import CPFMask from '../../js/mask/maskercpf'
import CheckerFinal from '../../js/checker/checkerfinal'
import Logorosa from '../../assets/LOGOROSA.png'
import { Link } from 'react-router-dom'

function Cadastro() {
  const PATH = '/mamis-app'

  return (
    <section className="formulario">
      <div className="cabecario">
        <img id="logo" src={Logorosa} alt="Logo Mamis" />
        <h1>Formulário de Cadastro</h1>
      </div>
      <form>
        <div className="input-group">
          <div className="input-box">
            {/* 1 nome */}
            <label htmlFor="firstname"></label>
            <input
              id="firstname"
              onKeyUp={event => Checker(event)}
              maxLength="30"
              type="text"
              name="firstname"
              placeholder="Nome"
              required
            ></input>
            <span id="firstnameValidation"></span>
          </div>
          <div className="input-box">
            {/*  sobrenome */}
            <label htmlFor="lastname"></label>
            <input
              id="lastname"
              onKeyUp={event => Checker(event)}
              maxLength="50"
              type="text"
              name="lastname"
              placeholder="Sobrenome"
              required
            ></input>
            <span id="lastnameValidation"></span>
          </div>
          <div className="input-box">
            {/*  CPF */}
            <label htmlFor="CPF"></label>
            <input
              id="CPF"
              maxLength="14"
              onKeyUp={event => CPFMask(event)}
              type="text"
              name="CPF"
              placeholder="CPF"
              required
            ></input>
            <span id="CPFValidation"></span>
          </div>

          <div className="input-box">
            {/* email */}
            <label htmlFor="email"></label>
            <input
              onBlur={event => MaskEmail(event)}
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
              id="telefone"
              onKeyUp={event => MaskPhone(event)}
              onBlur={event => MaskPhone(event)}
              type="tel"
              name="telefone"
              placeholder="(xx) xxxxx-xxxx"
            ></input>
            {/* ASSUNTO */}
          </div>
          {/* senha */}
          <div className="input-box">
            <label htmlFor="password"></label>
            <input
              maxLength="50"
              id="password"
              type="password"
              name="password"
              placeholder="Senha"
              required
            ></input>
          </div>
          {/* confirme a senha */}
          <div className="input-box">
            <label htmlFor="passwordchecker"></label>
            <input
              maxLength="50"
              onFocus={event => Checker(event)}
              onChange={event => Checker(event)}
              onBlur={event => ClearPassword(event)}
              id="passwordchecker"
              type="password"
              name="passwordchecker"
              placeholder="Confirme a senha"
              required
            ></input>
            <span id="passwordValidation"></span>
          </div>
          <div>
            <Link className="" to={PATH + '/login'}>
              Já tem cadastro?
            </Link>
          </div>
        </div>
        <div className="rodape">
          <div className="buttoes">
            <input
              type="reset"
              value="Limpar"
              onClick={event => CheckerClear(event)}
            />
            <input
              type="submit"
              onSubmit={event => CheckerFinal(event)}
              target="_blank"
              value="Enviar"
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default Cadastro
