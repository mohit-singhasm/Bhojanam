
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

  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakFast />
      <Banner />
      <BlogSection />
      <NewsLetterSection />
      <FeatureSection />
      <Footer />
    </main>

  )
}

export default App