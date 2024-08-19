import Upload from "@/components/reuseableComponenet/Upload";
import Image from "next/image";
import React from "react";

const CompareTreatments = () => {
  return (
    <div className="flex flex-col items-center px-3 md:px-8 py-10 ">
      
      <div className="text-center text-darkMahron pb-6">
        <h2 className="text-4xl md:text-5xl font-thin font-raleway">Compare Treatments </h2>
        <p className="m-2 text-sm md:text-lg font-light font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>
      <div className="grid grid-cols-2 md:gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center pr-2 md:pr-4 border-r-2 border-gray-200 col-span-1 max-h-[800px]">
          <div className="w-full h-60  rounded-lg">
            <Image
              width={300}
              height={300}
              src="/images/home/tranding-3.png"
              alt="Chemical Peels"
              className="rounded-lg mb-2 w-full h-60"
            />
            <h2 className="text-lg md:text-4xl font-[100] font-raleway text-darkMahron  text-center">
              Chemical Peels
            </h2>
          </div>
          <div className="mt-20 md:mt-20 w-full  p-3 border-2 border-darkMahron rounded-xl">
            <h3 className="font-semibold text-darkMahron font-raleway text-lg">Description</h3>
            <p className="text-[10px] md:text-lg font-raleway mt-5 text-darkMahron">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur  elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipisci elit. Lorem ipsum dolor sit amet, consectetur adipisci elit. Ut ut nibh faucibus.”
            </p>
          </div>
        </div>

        <div className="col-span-1 pl-2  md:pl-4  flex flex-col items-center justify-start rounded-lg">
        
        
          <Upload text="Select Treatment to compare"/>
          
         
        </div>
      </div>

      <button className="mt-8 px-6 py-2 font-raleway bg-darkMahron text-white text-lg font-semibold rounded-full">
        Next
      </button>
      
    </div>
  );
};

export default CompareTreatments;
