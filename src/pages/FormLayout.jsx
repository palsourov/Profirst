import React from 'react';
import { Link, Outlet } from 'react-router';
import Logo from '../Component/Logo'

const FormLayout = () => {
    return (
         <>
         <div className='lg:ml-20 lg:mt-11  ml-10 mt-5'>
              <Link to='/'>
                 <Logo />
             </Link>
         
         </div>
        <div className='flex gap-x-10 m-auto lg:mx-50  mx-2 justify-center items-center '>
          
          <div className='lg:w-1/2 w-full'>
             
              <Outlet />
          </div>
          <div className='lg:w-1/2 mt-20 ml-30'>
              <img className='max-w-sm lg:block hidden rounded-lg shadow-2xl' src="/Image/authImage.png" alt="" />
          </div>

        </div>
        </>
        

    );
};

export default FormLayout;