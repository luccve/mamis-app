import React from 'react';
import Faq from "../../pages/oquee/faq" 
import Historia from "../../pages/historia/historia"
import Mae from "../../pages/maeparamae/maeparamae"
import Quemsomos from "../../pages/quemsomos/quemsomos"
import Comoajudar from "../../pages/comoajudar/comoajudar"
import Missao from "../../pages/missao/missao"
import Contato from "../../pages/contato/contato"
import Mamis from "../../pages/mamis/mamis"
import Doacao from "../../pages/doe/doe"
import Cadastro from '../../pages/cadastro/cadastro';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
// import { Container } from './styles';

function Routeamento() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Faq />}></Route>
        </Routes>
        <Routes>
            <Route path="/FAQ" element={<Faq />}></Route>
        </Routes>
        <Routes>
            <Route path="/historia" element={<Historia />}></Route>
        </Routes>
        <Routes>
            <Route path="/maeparamae" element={<Mae />}></Route>
        </Routes>
        <Routes>
            <Route path="/quemsomos" element={<Quemsomos />}></Route>
        </Routes>
        <Routes>
            <Route path="/missao" element={<Missao />}></Route>
        </Routes>
        <Routes>
            <Route path="/comoajudar" element={<Comoajudar />}></Route>
        </Routes>
        <Routes>
            <Route path="/mamiss" element={<Mamis />}></Route>
        </Routes>
        <Routes>
            <Route path="/doacao" element={<Doacao />}></Route>
        </Routes>
        <Routes>
            <Route path="/contato" element={<Contato />}></Route>
        </Routes>
        <Routes>
            <Route path="/cadastro" element={<Cadastro />}></Route>
        </Routes>
    </Router>
    )
}

export default Routeamento;