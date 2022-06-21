import React from 'react';
import ReactDOM from 'react-dom';
import '../css/contato.css'
// import TextareaJS from '../../js/textarea/textarea';

import Logorosa from '../../assets/LOGOROSA.png'

function Contato() {

   

    return (
        <section className='formulario'>
            <div className='cabecario'>
                <img id="logo" src={Logorosa} alt="Logo Mamis" />
                <h1>Formulário de contato</h1>
                <h5>Como podemos ajudá-lo?</h5>
            </div>
            <form action='#' method='post'>
                <div className="input-group">
                    <div className="input-box">
                        {/*  nome completo */}
                        <label htmlFor="username" ></label>
                        <input id='username' type="text" name="username" placeholder="Nome completo" required></input>
                    </div>
                    <div className="input-box">
                        {/* email */}
                        <label htmlFor="email" ></label>
                        <input id='email' type="email" name="email" placeholder="E-mail" required></input>
                    </div>
                    {/* TELEFONE */}
                    <div className="input-box">
                        <label htmlFor="telefone" ></label>
                        <input id='telefone' type="tel" name="telefone" placeholder="(xx) xxxxx-xxxx" ></input>
                        {/* ASSUNTO */}

                    </div>
                    {/* ASSUNTO */}
                    <div className="input-box">
                        <label htmlFor="assunto" ></label>
                        <input id='assunto' type="text" name="assunto" placeholder="Assunto" required></input>
                    </div>
                    {/* MENSAGEM */}
                    <div className="input-box">
                        <label htmlFor="msg" ></label>
                        <textarea maxLength="400" rows="5" id='msg' name='msg' placeholder="  Mensagem limite (400)" required></textarea>
                        <span id='valueSpan'>aqui</span>

                    </div>
                    {/* INPUT DE ARQUIVO */}
                    <div className="input-box">
                        <label htmlFor="upload" ><i className='fas fa-file-upload'></i><b> Arquivos</b></label>
                        <input id='upload' type="file" multiple name="upload"  ></input>

                    </div>
                </div>
                <div className='rodape'>
                    <div className="buttoes">
                        <input type="reset" value="Limpar" />
                        <input type="submit" value="Enviar" />

                    </div>
                </div>
            </form>

        </section>

    )
}

export default Contato;