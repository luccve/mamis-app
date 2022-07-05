export default function CheckerFinal() {
  var checkerPasswords = document.getElementById('checkerPasswords')

  if (checkerPasswords.value == 'Senhas são iguais') {
    alert('CADASTRO EFETUADO')
  } else {
    alert('DADOS INVALIDOS!')
  }
}
