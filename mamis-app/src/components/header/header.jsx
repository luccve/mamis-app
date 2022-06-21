import React from 'react'
import './style.css'
import Logorosa from '../../assets/LOGOROSA.png'
import Navbar from '../navbar/navbar'

function Header() {

 

  return (
    <header id="header">
      <img id="logo" src={Logorosa} alt="Logo Mamis" />

      <Navbar />

    </header>
  )
}

export default Header