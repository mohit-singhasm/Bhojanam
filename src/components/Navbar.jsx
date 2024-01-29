import { FcSearch } from 'react-icons/fc'
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai'
import CartcountBadge from './CartcountBadge'
import { GiHamburgerMenu } from "react-icons/gi";
import CartSection from './CartSection';
import { useSelector, useDispatch } from 'react-redux';
import { showCart } from '../features/cart-slice';

function Navbar() {

  // style={{position: 'fixed', zIndex: '9999', inset: '16px', pointerEvents: 'none'}}
  const openCart = useSelector(state => state.cartReducer.openCart)
  const quantity = useSelector(state => state.cartReducer.cartList)
  const dispatch = useDispatch()

  return (
    <>
      {openCart && <CartSection />}
      <div className='fixed z-[999] inset-4 pointer-events-none' ></div>
      <div className='sticky top-0 bg-white z-10'>
        <div className="container hidden lg:block">
          <div className="flex justify-between items-center p-8">
            <h1 className="text-4xl font-medium">Logo</h1>
            <div className="relative w-full max-w-[500px]">
              <input className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full" type="text" placeholder="Search Product..." />
              <FcSearch className='absolute top-0 right-0 mt-4 mr-5 text-xl' />
            </div>
            <div className="flex gap-4">
              <div className='icon__wrapper cursor-pointer'>
                <AiOutlineUser />
              </div>
              <button onClick={() => dispatch(showCart())}>
                <div className='icon__wrapper cursor-pointer relative'>
                  <AiOutlineShoppingCart />
                  <CartcountBadge size='w-[25px] h-[25px]' count={quantity.length} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* for mobile phones */}
      <div className="sticky top-0 bg-white z-10">
        <div className="container p-8 lg:hidden">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <GiHamburgerMenu className='text-3xl' />
              <FcSearch className='text-4xl' />
            </div>
            <h1 className="text-4xl">Logo</h1>
            <div className="flex gap-4 text-[30px]">
              <AiOutlineUser />
              <div className="relative cursor-pointer" >
                <AiOutlineShoppingCart />
                <div className="absolute bg-red-600 text-white text-[14px] w-[20px] h-[20px] -right-3 -top-1 rounded-full grid place-items-center">0
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar