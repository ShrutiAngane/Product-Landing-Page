import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className='absolute flex md:flex-row justify-between items-center md:h-[91px] md:w-[1057px]'>
      <h1 className='text-[#FFFFFF] text-[24px] font-bold absolute'>Physionic</h1>
      <nav className='hidden md:flex md:flex-row absolute md:h-[91px] md:w-[800px] justify-between items-center md:left-[250px]'>
        <ul className='flex flex-col md:flex-row'>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold p-[25px]'>Home</Link>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold p-[25px]'>Product</Link>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold p-[25px]'>Pricing</Link>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold p-[25px]'>Contact</Link>
        </ul>
        <button className='w-[190px] h-[52px] text-[#FFFFFF] bg-[#23A6F0] rounded-lg'>Get Quote Now</button>
        </nav>
        
      
    </header>
  )
}

export default Navbar
