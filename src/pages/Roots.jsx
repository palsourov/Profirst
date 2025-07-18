import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';
import { ToastContainer} from "react-toastify";
  

const Roots = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Roots;