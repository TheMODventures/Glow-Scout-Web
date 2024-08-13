import React from "react";
import Container from "../../reuseableComponenet/Container";
import { Button } from "../../ui/button";
import Link from "next/link";
import { Raleway } from 'next/font/google'
const Raleway1 = Raleway({
  weight: '400',
  subsets: ['latin'],
})
const ScotWorkSection = () => {
  return (
    <div className=" flex justify-center items-center py-10 md:py-0 bg-[#FEF5E3] md:h-screen text-center rounded-t-[50px] border font-raleway">
     <div>
        <h5 className={`${Raleway1.className} text-4xl 2xl:text-5xl my-8 mx-5 md:mx-0  pb-5 text-darkMahron`}>
          How Glow Scout Works
        </h5>
        <div className=" px-5 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 gap-2">
          <div className="bg-cream p-4 2xl:p-4  rounded-lg shadow-md w-full  md:w-28 2xl:w-44 2xl:min-h-[350px] md:min-h-[250px] flex justify-between md:flex-col bg-[#F6E9CE]">
            <div className="text-xl md:text-3xl 2xl:text-4xl font-[900] text-darkMahron mb-2">01</div>
            <div className="text-xl 2xl:text-4xl text-darkMahron font-raleway">Sign Up</div>
          </div>
          <div className="bg-cream p-4 2xl:p-4 rounded-lg shadow-md w-full  md:w-28 2xl:w-44 2xl:min-h-[350px] md:min-h-[250px] flex justify-between md:flex-col items-center bg-[#F6E9CE]">
            <div className="text-xl md:text-3xl 2xl:text-4xl font-[900] text-darkMahron mb-2">02</div>
            <div className="text-xl 2xl:text-4xl text-right md:text-center text-darkMahron  font-raleway">
              Select your Beauty Goals
            </div>
          </div>
          <div className="bg-cream p-4 2xl:p-4 rounded-lg shadow-md w-full  md:w-28 2xl:w-44 2xl:min-h-[350px] md:min-h-[250px] flex justify-between md:flex-col items-center bg-[#F6E9CE]">
            <div className="text-xl md:text-3xl 2xl:text-4xl font-[900] text-darkMahron mb-2">03</div>
            <div className="text-xl 2xl:text-4xl text-right md:text-center text-darkMahron font-raleway">
              Select Treatment
            </div>
          </div>
          <div className="bg-cream p-4 2xl:p-4 rounded-lg shadow-md w-full  md:w-28 2xl:w-44 2xl:min-h-[350px] md:min-h-[250px] flex justify-between md:flex-col bg-[#F6E9CE]">
            <div className="text-xl md:text-3xl 2xl:text-4xl font-[900] text-darkMahron mb-2">04</div>
            <div className="text-xl 2xl:text-4xl text-darkMahron  font-raleway">
              Select Spa
            </div>
          </div>
        </div>
        <Link href="/auth/user">
          <Button
            type="submit"
            variant="myCustom"
            size="lg"
            className="rounded-full mt-8 "
          >
            Get Started
          </Button>
        </Link>
    </div>
    </div>
  );
};

export default ScotWorkSection;
