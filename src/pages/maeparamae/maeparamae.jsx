import React from 'react'
import '../css/styles.css'
import mae2 from '../assets/maeparamae.png'

function Maeparamae() {
  return (
    <main className="container-fluid">
      <section className="row align-items-center">
        <div className="col">
          <img
            id="maeparamae"
            src={mae2}
            alt="Imagem ilustrativa de mãe com crianças de colo,"
          />
        </div>
        <div className="col">
          <h1 className="title">Mãe para Mãe</h1>
          <p>
            Criamos a ferramenta <b>MÃE PARA MÃE</b>, que busca conscientizar
            uma futura doadora, com informações do lugar de doação e uma pequena
            história que a mãe poderá escrever relatando dificuldades e/ou a
            importância. Esta ferramenta tem o intuito de conscientizar e
            possibilitar a doadora a saber para onde vai o leite doado.
          </p>
        </div>
      </section>
    </main>
  )
}
export default Maeparamae
