import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className=" flex justify-between items-center  bg-primary-light p-4 shadow-md ">
        <Link to='/' className="logo w-30 ml-10 sm:ml-20 md:ml-40 ">
          <img src="../images/logo.png" alt="Medifit Logo" className=" " />
        </Link>
        <div className="nav-ops hidden md:flex flex-wrap items-center justify-center md:gap-x-6 lg:gap-x-8 sm:gap-x-4 text-primary text-sm md:text-base">
          <Link to="/home" className=" cursor-pointer">Home</Link>
          <Link to="/shop" className=" cursor-pointer">Shop</Link>
          <Link to="/pages" className=" cursor-pointer">
            Pages
            <span className="justify-start items-start"> ⌵</span>
          </Link>
          <Link to="/about" className=" cursor-pointer">About</Link>
          <Link to="/contact" className=" cursor-pointer">Contact</Link>
        </div>
        <div className="nav-search flex gap-x-4 items-center mr-10 sm:mr-20 md:mr-40">
          <Link className="cursor-pointer">
            <img src="../images/search-2.png" alt="search" />
          </Link>
          <Link className="cursor-pointer">
            <img src="../images/cart.png" alt="chat" />
          </Link>
        </div>
      </div>
      <div className="nav-ops flex md:hidden pl-15 pr-15 pt-2 text-primary text-sm justify-between items-center bg-primary">
          <Link to="/home" className=" cursor-pointer">Home</Link>
          <Link to="/shop" className=" cursor-pointer">Shop</Link>
          <Link to="/pages" className=" cursor-pointer">
            Pages
            <span className="justify-start items-start"> ⌵</span>
          </Link>
          <Link to="/about" className=" cursor-pointer">About</Link>
          <Link to="/contact" className=" cursor-pointer">Contact</Link>
        </div>
    </>
  );
}

export default Navbar;
