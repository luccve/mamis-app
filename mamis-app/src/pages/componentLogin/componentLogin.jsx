import React from 'react';
import '../../components/login/login.css'
import Logorosa from '../../assets/LOGOROSA.png'
import Login from '../../js/login/login';
import LoginCheck from '../../js/login/loginCheck';

// import { Container } from './styles';

function componentLogin() {
    return (
        <section className="formulario" id='login'>


            <div className="inicio">

                <img id="logo" src={Logorosa} alt="Logo Mamis" />
                
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

        </section>
    )
}

export default componentLogin;