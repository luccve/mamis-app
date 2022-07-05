import Header from './components/header/header'
import Footer from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom'
import Routeamento from './routeamento'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routeamento />
      <Footer />
    </BrowserRouter>
  )
}

export default App

