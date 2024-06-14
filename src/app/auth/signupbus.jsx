
import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope  } from 'react-icons/fa';
import { MdColorLens, MdLockOutline } from 'react-icons/md';
import './login.css'; // Import the CSS file
const SignUpBus = () => {
    
    useEffect(() => {
        // Dynamically load Google Fonts Raleway
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
      }, []);
    
      const [showPassword, setShowPassword] = useState(false);
    
      const handleClickShowPassword = () => setShowPassword(!showPassword);
      const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <div className='login-bod w-full h-full flex flex-row items-center justify-center min-h-screen'>
    {/* Left side - Signup section */}
    <div className='wareperleftside'>
      <h2 className='heading-two'>Sign Up as Business</h2>
      <h1 className="headingOne">Glow Scout</h1>
      <p className='loginPage'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio obcaecati saepe quisquam in quis ab at amet, quod sunt impedit.
      </p>
    </div>
    
    {/* Right side - Login section */}
    <div className='logo-right w-1/2 p-5 bg-white rounded'>
      <div className='py-10'>
        <h2 className='login-headin  text-center mb-3'>
        Sign Up as User
        </h2>              
        {/* Login form */}
        <div className='flex flex-col items-center justify-center'>

        <p className="font-raleway brand-color text-16 font-normal leading-18.78 text-left bg-custom-colo mb-3">- or -</p>
          {/* button section */}
          <div className='w-3/5 flex flex-row  mb-3 mt-7 justify-center'>
            <a href="#" className='buttomTwo w-full border-1 text-white text-xs p text-g rounded-1xl px-1 py-1 flex flex-row justify-center items-center shadow-custom'>
              <span className='mr-2 h-6 w-6'> <FaGoogle className='mr-2 h-6 w-6'/> </span>Sign in with Google 
            </a> 
            <a href="#" className='buttomTwo w-full border-1 text-xs text-g text-white rounded-1xl px-1 py-1 flex flex-row justify-center items-center ml-3 shadow-custom'>
              <span className='mr-2 h-6 w-6'> <FaFacebook className='mr-2 h-6 w-6'/> </span> Sign up in Facebook 
            </a>        
          </div>
           
          <div className='border-bottom-custom  w-3/5 p-2 flex items-center mb-5'>
            <input type="name" name="name" placeholder='Business Name' className='bg-white outline-none text-sm' />
          </div>
          <div className='border-bottom-custom  w-3/5 p-2 flex items-center mb-5'>
            <input type="email" name="email" placeholder='Business Email Address' className='bg-white outline-none text-sm' />
          </div>
          <div className='border-bottom-custom  w-3/5 p-2 flex items-center'>
            <input type="password" name="password" placeholder='Password' className='bg-white outline-none text-sm flex-1' />
          </div>

          <div className="Forgot-password m-4 w-64">
            <div className='w-full flex flex-row items-start justify-start ml-0 text-left'>
              <label className='text-xs text-g w-full'>
              Are you a user?<a href="#" style={{color:'#351120'}} className="text-xs w-full font-bold ">Sign Up here</a>       
              </label>
            </div>
          </div>


          <div className='flex flex-row w-full mb-5 justify-center'> 
            <a href="#" className='button border-2 flex flex-row justify-center items-center text-white rounded-full px-8 p-10 h-10 text-center py-1 text-xs text-g font-sm'>
            Get Started
            </a>        
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default SignUpBus;
