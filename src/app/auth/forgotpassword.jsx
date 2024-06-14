import React, { useEffect, useState } from 'react';
import { FaFacebook, FaLinkedinIn, FaGoogle, FaRegEnvelope  } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import './login.css'; // Import the CSS file

const FogotPassword = () => {
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
        <h2 className='heading-two'>REVEAL OUR BEAUTY WITH</h2>
        <h1 className="headingOne">Glow Scout</h1>
        <p className='loginPage'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio obcaecati saepe quisquam in quis ab at amet, quod sunt impedit.
        </p>
      </div>
      
      {/* Right side - Login section */}
      <div className='logo-right w-1/2 p-5 bg-white rounded'>
        <div className='py-10 fotgotpassword'>
          <h2 className='login-headin  text-center mb-10'>
          Forgot Password?
          </h2>              
          {/* Login form */}
          <div className='flex flex-col items-center justify-center'>
            <div className='border-bottom-custom  w-3/5 p-2 flex items-center mb-10'>
              <input type="email" name="email" placeholder='Enter Email Address or Phone Number' className='bg-white outline-none text-sm' />
            </div>
            <div className='flex flex-row w-full mb-5 justify-center'>
              <a href="#" className='buttomTwo signUp border-2 flex flex-row justify-center items-center text-white rounded-full px-8 p-10 h-10 py-1 text-xs text-g font-sm'>
              Sign Up new account
              </a> 
              <a href="#" className='button border-2 flex flex-row justify-center items-center text-white rounded-full px-8 p-10 h-10 text-center py-1 text-xs text-g font-sm'>
              Send code
              </a>        
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default FogotPassword;
