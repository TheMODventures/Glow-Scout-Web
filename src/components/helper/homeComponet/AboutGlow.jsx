import React from "react";
import Image from "next/image";

const AboutGlow = () => {
  return (
    <div className=" bg-darkMahron font-raleway text-lighttext flex flex-col py-20 md:py-60 md:flex-row md:items-center md:justify-between space-y-0">
      <div className="flex-shrink-0">
        <Image
          src="/images/home/flow-about-1.png"
          alt="Left Image"
          className="rounded-lg shadow-lg w-[130px] h-[200px] md:w-[250px] md:h-[400px] "
          width={250}
          height={250}
        />
      </div>
      <div className=" py-2 items-center text-center md:text-left ">
  <h2 className="text-4xl md:text-6xl mb-4 font-raleway font-thin text-center mt-4 md:mt-0">
    About
    <br />
    &rdquo;Glow Scout&rdquo;
  </h2>
  <p className="md:text-xl leading-relaxed pb-3 px-3 md:px-1 font-raleway text-center">
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

      <div className="flex-shrink-0 flex justify-end">
        <Image
          src="/images/home/flow-about-2.png"
          alt="Right Image"
          className="rounded-lg shadow-lg w-[130px] h-[200px] md:w-[250px] md:h-[400px]"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default AboutGlow;
