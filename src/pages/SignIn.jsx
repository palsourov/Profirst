import Lottie from 'lottie-react';
import React, { use, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import animation from "../assets/Animation/login.json"
import { AuthContext } from '../Component/Context/AuthContext';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { toast } from 'react-toastify';
import { auth } from './Faribase.config';

const SignIn = () => {
     const { UserSignIn } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        UserSignIn(email, password)
            .then((result) => {
                toast.success('Login successful', {
                    position: "top-right",
                }); 
                navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                console.error('Error signing in:', error);
            });

        e.target.reset(); // Reset the form after submission

    }
    const provider = new GoogleAuthProvider();
    const HandleGoogleSubmit = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    toast.success("Google login successful", {
      position: "top-right",
    });
    navigate(`${location.state ? location.state : '/'}`);
  }).catch((error) => {
    toast.error("Google login failed", {
      position: "top-right",
    });
  });
        }
    return (
         <div className=" flex items-center ">
       {/* <div className="ml-20 lg:block hidden">
          <Lottie className="h-screen w-[70%]" animationData={animation}></Lottie>
          
       </div> */}
       <div className="w-full max-w-md p-8  text-gray-700 space-y-3 rounded-xl bg-gray-50 dark:text-gray-800">
         <h1 className='text-3xl font-bold text-black mb-2'>Welcome Back</h1>
         <p>Login with Profast</p>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block font-semibold text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-3 border-2 rounded-md border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block font-semibold text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border-2 rounded-md border-gray-400 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex underline mt-1 text-xs text-[#a4e000]">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 border-2 font-semibold border-gray-400 text-center rounded-sm text-black bg-[#a4e000] hover:bg-white "
          >
            Sign in
          </button>
        </form>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="text-2xl text-gray-50">Or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <button
            aria-label="Login with Google"
            type="submit"
            onClick={HandleGoogleSubmit}
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-600 focus:dark:ring-violet-600 bg-gray-300  hover:bg-gray-200 hover:text-black "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
        </div>

        {/* ✅ Fixed nested <p> problem */}
        <div className="text-xs flex items-center gap-x-1 text-center sm:px-6 dark:text-gray-600">
          <p>Don't have an account?</p>
          <Link to="/SignUp" className="hover:underline  text-[14px] text-[#b9f700]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
    );
};

export default SignIn;