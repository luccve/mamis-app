export default function MaskPhone(event) {
  var telefone = document.getElementById('telefone')
  var valor =
    document.getElementById('telefone').attributes[0].ownerElement['value']
  var retorno = valor.replace(/\D/g, '')
  retorno = retorno.replace(/^0/, '')
  if (retorno.length > 10) {
    retorno = retorno.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3')
  } else if (retorno.length > 5) {
    if (retorno.length == 6 && event.code == 'Backspace') {
      // necessário pois senão o "-" fica sempre voltando ao dar backspace
      return
    }
    retorno = retorno.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3')
  } else if (retorno.length > 2) {
    retorno = retorno.replace(/^(\d\d)(\d{0,5})/, '($1) $2')
  } else {
    if (retorno.length != 0) {
      retorno = retorno.replace(/^(\d*)/, '($1')
    }
  }

  telefone.addEventListener('blur', function (event) {
    if (retorno.length > 13) {
      document.getElementById('telefone').attributes[0].ownerElement['value'] =
        retorno

      telefone.style.border = '1px solid rgba(0,0,0,.1)'
      telefone.placeholder = '(xx) xxxxx-xxxx (WhatsApp)'
    } else {
      document.getElementById('telefone').attributes[0].ownerElement['value'] =
        ''
      telefone.placeholder = 'Adicione um WhatsApp válido'
      telefone.style.border = '2px solid red'
    }
  })
}
