import { IoClose } from 'react-icons/io5'

const CartCardSection = ({productDetails}) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
                <img className="h-[100px]" src={productDetails.prodImg} alt={productDetails.prodName} />
                <div>
                    <h3 className="font-medium">{productDetails.prodName}</h3>
                    <p className="text-gray-600">1 x {productDetails.prodPrice}</p>
                </div>
            </div>
            <IoClose className=' m-6 text-[1.5rem] text-gray-500 cursor-pointer' />
        </div>
    )
}

export default CartCardSection