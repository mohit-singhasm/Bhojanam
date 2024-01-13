import PropTypes from 'prop-types'

const BlogCard = ({img, comment, title, date}) => {
  return (
    <div className='space-y-4'>
        <img className='rounded-lg hover:scale-105 transition-transform' src={img} alt="post" />
        <div className='text-accent font-medium'>
            <span>{date}</span>
            <span>{comment}</span>
        </div>
        <h3 className='font-bold text-xl'>{title}</h3>
    </div>
  )
}

BlogCard.propTypes = {
    img: PropTypes.string,
    comment: PropTypes.number,
    title: PropTypes.string,
    date: PropTypes.string,
}

export default BlogCard