import { IoClose } from 'react-icons/io5'
import CartCardSection from './CartCardSection'
import { useSelector, useDispatch } from 'react-redux'
import { showCart } from '../features/cart-slice'


const CartSection = () => {

    const cartList = useSelector((state) => state.cartReducer.cartList)

    const dispatch = useDispatch()

    return (
        <>
            <div id='sdbr' className={`w-full h-screen fixed left-0 top-0 z-20`}>
                <div className='bg-[#0000007d] w-full h-screen' onClick={() => dispatch(showCart())}></div>
                <div className="max-w-full sm:max-w-[400px] w-full h-full bg-white absolute right-0 top-0 p-6 z-40">
                    <button onClick={() => dispatch(showCart())}>
                        <IoClose id='closeCart' className='absolute right-0 top-0 m-6 text-[30px] cursor-pointer' />
                    </button>
                    <h3 className="pt-6 text-lg font-medium text-gray-600 uppercase">Your Cart</h3>
                    <div className="mt-6">
                        {cartList.map((item) => <CartCardSection key={item.id} item={item} />)}
                    </div>
                    <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark mb-4 mt-4">View Cart</button>
                    <button className="bg-accent text-white text-center w-full rounded-3xl py-2 hover:bg-accentDark">CheckOut</button>
                </div>
            </div>
        </>
    )
}

export default CartSection