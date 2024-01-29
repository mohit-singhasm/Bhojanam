

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <div className="border-t border-gray-300 mt-16">
        <div className="container text-center text-gray-500 py-4">
        &copy; Copyright @Mohit_Singh {year}.
        </div>
    </div>
  )
}

export default Footer