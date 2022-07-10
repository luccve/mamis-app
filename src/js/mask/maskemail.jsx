export default function MaskEmail() {
  var email = document.getElementById('email')
  var emailValidation = document.getElementById('emailValidation')

  validarEmail(email, emailValidation)
}

function validarEmail() {
  if (!email.checkValidity()) {
    emailValidation.innerHTML = 'Digite um E-mail válido | email@example.com'
    emailValidation.style.display = 'block'
    email.style.border = '2px solid red'
  } else {
    let split = email.value.split('@')
    console.log(split)
    if (split[1].indexOf('.') >= 0) {
      emailValidation.style.display = 'none'
      email.style.border = '1px solid rgba(0,0,0,.1)'
    } else {
      emailValidation.innerHTML = 'Digite um E-mail válido | email@example.com'
      emailValidation.style.display = 'block'
      email.style.border = '2px solid red'
    }
  }
}
