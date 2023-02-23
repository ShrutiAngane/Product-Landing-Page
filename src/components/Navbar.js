import React, { useState } from 'react'
import { Link } from "react-router-dom"
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import menu from '../assets/menu.svg'
import searchDark from '../assets/search-dark.svg'
import cartDark from '../assets/cart-dark.svg'
import menuDark from '../assets/menu-dark.svg'


const Navbar = () => {
  const[hamburger,sethamburger]=useState(false)
  return (
    <>
    <header className='absolute flex flex-row justify-end items-center min-w-full lg:w-[875px] h-[91px] xl:w-[1057px] z-20'>
      <h1 className={`${hamburger?'text-[#737373] text-[20px]':'text-[#FFFFFF] text-[24px]'} font-bold absolute max-[1204px]:left-[30px]`}>Physionic</h1>
      <nav className='hidden lg:flex lg:flex-row absolute lg:h-[91px] xl:w-[800px] lg:w-[641px] justify-between items-center lg:left-[250px]'>
        <ul className='lg:flex-row'>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold xl:p-[25px] lg:p-[15px]'>Home</Link>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold xl:p-[25px] lg:p-[15px]'>Product</Link>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold xl:p-[25px] lg:p-[15px]'>Pricing</Link>
          <Link to='#' className='text-[#FFFFFF] text-[20px] font-semibold xl:p-[25px] lg:p-[15px]'>Contact</Link>
        </ul>
        <button className='w-[190px] h-[52px] text-[#FFFFFF] bg-[#23A6F0] rounded-xl'>Get Quote Now</button>
        </nav>
        <nav className='lg:hidden absolute flex h-[91px] items-center justify-between'>
          <ul className={`${hamburger?'w-[163px]':''} flex`}>
            <Link to='#' className='p-[15px]'><img src={hamburger?searchDark:search} alt='search' className='md:h-[30px] md:w-[30px]'></img></Link>
            <Link to='#' className='p-[15px]'><img src={hamburger?cartDark:cart} alt='cart' className='md:h-[30px] md:w-[30px]'></img></Link>
            <Link to='#' className='p-[15px]'><img src={hamburger?menuDark:menu} alt='menu' className={`md:h-[30px] md:w-[30px]`} onClick={()=>sethamburger((prev)=>!prev)}></img></Link>
          </ul>
        </nav>
    </header>
    <div className='absolute min-w-full h-[300px] z-10'>
      <ul className={`${hamburger?'flex':'hidden'} absolute flex-col items-center bg-[#FFFFFF] min-w-full top-0 pt-[79px]`}>
          <Link to='#' className='text-[#737373] text-[20px] font-semibold p-[10px]'>Home</Link>
          <Link to='#' className='text-[#737373] text-[20px] font-semibold p-[10px]'>Product</Link>
          <Link to='#' className='text-[#737373] text-[20px] font-semibold p-[10px]'>Pricing</Link>
          <Link to='#' className='text-[#737373] text-[20px] font-semibold p-[10px]'>Contact</Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar
