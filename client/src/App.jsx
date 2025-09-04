import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Product from './pages/Product'
import TermsandCondition from './components/TermsandCondition'
import PrivacyPolicy from './components/PrivacyPolicy'
import Disclaimer from './components/Disclaimer'
import ShippingPolicy from './components/ShippingPolicy'
import RefundPolicy from './components/RefundPolicy'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/termsandcondition' element={<TermsandCondition />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/shippingpolicy' element={<ShippingPolicy />} />
          <Route path='/refundpolicy' element={<RefundPolicy />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

