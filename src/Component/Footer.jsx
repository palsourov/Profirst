import React from 'react';
import { FaSquareFacebook,FaLinkedin,FaGithub   } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

import { NavLink } from 'react-router';

const Footer = () => {
    const link = <>
  <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Coverage</NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Pricing</NavLink>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Be a Rider</NavLink>
  
      </>
    return (
        <footer> 
    <div className="  h-[450px] bg-[#0F0F0F] flex justify-center mt-10  items-center">
      <div className="">
        <div className="flex  items-center justify-center">
          <img className="w-[50px]" src="/Image/logo.png" alt="" />
          <h1 className="text-3xl font-bold  text-white ">Profast</h1>

        </div>
        <div className= "  text-center  text-white">
          

          <p className='mt-5 w-[70%] m-auto '>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
          
        </div>
        

        <div className="flex text-white gap-x-8 mt-8 justify-center">
          {
            link
          }
        </div>
        <div className=" w-full  border-dashed border-2 border-gray-600 max-w-7xl mt-5">

        </div>
        <div className="mt-10  flex gap-10 justify-center ">
            <a href="https://www.facebook.com/share/18VHqwoBjr/" className="text-white text-4xl"><FaSquareFacebook />
            </a>
            <a href="https://www.instagram.com/sourovpal070?igsh=OXZ1d214MHF6OG40" className="text-white text-4xl"><BsInstagram />
            </a>
            <a href="https://www.linkedin.com/in/sourovpal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-white text-4xl"><FaLinkedin />
            </a>
            <a href="https://github.com/palsourov" className="text-white text-4xl"><FaGithub />
            </a>
       </div>
      </div>
    
       
    </div>
    
    </footer>
    );
};

export default Footer;