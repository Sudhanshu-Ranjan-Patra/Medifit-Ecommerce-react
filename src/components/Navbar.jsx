import React from 'react'

function Navbar() {
  return (
    <>
    <div className='flex justify-between items-center  bg-primary-light p-4 shadow-md '>
        <div className="logo w-30 ml-10 sm:ml-20 md:ml-40 ">
            <img src="../images/logo.png" alt="Medifit Logo" className=" " />
        </div>
        <div className="nav-ops hidden md:flex flex-wrap items-center justify-center md:gap-x-6 lg:gap-x-8 sm:gap-x-4 text-primary text-sm md:text-base"> 
            <span className=' cursor-pointer'>Home</span>
            <span className=' cursor-pointer'>Shop</span>
            <span className=' cursor-pointer'>Pages
              <span className='justify-start items-start'> ⌵</span>
            </span>
            <span className=' cursor-pointer'>About</span>
            <span className=' cursor-pointer'>Contact</span>
        </div>
        <div className="nav-search flex gap-x-4 items-center mr-10 sm:mr-20 md:mr-40">
          <span className='cursor-pointer'>
            <img src="../images/search-2.png" alt="search" /></span>
          <span className='cursor-pointer'>
            <img src="../images/cart.png" alt="chat" /></span> 
        </div>
    </div>
    <div className='mobile-nav hidden'>
      <div className=' bg-primary-light text-primary w-40 h-6 items-center pl-2 md:hidden lg:hidden '>
      ➤
      </div>
      <div className="nav-ops-hidden  flex flex-col gap-1 text-primary  bg-primary-light w-40 h-screen items-start justify-start  md:hidden lg:hidden "> 
            <span className=' cursor-pointer ml-5 font-medium   '>Home</span>
            <span className=' cursor-pointer ml-5 font-medium   '>Shop</span>
            <span className=' cursor-pointer ml-5 font-medium   '>Pages
              <span className='justify-start items-start'> ⌵</span>
            </span>
            <span className=' cursor-pointer ml-5 font-medium   '>About</span>
            <span className=' cursor-pointer ml-5 font-medium   '>Contact</span>
      </div>
    </div>
    
    </>
  )
}

export default Navbar;