import React from "react";
import Image from "next/image";

const AboutGlow = () => {
  return (
    <div className=" bg-darkMahron font-raleway text-lighttext flex flex-col py-10 md:py-40 md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex-shrink-0">
        <Image
          src="/images/home/flow-about-1.png"
          alt="Left Image"
          className="rounded-lg shadow-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-6xl mb-4 font-raleway text-center">
          About
          <br />
          &rdquo;Glow Scout&rdquo;
        </h2>
        <p className="text-lg leading-relaxed pb-3 px-3 md:px-1 font-raleway text-center">
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
      <div className="flex-shrink-0">
        <Image
          src="/images/home/flow-about-2.png"
          alt="Right Image"
          className="rounded-lg shadow-lg"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default AboutGlow;
