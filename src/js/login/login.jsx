import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  var largura =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth
  const login = document.querySelector('#login')
  if (largura < 600) {
    console.log(login)
    // window.location.reload()
    // window.open('/mamis-app/login', '_self')
  }
}
