import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import BookNow from "@/components/reuseableComponenet/BookNow";


const HeroSection = () => {
  return (
    <div className="home-hero-section">
    <div className=" dark:bg-zinc-900 pt-12 pb-40 px-6 md:px-14 lg:px-24 flex flex-col md:flex-row items-center justify-between text-darkMahron relative  ">
      <div className="flex-1  text-left">
        <h1 className="text-[40px] leading-10 lg:text-6xl font-thin font-raleway text-darkMahron">
          REVEAL YOUR <br />
          BEAUTY WITH
        </h1>

        <h2 className="text-6xl md:text-[80px] font-normal mb-2 font-valky leading-[80px] md:leading-[100px]">
          Glow Scout
        </h2>
        <p className="md:text-lg font-normal font-raleway mb-6 pr-4 w-[300px] md:w-auto">
          &rdquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
          nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus.&rdquo;
        </p>
        <Link href={"auth/user"}>
          <Button
            variant="outline"
            size="lg"
            className=" rounded-full border-2  font-bold px-3 border-darkMahron"
          >
            Sign Up
            <span className="text-sm text-white bg-[#351120]  rounded-full mx-2">
              <ArrowUpRight size={20} color="#fff" />
            </span>
          </Button>
        </Link>
      </div>
      <div className="flex-1 md:flex justify-center rounded-t-full md:justify-end hidden">
      <Image
          src="/images/home/frame.png"
          alt="Woman"
          className="w-10 absolute top-[50px] right-[400px] z-10 hero-image-3"
          width={160}
          height={160}
        />
      <Image
          src="/images/home/circle.png"
          alt="Woman"
          className=" w-[430px]  absolute bottom-10 right-[60px] z-10 hero-circle-image"
          width={460}
          height={460}
        />
        <Image
          src="/images/home/color-hero.png"
          alt="Woman"
          className=" absolute rounded-full bottom-[0px] right-0 z-0"
          width={660}
          height={660}
        />
        <Image
          src="/images/home/hero-1.png"
          alt="Woman"
          className="absolute  bottom-[0px] right-0 z-10 hero-image"
          width={600}
          height={600}
        />
        
      </div>

      <div className="flex-1 flex justify-center md:justify-end md:hidden pt-[300px]">
      <Image
          src="/images/home/hero-mobile.png"
          alt="Woman"
          className=" absolute h-[450px] bottom-[0px]"
          width={300}
          height={300}
        />
      </div>
    <div className="absolute bottom-[20px] md:bottom-4 md:left-[200px] lg:left-[280px] 2xl:left-[600px]  z-20 md:w-[800px] mx-2 md:mx-0 hero-booknow">
    <BookNow />
    </div>
      
    </div>
    
     
     </div>
  );
};

export default HeroSection;
