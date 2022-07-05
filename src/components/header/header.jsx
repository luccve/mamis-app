import React from 'react'
import './style.css'
import Logorosa from '../../assets/LOGOROSA.png'
import Navbar from '../navbar/navbar'
import { Link } from 'react-router-dom'

function Header() {
  const PATH = 'mamis-app'
  return (
    <header id="header">
      <Link to={PATH + '/'}>
        <img id="logo" src={Logorosa} href="/" alt="Logo Mamis" />
      </Link>

      <Navbar />
    </header>
  )
}

export default Header
