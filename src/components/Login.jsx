import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

   const [isSignInForm, setIsSignInForm] = useState(true);


  const toggleSignInForm = () => {
    // Logic to toggle to sign-up form
    setIsSignInForm(!isSignInForm);
  };


  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg" alt="Banner-logo" />
      </div> 
      <form className='p-12 bg-black absolute w-4/12 my-22 mx-auto right-0 left-0 text-white bg-opacity-70' action="">
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? 'Sign In': 'Sign Up'}</h1>
        {
          !isSignInForm && (
            <input type="text" placeholder='Full Name' className='p-4 my-4 bg-gray-800 w-full rounded-lg'/>
          )
        }
        {
          !isSignInForm && (
            <input type="number" placeholder='10 Digit Phone Number' className='p-4 my-4 bg-gray-800 w-full rounded-lg'/>
          )
        }
        <input type="email" placeholder='Email address' className='p-4 my-4 bg-gray-800 w-full rounded-lg'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-800'/>
        <button className='p-4 my-6 bg-red-700 text-white rounded-lg w-full'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='text-white py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a Registered sign In Now'}</p>
      </form>
    </div>
  )
}

export default Login