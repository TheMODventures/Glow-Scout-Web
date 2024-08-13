"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TreatmentCard from "./TreatmentCard";
import Image from "next/image";
import { Raleway } from "next/font/google";
const Raleway1 = Raleway({
  weight: "400",
  subsets: ["latin"],
});
const treatments = [
  {
    image: "/images/home/tranding-1.png",
    title: "Laser Resurfacing",
    description: "Lorem ipsum.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesqu.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed",
    label: "Lorem Ipsum",
  },
];
const TrandingTreatment = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? treatments.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === treatments.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto w-full h-screen flex items-center justify-center">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-0 right-0 z-0 hidden md:block"
      />
      <div className="w-full">
        <div className="py-5 text-center text-darkMahron">
          <h2
            className={`${Raleway1.className} text-3xl font-thin md:text-4xl 2xl:text-5xl`}
          >
            Trending Treatments
          </h2>
          <p className="m-2 text-base 2xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative overflow-hidden my-5 z-50 w-[100%] xl:w-[80%]">
            <div className="w-full max-w-3xl">
              <div
                className="flex transition-transform ease-in-out  duration-500 gap-x-5 xl:gap-x-14 2xl:gap-x-24 xl:px-10 2xl:px-16 "
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                
                {treatments.map((treatment, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
                  >
                    <TreatmentCard {...treatment} />
                  </div>
                ))}
              </div>

              <div className="hidden md:block">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className=" absolute top-1/2 left-2 transform -translate-y-1/2 text-darkMahron text-2xl font-black"
              >
                <FaChevronLeft />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2  text-darkMahron text-2xl font-black"
              >
                <FaChevronRight />
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className="absolute bottom-0 left-0 hidden border-none rounded-xl z-[-1000] md:block"
      />
    </div>
  );
};
export default TrandingTreatment;
