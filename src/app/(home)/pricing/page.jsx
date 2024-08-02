"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const CheckIcon = () => {
  return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-darkMahron text-white rounded-full w-4 h-4 border-2  border-darkMahron"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
          fill="currentColor"
        />
      </svg>
  );
};
const PlanAndPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);
const data = [
  {icon: <CheckIcon/>, label: "Lorem Ipsum"},
  {icon: <CheckIcon/>, label: "Lorem Ipsum"},
  {icon: <CheckIcon/>, label: "Lorem Ipsum"},
]
  return (
    <div className="mx-auto min-h-screen font-raleway relative px-4">
      
      <div className="flex justify-center items-center min-h-screen">
        <div className="md:p-6 py-6 rounded-lg w-full max-w-3xl h-auto">
        <div className="text-center text-darkMahron pb-5">
        <h2 className="text-4xl md:text-6xl font-normal">  Plans & Pricing </h2>
        <p className="m-2 text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>
          <div className="bg-white border-2 border-darkMahron rounded-lg px-4 py-5 md:px-16">
            <div className="flex justify-center md:justify-end mb-4">
              <div className="flex border-2 border-gray-300 rounded-full p-1">
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-4 py-1 rounded-full ${
                    isMonthly ? "bg-darkMahron text-white" : "text-gray-800"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-4 py-1 rounded-full ${
                    !isMonthly ? "bg-darkMahron text-white" : "text-gray-800"
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>
            <div className="py-4 text-darkMahron grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-5">
              <div className="bg-white p-4 md:border-l border-darkMahron md:border-0 md:border-transparent">
                <h2 className="text-xl md:text-2xl font-semibold">
                  $19 <span className="text-muted-foreground text-base">/month</span>
                </h2>
                <h3 className="text-lg font-bold">Silver</h3>
                <p className="text-lg font-semibold text-darkMahron font-raleway my-2">Unleash the power of automation.</p>
                <div className="list-disc list-inside text-darkMahron mb-4">
                  {
                    data.map((items)=>(
                      <div className="flex justify-start items-start gap-1">
                        <div className="text-sm">{items.icon}</div>
                        <p className="text-sm font-normal">{items.label}</p>
                      </div>
                    ))
                  }
                </div>
                <button className="bg-transparent block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full">
                  Choose Plan
                </button>
              </div>
              <div className="bg-white md:border-l border-darkMahron p-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  $29 <span className="text-muted-foreground text-base">/month</span>
                </h2>
                <h3 className="text-lg font-bold">Gold</h3>
                <p className="text-lg font-semibold text-darkMahron font-raleway my-2">Unleash the power of automation.</p>
                <div className="list-disc list-inside text-darkMahron mb-4">
                {
                    data.map((items)=>(
                      <div className="flex justify-start items-start gap-1">
                        <div className="text-sm">{items.icon}</div>
                        <p className="text-sm font-normal">{items.label}</p>
                      </div>
                    ))
                  }
                </div>
                <button className="bg-transparent block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full">
                  Choose Plan
                </button>
              </div>
              <div className="bg-white md:border-l border-darkMahron p-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  $39 <span className="text-muted-foreground text-base">/month</span>
                </h2>
                <h3 className="text-lg font-bold">Platinum</h3>
                <p className="text-lg font-semibold text-darkMahron font-raleway my-2">Unleash the power of automation.</p>
                <div className="list-disc list-inside text-darkMahron mb-4">
                {
                    data.map((items)=>(
                      <div className="flex justify-start items-start gap-1">
                        <div className="text-sm">{items.icon}</div>
                        <p className="text-sm font-normal">{items.label}</p>
                      </div>
                    ))
                  }
                </div>
                <button className="text-white block md:hidden bg-darkMahron p-2 rounded-lg w-full  ml-3">
                  Selected
                </button>
              </div>
            </div>
            <div className="md:flex hidden md:flex-row justify-center items-center gap-4 md:gap-x-10 xl:gap-x-16 mb-4">
              <button className="bg-transparent text-darkMahron border-2 font-bold border-darkMahron px-4 py-2  rounded-full w-full md:w-1/4">
                Choose Plan
              </button>
              <button className="bg-transparent text-darkMahron border-2 font-bold border-darkMahron px-4 py-2  rounded-full w-full md:w-1/4">
                Choose Plan
              </button>
              <button className="text-white bg-darkMahron px-4 py-2 rounded-full w-full md:w-1/4">
                Selected
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
          <Link href={'/business-dashboard/1'}>
            <button className="py-3 px-8 bg-darkMahron font-bold text-white mt-6 rounded-full">
              Next
            </button>
            </Link>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default PlanAndPricing;
