import Lottie from 'lottie-react';
import React from 'react';
import { Link } from 'react-router';
import { FaRegUser } from "react-icons/fa6"
import { useLocation, useNavigate } from "react-router";

import { AuthContext } from '../Component/Context/AuthContext';
import { toast } from 'react-toastify';
import { auth } from './Faribase.config';
import { use } from 'react';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const SignUp = () => {
      const { userSignUp } = use(AuthContext)
      const navigate = useNavigate();
      const location = useLocation();
      
const provider = new GoogleAuthProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(event.target);
        // const userData = Object.fromEntries(formData.entries());
    const userName = e.target.UserName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = e.target.url.value; 
        
    userSignUp(email, password)
            .then((result) => {
                toast.success('Sign Up successful');
                   navigate(`${location.state ? location.state : '/'}`);
            })
            .catch((error) => {
                console.error('Error signing up:', error);
                toast.error('Sign Up failed' 
                    
                );
            });
        }

         
     
    const HandleGoogleSubmit = () => {
      signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

        
    }
    return (
        <div className=" flex justify-center items-center ">
      {/* <div className="m-auto lg:block hidden ">
        <Lottie className="h-screen w-[70%]" animationData={animation}></Lottie>
      </div> */}
      <div className="w-full  max-w-md p-8 m-auto font-semibold space-y-3 rounded-xl  bg-gray-50 text-gray-800">
        
        <h1 className="text-3xl font-bold text-black">Create an Account</h1>
        <p className='text-gray-400'>Register with Profast</p>
         <FaRegUser />
        <form
          onSubmit={handleSubmit}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Username
            </label>
            <input
              type="text"
              name="UserName"
              placeholder="Username"
              className="w-full px-4 py-3  border-2 rounded-md border-gray-400 bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              fdprocessedid="muszgb"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="username"
              placeholder="Enter your Email"
              className="w-full px-4 py-3 border-2 border-gray-400 rounded-md  dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600"
              fdprocessedid="muszgb"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block dark:text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="url"
              placeholder="Photo URL
"
              className="w-full px-4 py-3 border-2 border-gray-400 rounded-md  dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600"
              fdprocessedid="muszgb"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              minLength="6"
              // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              title="Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
              placeholder="Password"
              className="w-full px-4 py-3 border-2 border-gray-400 rounded-md  dark:bg-gray-50 text-gray-800 focus:dark:border-violet-600"
              fdprocessedid="0a27f9"
            />
            <div className="flex underline mt-1 text-xs text-sky-400">
              <a className="text-[#CAEB66] hover:underline" rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3  text-center rounded-sm text-black font-semibold bg-[#c8f348] hover:border-2 hover:border-gray-500 hover:bg-white hover:text-black"
            fdprocessedid="7chxsk"
          >
            Sign Up
          </button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="text-2xl text-gray-50">Or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={HandleGoogleSubmit}
            aria-label="Login with Google"
            type="submit"
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 bg-gray-300 dark:border-gray-600 focus:dark:ring-violet-600 hover:bg-gray-200 hover:text-black "
            fdprocessedid="u0z66"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Sign Up with Google</p>
          </button>
        </div>
        <div className='flex items-center justify-center'>
           <p className="text-xs text-center sm:px-6 dark:text-gray-600">
          Don't have an account?  
           
        </p> 
        <Link to="/SignIn">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-[#CAEB66] text-[15px] hover:underline"
            >
              Sign In
            </a>
          </Link>
        </div>
        

      </div>
        </div>
         
    );
};

export default SignUp;