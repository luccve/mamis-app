import React from 'react'
import '../css/styles.css'
import '../css/quemsomos.css'
import Quemsomos1 from '../assets/startupway.png'
import YouTube from 'react-youtube'

function Quemsomos() {
  return (
    <main className="container-fluid quemsomos align-items-center">
      <section className="row align-items-center">
        <div className="col">
          <div className="card">
            <img
              src={Quemsomos1}
              className="card-img-top"
              alt="Startup way tec premio de primeiro lugar"
            />
            <div className="card-body">
              <p className="card-text">
                No primeiro evento conseguimos conquistar o primeiro lugar no{' '}
                <b>Startup Way .tech.</b>{' '}
              </p>
              <a href="#video" className="btn btn-primary">
                Conheça mais
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <h1 className="title">Quem somos</h1>
          <p>
            Criamos a <b>STARTUP MAMIS</b>, um grupo de alunos de
            desenvolvimento de sistemas da IFPE paulista, juntos idealizamos um
            projeto que visa desburocratizar todo o processo de aleitamento
            materno. Com intuito de conscientizar e possibilitar a doadora a
            saber para onde vai o leite doado.
          </p>
          <p></p>
        </div>
      </section>
      <section className="row align-items-center">
        <div className="col">
          <YouTube id="video" videoId="JrKKaNfaz-U" />
        </div>
      </section>
    </main>
  )
}
export default Quemsomos
