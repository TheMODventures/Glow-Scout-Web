import React from "react";
import Image from "next/image";
import { Raleway } from "next/font/google";
const Raleway1 = Raleway({
  weight: "400",
  subsets: ["latin"],
});
const AboutGlow = () => {
  return (
    <div className=" bg-darkMahron md:h-screen text-lighttext flex flex-col py-20 md:py-0 md:flex-row md:items-center md:justify-between space-y-0">
      <div className="flex-shrink-0">
        <Image
          src="/images/home/flow-about-1.png"
          alt="Left Image"
          className="rounded-lg shadow-lg w-[130px] h-[200px] md:w-[200px] md:h-[300px] "
          width={250}
          height={250}
        />
      </div>
      <d>
      <div className="mx-[10%] py-2 items-center text-center md:text-left ">
        <h2  className={`text-3xl  md:text-5xl 2xl:text-5xl text-center font-ralewayLight`}>
          About
          <br />
          &rdquo;Glow Scout&rdquo;
        </h2>
        <p className="mt-6 md:text-lg leading-relaxed pb-3 px-3 md:px-1 font-raleway text-center mx-10">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
          nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>
      </d>
      <div className="flex-shrink-0 flex justify-end">
        <Image
          src="/images/home/flow-about-2.png"
          alt="Right Image"
          className="rounded-lg shadow-lg w-[130px] h-[200px] md:w-[200px] md:h-[300px]"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default AboutGlow;
