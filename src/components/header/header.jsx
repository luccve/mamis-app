import React from 'react'
import './style.css'
import Logorosa from '../../assets/LOGOROSA.png'
import Navbar from '../navbar/navbar'

function Header() {
  return (
    <header id="header">
      <a href="/">
        <img id="logo" src={Logorosa} href="/" alt="Logo Mamis" />
      </a>

      <Navbar />
    </header>
  )
}

export default Header
