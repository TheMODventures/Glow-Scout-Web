'use client';

import React from 'react'
import { Input } from "@/components/ui/input"
import { useRef } from 'react';

const Upload = ({text}) => {

    const Add = () => {
   
        return (
          <svg
            className="w-8 h-8 p-2 text-darkMahron border-2 border-darkMahron rounded-lg mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        );
      };


    const filePickerRef = useRef();
  return (
    <div className="flex flex-col justify-center items-center text-center rounded-xl bg-[#F0F0F0] md:h-[35%] h-[40%] w-full border-2 border-darkMahron">
            <div className="mb-2 cursor-pointer" onClick={() => filePickerRef.current.click()}>
            <Input name="picture" id="picture" type="file" ref={filePickerRef} className="hidden"/>  
              <Add />
            </div>
            <p className="text-sm md:ext-base font-raleway font-semibold text-darkMahron">
              {text}
            </p>
          </div>
  )
}

export default Upload
