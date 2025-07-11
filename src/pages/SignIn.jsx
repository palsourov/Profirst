import React from 'react';
import { Link } from 'react-router';

const SignIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const HandleGoogleSubmit = () => {
        }
    return (
         <div className="mt-10 flex items-center justify-center m-auto ">
       <div className="ml-20 lg:block hidden">
          
       </div>
       <div className="w-full max-w-md p-8 m-auto text-white space-y-3 rounded-xl bg-gray-700 dark:text-gray-800">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-full px-4 py-3 border border-gray-50 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-50 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
            />
            <div className="flex hover:underline justify-end text-xs text-[#CAEB66]">
              <a rel="noopener noreferrer" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="block w-full p-3 border border-gray-50 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600 hover:bg-gray-200 hover:text-black "
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
            className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 hover:bg-gray-200 hover:text-black "
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
        <div className="text-xs text-center sm:px-6 dark:text-gray-600">
          <p>Don't have an account?</p>
          <Link to="/SignUP" className="hover:underline mt-1 text-[14px] text-[#CAEB66]">
            Sign up
          </Link>
        </div>
      </div>
    </div>
    );
};

export default SignIn;