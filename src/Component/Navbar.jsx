import React from 'react';
import { Link, NavLink, } from 'react-router';
import { BsArrowUpRightCircleFill } from "react-icons/bs";


const Navbar = () => {



 const  NavList = (
   <>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active bg-[#CAEB66] px-2 py-1 rounded-full ' : '')}>Home</NavLink>
        <NavLink to="/Coverage" className={({ isActive }) => (isActive ? 'active bg-[#CAEB66] px-2  py-1  rounded-full' : '')}>Coverage</NavLink>
        <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active bg-[#CAEB66] px-2  py-1  rounded-full' : '')}>About Us</NavLink>
        <NavLink to="/Pricing" className={({ isActive }) => (isActive ? 'active bg-[#CAEB66] px-2  py-1  rounded-full' : '')}>Pricing</NavLink>
        <NavLink to="/BeARider" className={({ isActive }) => (isActive ? 'active bg-[#CAEB66] px-2 py-1 rounded-full' : '')}>Be a Rider</NavLink>
        
   </>
  )

     return (

        <div className=" h-25 items-center flex bg-base-100 shadow-sm">
<div className='px-10  navbar'>

  <div className="navbar-start  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 font-semibold text-[16px] shadow text-center space-y-2 text-[#303030]">
       {
        NavList
       }
      </ul>
    </div>
    <div className="flex items-center ">
    <img className="w-[40px]" src="/Image/logo.png" alt="" />
    <a className="btn lg:block hidden btn-ghost text-2xl text-[#303030]">Profast</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal gap-x-8 text-[18px]">
      
      {
        NavList
      }
    </ul>
  </div>
  <div className="navbar-end gap-x-3 ">
    <Link to="/SignIn">
      <button className="lg:btn  text-[18px] hover:text-[#CAEB66] lg:hover:bg-[#CAEB66] lg:border-2 lg:border-[#CAEB66] py-6">Sign In</button>
    </Link>

    <button className="lg:btn lg:bg-[#CAEB66] lg:hover:border-2 lg:border-[#CAEB66]  hover:text-[#CAEB66]  hover:bg-transparent py-6  text-[18px]">Be a Rider</button>
    <span className='text-3xl'><BsArrowUpRightCircleFill /></span>
    
  </div>
  </div>
</div>
    );
};

export default Navbar;