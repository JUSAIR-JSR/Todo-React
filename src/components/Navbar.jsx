import {} from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-violet-900 text-white py-4">
        <div className="logo">
            <span className='font-bold text-2xl mx-8'>i Task</span>
        </div>
      <ul className="flex gap-8 mx-8 text-lg">
        <li className='cursor-pointer hover:font-bold transition-all duration-600'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-600'>Your Task</li>
      </ul>
    </nav>
  )
}

export default Navbar
