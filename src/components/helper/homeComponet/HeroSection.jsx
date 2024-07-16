import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" dark:bg-zinc-900 py-12 px-6 md:px-14 lg:px-24 flex flex-col md:flex-row items-center justify-between text-darkMahron relative isolate ">
      <div className="flex-1  text-left  md:pr-20">
        <h1 className=" text-[40px] leading-10 md:text-6xl font-thin font-raleway text-darkMahron">
          REVEAL YOUR <br />
          BEAUTY WITH
        </h1>

        <h2 className="text-6xl md:text-[80px] font-normal mb-2 font-valky leading-[80px] md:leading-[100px]">
          Glow Scout
        </h2>
        <p className="md:text-lg font-normal font-raleway mb-6 pr -4 w-[300px] md:w-auto">
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
      <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 relative">
        <Image
          src="/images/home/hero-1.png"
          alt="Woman"
          className="rounded-full shadow-lg"
          width={800}
          height={400}
        />
      </div>
    </div>
  );
};

export default HeroSection;
