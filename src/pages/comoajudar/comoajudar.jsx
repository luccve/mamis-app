import React from 'react'
import '../css/styles.css'
import '../css/comoajudar.css'
import ajuda from '../assets/comoajudar.png'
import ajuda2 from '../assets/comoajudar2.png'

function Comoajudar() {
  return (
    <main className="container-fluid main">
      <section className="row align-items-center">
        <div className="col">
          <img className="img-fluid" src={ajuda2} alt="Formas de colaborar" />
        </div>
        <div className="col">
          <h1 className="title">Como Apoiar?</h1>
          <p>
            O projeto e desenvolvido por um grupo de estudantes do IFPE junto
            com uma equipe de colaborados voluntários. Por aqui temos um lema
            "Apoiar o mamis é salvar vidas".
          </p>
          <p>
            Funcionando como meio incentivador aproximando o doador de quem vai
            receber a doação, visando dessa maneira alcançar mais doadoras e
            humanizando o processo. Comunicando também de maneira efetiva os
            órgãos receptores dos interessados a doar. Além de disponibilizar
            informações esclarecedoras sobre todo o processo de doação.
          </p>
        </div>
      </section>
      <section className="row align-items-center">
        <div className="col">
          <img className="img-fluid" src={ajuda} alt="Formas de colaborar" />
        </div>
        <div className="col">
          <h1 className="title">Apoiar de toda a forma</h1>
          <p>
            Apesar de ser um projeto que estimula a doação de leite materno toda
            forma de ajuda é bem vinda. Hospitais que fazem a coleta necessitam
            de doação de potes, para saber a melhor opção e aonde encontra-los{' '}
            <a
              target="_blank"
              href="http://rblh.fiocruz.br/como-coletar-o-leite-humano-para-doacao"
            >
              Clique aqui
            </a>
          </p>
        </div>
      </section>
    </main>
  )
}
export default Comoajudar
