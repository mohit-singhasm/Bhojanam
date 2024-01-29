import { IoClose } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../features/cart-slice';

const CartCardSection = ({ item }) => {

    const dispatch = useDispatch()

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="h-[100px]" src={item.img} alt={item.name} />
                <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-600">{item.quantity} x ₹{item.totalprice}</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <button className='m-2 text-[1.5rem]' onClick={()=>dispatch(removeItem(item))} >-</button>
                <button className='m-2 text-[1.5rem]' onClick={()=>dispatch(addItem(item))}>+</button>
                {/* {item.quantity==1 && <button>
                    <IoClose className=' m-6 text-[1.5rem] text-gray-500 cursor-pointer' />
                </button>} */}
            </div>
        </div>
    )
}

export default CartCardSection