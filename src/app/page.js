'use client' // If you're using Next.js with 'use client', otherwise remove this line

import React from 'react';
import Login from '@/app/auth/login';
import SignUpUser from './auth/siginup';
import SignUpBus from '@/app/auth/signupbus';
import FogotPassword from '@/app/auth/forgotpassword'
import ResetPassword from '@/app/auth/resetpassword'


export default function Home() {
  return (
    <main className="">
      <Login />
      <SignUpUser/>
      <SignUpBus/>
      <FogotPassword/>
      <ResetPassword/>
    </main>
  );
}

