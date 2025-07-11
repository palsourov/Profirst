import React from 'react';
import { FaSquareFacebook,FaLinkedin,FaGithub   } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

import { NavLink } from 'react-router';
import Logo from './logo';

const Footer = () => {
    const link = <>
  <NavLink to="/" className={({ isActive }) => (isActive ? 'active      text-[#CAEB66] p-2 rounded-full border-b-2 border-[#CAEB66]' : '')}>Home</NavLink>
          <NavLink to="/Coverage" className={({ isActive }) => (isActive ? 'active text-[#CAEB66] px-2  py-1 rounded-full border-b-2 border-[#CAEB66]' : '')}>Coverage</NavLink>
          <NavLink to="/AboutUs" className={({ isActive }) => (isActive ? 'active text-[#CAEB66] px-2  py-1 rounded-full border-b-2 border-[#CAEB66]' : '')}>About Us</NavLink>
          <NavLink to="/Pricing" className={({ isActive }) => (isActive ? 'active text-[#CAEB66] px-2  py-1 rounded-full border-b-2 border-[#CAEB66]' : '')}>Pricing</NavLink>
          <NavLink to="/BeARider" className={({ isActive }) => (isActive ? 'active text-[#CAEB66] px-2  py-1 rounded-full border-b-2 border-[#CAEB66]' : '')}>Be a Rider</NavLink>
  
      </>
    return (
        <footer> 
    <div className="  h-[450px] bg-[#0F0F0F] flex justify-center mt-10  items-center">
      <div className="">
        <div className="flex text-white  items-center justify-center">
          <>
             <Logo></Logo>
          </>

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