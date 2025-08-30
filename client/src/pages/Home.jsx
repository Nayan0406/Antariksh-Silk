import React from 'react'
import HomeSection from '../components/HomeSection'
import ScrollSection from '../components/ScrollSection'
import HomeProduct from '../components/HomeProduct'
import OurCollection from '../components/OurCollection'
import FeedbackSection from '../components/FeedbackSection'
import SubscribeSection from '../components/SubscribeSection'

const Home = () => {
  return (
    <div>
      <HomeSection />
      <ScrollSection />
      <HomeProduct />
      <OurCollection />
      <FeedbackSection />
      <SubscribeSection />
    </div>
  )
}

export default Home