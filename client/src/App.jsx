import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Collections from './pages/Collections'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Product from './pages/Product'
import TermsandCondition from './components/TermsandCondition'
import PrivacyPolicy from './components/PrivacyPolicy'
import Disclaimer from './components/Disclaimer'
import ShippingPolicy from './components/ShippingPolicy'
import RefundPolicy from './components/RefundPolicy'
import AddToCart from './components/AddToCart'
import AddressSection from './components/AddressSection'
import AddNewAddress from './components/AddNewAddress'
import PaymentSection from './components/PaymentSection'
import Login from './components/Login'
import SignUp from './components/SignUp'
import ProfileSetup from './components/ProfileSetup'
import CategorySilk from './components/CategorySilk'
import CategoryPaithani from './components/CategoryPaithani'
import CategoryIrkal from './components/CategoryIrkal'
import CategorySolapur from './components/CategorySolapur'
import CategoryTussar from './components/CategoryTussar'
import CategoryNarayanPeth from './components/CategoryNarayanpeth'
import CategoryKanjeevaram from './components/CategoryKanjeevaram'


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/termsandcondition' element={<TermsandCondition />} />
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/shippingpolicy' element={<ShippingPolicy />} />
          <Route path='/refundpolicy' element={<RefundPolicy />} />
          <Route path='/addtocart' element={<AddToCart />} />

          <Route path='/addresssection' element={<AddressSection />} />
          <Route path='/addnewaddress' element={<AddNewAddress />} />
          <Route path='/paymentsection' element={<PaymentSection />} />

          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profilesetup' element={<ProfileSetup />} />

          <Route path='/silksaree' element={<CategorySilk />} />
          <Route path='/paithanisaree' element={<CategoryPaithani />} />
          <Route path='/irkalsaree' element={<CategoryIrkal />} />
          <Route path='/solapursaree' element={<CategorySolapur />} />
          <Route path='/tussarsaree' element={<CategoryTussar />} />
          <Route path='/narayanpethsaree' element={<CategoryNarayanPeth />} />
          <Route path='/kanjeevaramsaree' element={<CategoryKanjeevaram />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

