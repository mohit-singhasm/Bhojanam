import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import CartCardSection from './CartCardSection'


const CartSection = ({press, clss, productDetails}) => {

// let [cart, setCart] = useState([])

// setCart((prevValue)=>{
//     return [...prevValue, productDetails]
// })

// console.log(cart)

    return (
        <>
            <div id='sdbr' className={`bg-[#0000007d] w-full h-screen fixed left-0 top-0 z-20 ${clss}`} >
                <div className="max-w-full sm:max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6">
                    <IoClose id='closeCart' className='absolute right-0 top-0 m-6 text-[30px] cursor-pointer' onClick={(e) => {
                        // console.log(e)
                         e.stopPropagation();
                        press()
                        }} />
                    <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
                    <div className="mt-6">
                        <CartCardSection productDetails={productDetails} />
                        {}
                    </div>
                    <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mb-4 mt-4">View Cart</button>
                    <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">CheckOut</button>
                </div>
            </div>
        </>
    )
}

export default CartSection