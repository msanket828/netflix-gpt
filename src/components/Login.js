import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn]=useState(false);

  const handleSignOrSignup=()=> {
    setIsSignIn(!isSignIn);
  }
  return (
    <div className="">
      <Header />
      <div className="fixed top-0 left-0 min-h-screen -z-10 w-full">
        <img
          className="w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="hero image"
        />
      </div>
      {/* ---------------------------------- form ---------------------------------- */}
        {/* ------------------------------ sign in form ------------------------------ */}
        <form className={`${isSignIn ? 'bg-black px-14 py-8 max-w-md mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-opacity-90':'hidden'}`}>
          <div className="">
            <h2 className="text-2xl font-bold capitalize mb-10">Sign in</h2>
            <input
              type="text"
              name=""
              id=""
              className="bg-stone-700 text-white p-2 w-full mb-6 text-lg focus:outline-none"
              placeholder="Email or Phone number"
            />
            <input
              type="password"
              name=""
              id=""
              className="bg-stone-700 text-white p-2 w-full mb-10 text-lg focus:outline-none"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full bg-red-600 py-3 font-bold capitalize"
            >
              Sign in
            </button>
            <p className="mt-10">
              New to Netflix? <span className="cursor-pointer font-bold" onClick={handleSignOrSignup}>Sign up now.</span>
            </p>
          </div>
        </form>
        {/* ------------------------------ sign up form ------------------------------ */}
        <form className={`${!isSignIn ? 'bg-black px-14 py-8 max-w-md mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white bg-opacity-90':'hidden'}`}>
          <div className="">
            <h2 className="text-2xl font-bold capitalize mb-10">Sign Up</h2>
            <input type="text" name="" id="" 
              className="bg-stone-700 text-white p-2 w-full mb-6 text-lg focus:outline-none"
              placeholder="Email Full Name"
            />
            <input
              type="text"
              name=""
              id=""
              className="bg-stone-700 text-white p-2 w-full mb-6 text-lg focus:outline-none"
              placeholder="Email or Phone number"
            />
            <input
              type="password"
              name=""
              id=""
              className="bg-stone-700 text-white p-2 w-full mb-10 text-lg focus:outline-none"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full bg-red-600 py-3 font-bold capitalize"
            >
              Sign Up
            </button>
            <p className="mt-10">
              Already have an account! <span className="cursor-pointer font-bold" onClick={handleSignOrSignup}>Sign In now.</span>
            </p>
          </div>
        </form>
    </div>
  );
};

export default Login;
