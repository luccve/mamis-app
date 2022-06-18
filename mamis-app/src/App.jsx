import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Faq from "./pages/oquee/faq"
import Historia from "./pages/historia/historia"
import Mae from "./pages/maeparamae/maeparamae"
import Quemsomos from "./pages/quemsomos/quemsomos"
import Comoajudar from "./pages/comoajudar/comoajudar"
import Missao from "./pages/missao/missao"
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function App() {
  return (
    <>
      <Header />
      <Router>
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
      </Router>
      <Footer />
    </>
  )
}

export default App
