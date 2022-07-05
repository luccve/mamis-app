import { Link } from 'react-router-dom'
export default function Login() {
  var largura =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (largura < 600) {
    window.location.reload()
    window.open('/mamis-app/login', '_self')
  }
}
