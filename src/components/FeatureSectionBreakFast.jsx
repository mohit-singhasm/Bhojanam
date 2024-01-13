import React from 'react'

import Productcard from "./Productcard"
const data = [
  { id: 0, img: 'src/assets/product__5.webp', name: 'Fresh Tamato', price: '$400' },
  { id: 1, img: 'src/assets/product__2.webp', name: 'Crunchy Crisps', price: '$300' },
  { id: 2, img: 'src/assets/product__3.webp', name: 'Jewel Cranberries', price: '$200' },
  { id: 3, img: 'src/assets/product__4.webp', name: 'Almond Organic', price: '$100' },
]

const FeatureSectionBreakFast = ({addToCart}) => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Breakfast & Dairy</h3>
          <p className="text-gray-600 mt-2">Buy best quality breakfast online from big-basket stop near you.</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Eggs & Dairy</button>
          <button className="text-gray-600 hover:text-accent">Pizza</button>
          <button className="text-gray-600 hover:text-accent">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src="src/assets/feature__2.webp" alt="banner" />
        </div>
        {data.map(el => <Productcard key={el.id} img={el.img} name={el.name} price={el.price} addToCart={addToCart} />)}
      </div>
    </div>
  )
}

export default FeatureSectionBreakFast