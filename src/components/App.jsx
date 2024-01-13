
import { useState } from "react"
import Banner from "./Banner"
import BlogSection from "./BlogSection"
import CartSection from "./CartSection"
import Category from "./Category"
import FeatureSection from "./FeatureSection"
import FeatureSectionBreakFast from "./FeatureSectionBreakFast"
import FeatureSectionFruits from "./FeatureSectionFruits"
import Footer from "./Footer"
import Hero from "./Hero"
import Navbar from "./Navbar"
import NewsLetterSection from "./NewsLetterSection"

const App = () => {
  const [addClass, setAddClass] = useState('hidden')

  const [productDetails, setProductDetails] = useState(
    {
      prodImg: '',
      prodName: '',
      prodPrice: ''
    }
  )

  const showCart = (e) => {
    setAddClass('')
    if (addClass == '') {
      setAddClass('hidden')
    }
  }

  const addToCart = (img, name, price) => {
    setProductDetails({ prodImg: img, prodName: name, prodPrice: price })
  }

  // console.log(productDetails)

  return (
    <main>
      <Navbar press={showCart} />
      <Hero />
      <Category />
      <FeatureSectionFruits addToCart={addToCart} />
      <FeatureSectionBreakFast addToCart={addToCart} />
      <Banner />
      <BlogSection />
      <NewsLetterSection />
      <FeatureSection />
      <Footer />
      <CartSection press={showCart} clss={addClass} productDetails={productDetails} />
    </main>

  )
}

export default App