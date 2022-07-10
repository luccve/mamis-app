import React from 'react'
// import '../css/styles.css'
import '../css/missao.css'
import MissaoPNG from '../assets/quemsomos.png'
import MissaoPNG2 from '../assets/imagem4.png'

function Missao() {
  return (
    <main className="container-fluid conteudo">
      <section className="row align-items-center ">
        <div className="col card">
          <img
            src={MissaoPNG}
            className="card-img-top img-fluid"
            alt="Diferencial"
          />
          <div className="card-body">
            <p className="card-text">
              A mamis busca ser não só uma fonte de informação mais de conversão
              real de novas doadoras de leite materno.
            </p>
            <p className="card-text">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Leia mais...
              </button>{' '}
            </p>
          </div>
        </div>

        <div className="col card">
          <img
            src={MissaoPNG2}
            className="card-img-top img-fluid"
            alt="Vamos juntos salvar vidas!"
          />
          <div className="card-body">
            <p className="card-text">
              Temos o objetivos de alcançar as mães lactantes e as que tem
              pretensão de se tornarem pelo...
            </p>
            <p className="card-text">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop2"
              >
                Leia mais...
              </button>
            </p>
          </div>
        </div>
      </section>

      <section className="row align-items-center">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Diferencial do nosso projeto
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                A mamis busca ser não só uma fonte de informação mais de
                conversão real de novas doadoras de leite materno. Faremos o
                primeiro contato com elas e encaminharemos a doadora já com
                todos os documentos necessários para o banco de leite. Dentro de
                nossa plataforma inserimos ferramentas que ajudaram no
                desenvolvimento dos bebês baseadas na opinão de especialistas.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* segundo modal */}
        <div
          className="modal fade"
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel2">
                  Objetivo do nosso projeto
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Temos que por objetivo alcançar as mães lactantes e as que tem
                pretensão de se tornarem pelo fato de estarem no período
                gestacional. Com o uso de ferramentas integradas como horários
                de sono do bebê, diário do bebê, fases de desenvolvimento, álbum
                de fotos, cronômetro do e leite e muito mais.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Entendido
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Missao
