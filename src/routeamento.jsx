import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Faq from './pages/oquee/faq'
import Historia from './pages/historia/historia'
import Mae from './pages/maeparamae/maeparamae'
import Quemsomos from './pages/quemsomos/quemsomos'
import Comoajudar from './pages/comoajudar/comoajudar'
import Missao from './pages/missao/missao'
import Contato from './pages/contato/contato'
import Mamis from './pages/mamis/mamis'
import Doacao from './pages/doe/doe'
import Cadastro from './pages/cadastro/cadastro'
import ComponentLogin from './pages/componentLogin/componentLogin'

function Routeamento() {
  const PATH = 'mamis-app'

  return (
    <Routes>
      <Route path={PATH + '/'} element={<Faq />}></Route>
      <Route path={PATH + '/FAQ'} element={<Faq />}></Route>
      <Route path={PATH + '/historia'} element={<Historia />}></Route>
      <Route path={PATH + '/maeparamae'} element={<Mae />}></Route>
      <Route path={PATH + '/quemsomos'} element={<Quemsomos />}></Route>
      <Route path={PATH + '/missao'} element={<Missao />}></Route>
      <Route path={PATH + '/comoajudar'} element={<Comoajudar />}></Route>
      <Route path={PATH + '/mamiss'} element={<Mamis />}></Route>
      <Route path={PATH + '/doacao'} element={<Doacao />}></Route>
      <Route path={PATH + '/contato'} element={<Contato />}></Route>
      <Route path={PATH + '/cadastro'} element={<Cadastro />}></Route>
      <Route path={PATH + '/login'} element={<ComponentLogin />}></Route>
    </Routes>
  )
}

export default Routeamento
