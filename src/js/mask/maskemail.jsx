export default function MaskEmail() {
  var email = document.getElementById('email')
  var emailValidation = document.getElementById('emailValidation')

  validarEmail(email, emailValidation)
}

function validarEmail() {
  if (!email.checkValidity() && email.value.length > 0) {
    emailValidation.innerHTML = 'Digite um E-mail válido | email@example.com'
    emailValidation.style.display = 'block'
    email.style.border = '2px solid red'
  } else {
    emailValidation.style.display = 'none'
    email.style.border = '1px solid rgba(0,0,0,.1)'
  }
}