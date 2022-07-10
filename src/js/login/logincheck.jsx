export default function LoginCheck() {
  var email = document.getElementById('loginEmail')
  var senha = document.getElementById('loginSenha').value

  if (email.value && senha == null) {
    alert('Preencha os campos corretamente')
  } else if (!email.checkValidity()) {
    alert('Coloque um email correto')
  }
}
