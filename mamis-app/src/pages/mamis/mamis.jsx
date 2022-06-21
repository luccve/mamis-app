import React from 'react';
import '../css/styles.css';
import imagem2 from '../assets/imagem2.png'

function Mamis() {
  return (
        <main className="container-fluid">
        
            <section className="row align-items-center">
                <div className='col-xs-5 col-md-5 col-sm-12'>
                    <img className='img-fluid' src={imagem2} alt="Imagem ilustrativa de mãe com crianças de colo."/>
                </div>
                <div className='col-xs-5 col-md col-sm-12'>
                    <h1 className="title">Mamis</h1>
                    <p>
                        Somos um plataforma integrada tanto no formato web como mobile. Ainda estamos em fase de
                        desenvolvimento. Nosso principal
                        objetivo é fornece um canal direto de comunicação entre possíveis doadoras de leite materno e os bancos de
                        leite.
                    </p>
                    <p>
                        Funcionando como meio incentivador aproximando o doador de quem vai receber a doação, visando dessa maneira
                        alcançar mais doadoras e humanizando o processo. Comunicando também de maneira efetiva os órgãos receptores dos
                        interessados a doar. Além de disponibilizar informações esclarecedoras sobre todo o processo de doação.
                    </p>
                </div>
            </section>

        </main>
  )
}
export default Mamis;