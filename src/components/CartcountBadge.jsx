import PropTypes from "prop-types";


const CartcountBadge = ({size, count}) => {
  return (
  count>0 && <div className = {`absolute bg-red-600 text-white text-[14px] ${size} -right-3 -top-1 rounded-full grid place-items-center`}>{count}</div>
  )
}

export default CartcountBadge

CartcountBadge.propTypes = {
    size: PropTypes.string
}