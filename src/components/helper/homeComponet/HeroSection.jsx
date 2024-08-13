import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import BookNow from "@/components/reuseableComponenet/BookNow";
import { Raleway } from 'next/font/google'
const Raleway1 = Raleway({
  weight: '300',
  subsets: ['latin'],
})
 
const HeroSection = () => {

  return (
    <div className="relative h-full  lg:h-[90vh] flex flex-col md:flex-row">
      <div className="flex-1 min-h-max text-center lg:text-left lg:pl-12  flex flex-col justify-center xl:pt-24 xl:pb-44  pb-10 items-start px-4 lg:px-0 ">
        <h1 className={`mt-6 ${Raleway1.className}  md:mt-0 text-[40px] leading-10 lg:leading-[45px] text-start lg:text-5xl xl:text-5xl 2xl:text-8xl font-[100]  text-darkMahron 2xl:mb-6`}>
          REVEAL YOUR <br />
          BEAUTY WITH
        </h1>
        <h2 className="text-[56px] text-start lg:text-6xl xl:text-[62px] 2xl:text-[125px] font-medium font-valky text-darkMahron leading-tight xl:leading-[70px] 2xl:mb-6">
          Glow Scout
        </h2>
        <p className="text-base text-start max-w-[500px] 2xl:max-w-[700px] md:text-base lg:text-lg xl:text-lg 2xl:text-2xl font-normal font-raleway mb-4 text-darkMahron ">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
          ut nibh faucibus."
        </p>
        <Link href={"auth/user"}>
          <button className="bg-transparent rounded-full border-[1.5px] font-normal 2xl:px-6 2xl:py-2 px-3 py-1 text-lg 2xl:text-2xl border-darkMahron">
            Sign Up
            <span className="text-sm text-white p-1 bg-[#351120] rounded-full mx-2 inline-flex items-center justify-center">
              <ArrowUpRight size={15} color="#fff" />
            </span>
          </button>
        </Link>
      </div>
      {/* <div className="w-full max-w-[10%]"></div> */}
      <div className="w-full md:w-1/2  max-w-[550px] 2xl:max-w-[750px]  h-[500px] md:h-[600px] lg:h-auto relative">
        <Image
          src="/images/home/Hero.png"
          alt="Woman"
          className="w-full h-full"
          layout="fill"
        />
      </div>
      <div className="px-3 absolute bottom-4 lg:bottom-8  left-1/2 transform -translate-x-1/2 z-20 w-full md:max-w-[800px] 2xl:max-w-[1100px]">
        <BookNow />
      </div>
    </div>
  );
};

export default HeroSection;
