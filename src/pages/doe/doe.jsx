import React from 'react'
import '../css/doe.css'

function Doe() {
  return (
    <main className="container-fluid">
      <div className="row align-items-center">
        <div className="col-12">
          <h2>
            A mãe lactante além de estar saudável deve ter em mãos a
            documentação listada abaixo para a realização do cadastro.{' '}
          </h2>
          <table className="table table-striped  table-bordered table-dark">
            <thead>
              <tr>
                <th scope="col">Medicamentos</th>
                <th scope="col">Doenças</th>
                <th scope="col">Estilo de vida</th>
                <th scope="col">Cirurgias</th>
              </tr>
            </thead>
            <tbody>
              <td scope="row">Toma algum remédio?</td>
              <td scope="row">Já teve alguma doença infeciosa?</td>
              <td scope="row">Fez tatuagem nos últimos 6 meses?</td>
              <td scope="row">Fez alguma cirurgia nos ultimos 6 meses?</td>
            </tbody>
            <tbody>
              <td scope="row">Qual é a dosagem?</td>
              <td scope="row">Já teve Hepatite?</td>
              <td scope="row">Toma café?</td>
              <td scope="row">
                Recebeu transfusão de sangue nos ultimos 5 anos?
              </td>
            </tbody>
            <tbody>
              <td scope="row">É caseiro ou homeopático?</td>
              <td scope="row"></td>
              <td scope="row">É fumante?</td>
              <td scope="row">A senhora fez pré-natal?</td>
            </tbody>
          </table>
          <div className="col-12">
            <h1>
              Para prosseguir com a doação é preciso fazer{' '}
              <a href="/login">Login</a> ou fazer{' '}
              <a href="/Cadastro">Cadastro</a>
            </h1>
          </div>
          <div className="col-12">
            <h1>
              Para mais informações sobre todo o processo{' '}
              <a
                target="_blank"
                href="https://rblh.fiocruz.br/doacao-de-leite-humano-0"
              >
                Acesse.
              </a>
            </h1>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Doe
