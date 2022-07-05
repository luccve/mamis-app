export default function Checker(event) {
  var senha = document.getElementById('password')
  var checkerPasswords = document.getElementById('passwordValidation')
  var senha2 = document.getElementById('passwordchecker')
  var nome = document.getElementById('firstname')
  var nome2 = document.getElementById('lastname')

  nome.value = nome.value.replace(/\d/g, '')
  nome2.value = nome2.value.replace(/\d/g, '')

  if (senha.value == senha2.value && senha.value != '') {
    checkerPasswords.innerHTML = 'Senhas são iguais'
    checkerPasswords.style.color = 'green'
    checkerPasswords.style.opacity = '1'
    senha2.style.border = '2px solid green'
    senha.style.border = '2px solid green'
  } else if (senha.value != senha2.value && senha.value != '') {
    checkerPasswords.innerHTML = 'Senhas não são iguais'
    checkerPasswords.style.color = 'red'
    checkerPasswords.style.opacity = '1'
    senha2.style.border = '2px solid red'
    senha.style.border = '2px solid red'
  }
}
