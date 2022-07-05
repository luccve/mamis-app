{
  /* modal do boostrap */
}
{
  /* <!-- Button trigger modal --> */
}
;<a
  type="button"
  data-bs-toggle="modal"
  data-bs-target="#LoginModal"
  onClick={e => Login(e)}
>
  Login
</a>

{
  /* <!-- Modal --> */
}
;<div
  className="modal fade"
  id="LoginModal"
  tabindex="-1"
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
              <input type="email" id="loginEmail" placeholder="E-mail" />
              <i className="icon fas fa-envelope"></i>
              <i className="error error-icon fas fa-exclamation-circle"></i>
            </div>
            <div className="error error-txt">
              Não pode deixar em branco o campo E-mail.
            </div>
          </div>
          <div className="field password">
            <div className="input-area">
              <input type="password" id="loginSenha" placeholder="Password" />
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

          <input type="submit" onClick={e => LoginCheck(e)} value="Login" />
        </form>
      </div>
      <div className="modal-footer"></div>
    </div>
  </div>
</div>

