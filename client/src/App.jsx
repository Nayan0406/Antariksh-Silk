import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

