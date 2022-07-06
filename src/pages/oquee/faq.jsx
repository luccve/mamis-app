import React from 'react'
import '../css/styles.css'
import imagem1 from '../assets/imagem1.png'
import imagem2 from '../assets/imagem2.png'
import imagem3 from '../assets/imagem3.png'
import imagem4 from '../assets/imagem4.png'
import { Link } from 'react-router-dom'

function Faq() {
  const PATH = '/mamis-app'
  return (
    <main className="container-fluid">
      <section className="row align-items-center">
        <div className="col-xs-5 col-md-5 col-sm-12">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <img src={imagem1} className="d-block w-100" alt="LEV" />
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img
                  src={imagem2}
                  className="d-block w-100"
                  alt="Prototipagem"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imagem3}
                  className="d-block w-100"
                  alt="Como funciona"
                />
              </div>
              <div className="carousel-item">
                <img src={imagem4} className="d-block w-100" alt="Chamada" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-xs-7 col-md-7 ">
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <h1 className="title">Principais Perguntas</h1>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Como doar?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  A doação de leite humano passa pelo processo de coleta,
                  processamento e distribuição do leite humano para bebês
                  prematuros internados de baixo peso (menos de 2,5 kg) e com
                  patologias, principalmente do trato gastrointestinal, e que
                  não podem ser alimentados diretamente pelas próprias mães.{' '}
                  <a
                    href="https://rblh.fiocruz.br/como-coletar-o-leite-humano-para-doacao"
                    target={'_blank'}
                  >
                    Clique aqui
                  </a>{' '}
                  para acessar passo a passo da coleta.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Quem pode ser doadora de leite humano?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Algumas mulheres quando estão amamentando produzem um volume
                  de leite além da necessidade do bebê, o que possibilita que
                  sejam doadoras de um banco de leite humano. De acordo com a
                  legislação RDC Nº 171, além de apresentar excesso de leite, a
                  doadora deve ser saudável, não usar medicamentos que impeçam a
                  doação e se dispor a ordenhar e a doar o excedente a um banco
                  de leite humano.{' '}
                  <Link to={PATH + '/mapa'} target={'_blank'}>
                    Consulte
                  </Link>{' '}
                  o hospital mais próximo de você
                </div>
              </div>
            </div>
            {/* TERCEIRA DIV */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Como fazer para receber a visita do BLH na sua casa?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  O primeiro passo para ser atendida pela equipe de coleta é
                  entrar em contato com o BLH mais próximo por telefone. Você
                  receberá todas as orientações necessárias para a coleta e
                  armazenamento do leite humano ordenhado, além de realizar um
                  cadastro de doadora do BLH. Por isso, antes de contatá-los,
                  tenha em mãos os últimos exames realizados no seu pré-natal.
                </div>
              </div>
            </div>
            {/* QUARTA DIV */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  O perigo de amamentar bebês sem orientações (Amamentação
                  Cruzada).
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Muitas mulheres com leite excedente optam por doar diretamente
                  para outro bebê, cuja mãe apresente alguma dificuldade com o
                  aleitamento. No entanto, essa prática, bastante disseminada
                  pelas amas-de-leite no passado não é recomendada.
                  Contraindicado formalmente pelo Ministério da Saúde e pela
                  Organização Mundial da Saúde (OMS), a amamentação cruzada,
                  como é conhecida a prática, traz diversos riscos ao bebê,
                  podendo transmitir doenças infectocontagiosas, sendo a mais
                  grave o HIV/Aids.
                </div>
              </div>
            </div>
            {/* quinta DIV */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  A amamentação imediatamente após o parto é saudável.
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {' '}
                  <b>VERDADE.</b> Alimentar os bebês imediatamente após o
                  nascimento pode reduzir consideravelmente os riscos de
                  mortalidade neonatal, além de contribuir para a recuperação da
                  mulher. Quanto mais cedo acontecer a primeira mamada, maiores
                  as chances de uma amamentação bem-sucedida, além de estimular
                  e fortalecer o vínculo mãe e bebê.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Faq
