import React from 'react'
import '../css/styles.css'
import mae from '../assets/mae_e_filho.jpg'

function Historia() {
  return (
    <main className="container-fluid">
      <section className="row align-items-center">
        <div className="col">
          <img
            id="mae"
            src={mae}
            alt="Imagem ilustrativa de mãe com crianças de colo."
          />
        </div>
        <div className="col">
          <h1 className="title">História</h1>
          <p>
            Nosso projeto começou com 5 alunos de desenvolvimento de sistemas, a
            convite da professora de empreendedorismo, participamos do nosso
            primeiro evento juntos. E na busca da ideia da MAMIS, pensamos em
            muita coisa, e por isso demorou 3 dias até observamos essa
            fragilidade.
          </p>
          <p>
            Felizmente acabou dando certo o suficiente de ganharmos o primeiro
            lugar, depois disso entramos em fase de desenvolvimento da
            tecnologia, e para acelerar entramos em incubação na <b>NINHO.</b> E
            hoje estamos em fase final para o fim da prototipagem.
          </p>
        </div>
      </section>
    </main>
  )
}
export default Historia
