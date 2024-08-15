import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TreatmentCard from "./TreatmentCard";
import Image from "next/image";

import { Raleway } from 'next/font/google'
const Raleway1 = Raleway({
  weight: '300',
  subsets: ['latin'],
})

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
  return (
    <div className="mx-auto py-20  font-raleway relative rounded-full border-0">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className=" absolute top-0 right-0 z-0 hidden md:block"
      />

      <div className="text-center">
        <h2 className={`text-5xl px-6 md:mt-16 font-thin ${Raleway1.className}`}>Trending Treatments</h2>
        <p className="mt-2 text-lg px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="my-16 z-50 container flex justify-center items-center">
        <Carousel
          opts={{ align: "start" }}
          className="w-full md:container ml-8 overflow-hidden"
        >
          <CarouselContent className="flex">
            {treatments.map((treatment, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2  md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
              >
                <TreatmentCard {...treatment} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious style={{ left: "0rem" }} />
          <CarouselNext style={{ right: "0rem" }} />
        </Carousel>
      </div>

      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className=" absolute bottom-0 left-0 border-none  rounded-xl z-[-1000] hidden md:block"
      />
    </div>
  );
};

export default TrandingTreatment;