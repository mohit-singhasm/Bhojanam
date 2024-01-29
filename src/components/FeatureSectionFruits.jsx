import Productcard from "./Productcard"
const data = [
  { id: 0, img: 'src/assets/product__1.webp', name: 'dried Mango', price: '$500' },
  { id: 1, img: 'src/assets/product__2.webp', name: 'Crunchy Crisps', price: '$300' },
  { id: 2, img: 'src/assets/product__3.webp', name: 'Jewel Cranberries', price: '$200' },
  { id: 3, img: 'src/assets/product__4.webp', name: 'Almond Organic', price: '$100' },
]

const FeatureSectionFruits = ({addToCart}) => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
          <h3 className="font-medium text-2xl">Fruits & Vegitables</h3>
          <p className="text-gray-600 mt-2">Buy farm fresh fruits and vegetables online at the best prices</p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
          <button className="feature_btn">Fruits</button>
          <button className="text-gray-600 hover:text-accent">Vegitables</button>
          <button className="text-gray-600 hover:text-accent">Breads & Bakery</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
          <img className="w-full h-full object-cover" src="src/assets/feature__1.webp" alt="banner" />
        </div>
        {data.map(el => <Productcard key={el.id} img={el.img} name={el.name} price={el.price} addToCart={addToCart} />)}
      </div>
    </div>
  )
}

export default FeatureSectionFruits