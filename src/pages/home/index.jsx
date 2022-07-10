import React from 'react'
import './home.css'
import MapaIMG from '../../assets/mapa.svg'
import LeiteIMG from '../../assets/doe.svg'
import FormIMG from '../../assets/form.svg'
import { Link } from 'react-router-dom'

function home() {
  return (
    <main className="HOME">
      <section className="box">
        <div className="box-text">
          <h1>
            A startup Mamis vem para facilitar a doação a custo de cliques.
          </h1>

          <Link to="doacao">
            <i className="fas fa-heart"> Doe</i>
          </Link>
        </div>
        <div className="box-img">
          <img
            src={LeiteIMG}
            alt="Figura de uma profissional segunrado leite materno doado"
          />
        </div>
      </section>
      <section className="box">
        <div className="box-text">
          <h1>Encontre rapidamente o Banco de leite mais proximo de você.</h1>

          <Link to="mapa">
            <i className="fas fa-map"> Acesse o mapa.</i>
          </Link>
        </div>
        <div className="box-img">
          <img src={MapaIMG} alt="Figura de um Mapa" />
        </div>
      </section>
      <section className="box">
        <div className="box-text">
          <h1>Saiba todo o processo e acompanhe todo o encaminhamento.</h1>

          <Link to="cadastro">
            <i className="fas fa-check-double"> Faça seu cadastro.</i>
          </Link>
        </div>
        <div className="box-img">
          <img src={FormIMG} alt="Figura de um Mapa" />
        </div>
      </section>
    </main>
  )
}

export default home
