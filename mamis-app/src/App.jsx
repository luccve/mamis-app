import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Faq from "./pages/oquee/faq"
import Historia from "./pages/historia/historia"
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
      </Router>
      <Footer />
    </>
  )
}

export default App
