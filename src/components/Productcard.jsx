import PropTypes from 'prop-types';
import { AiFillStar, AiOutlineStar, AiOutlineShopping } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart-slice';


const Productcard = ({ img, name, price }) => {

    const dispatch = useDispatch()

    return (
        <div className='border border-gray-200 hover:border-gray-300 hover:scale-105 transition-transform rounded-lg relative'>
            <img src={img} alt={name} />

            <div className='space-y-2 p-4 relative'>
                <div className='text-yellow-400 flex gap-[2px] text-[20px]'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                </div>
                <h3 className='font-medium' >{name}</h3>
                <h3 className='text-2xl font-medium text-red-600'>₹{price}</h3>
                <div className='absolute -top-2 right-2 bg-accent text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer' onClick={() => dispatch(addItem({img, name, price}))} >
                    <AiOutlineShopping />
                </div>
            </div>
        </div>
    )
}

Productcard.propTypes = {
    img : PropTypes.string,
    name : PropTypes.string,
    price : PropTypes.string
}

export default Productcard
