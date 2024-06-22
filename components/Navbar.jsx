import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex justify-start py-4 px-8">
        <li className="mr-6"><a href="#" className="text-white">Home</a></li>
        <li className="mr-6"><a href="#" className="text-white">About</a></li>
        <li className="mr-6"><a href="#" className="text-white">Services</a></li>
        <li><a href="#" className="text-white">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
