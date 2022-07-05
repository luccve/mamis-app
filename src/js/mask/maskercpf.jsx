export default function CPFMask() {
  var cpf = document.getElementById('CPF')
  cpf.value = cpf.value.replace(/\D/g, '')
  cpf.value = cpf.value.replace(/(\d{3})(\d)/, '$1.$2')
  cpf.value = cpf.value.replace(/(\d{3})(\d)/, '$1.$2')
  cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
}
