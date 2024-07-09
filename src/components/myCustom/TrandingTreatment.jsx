import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TreatmentCard from './TreatmentCard';

const treatments = [
  {
    image: "/images/home/tranding-1.png",
    title: "Laser Resurfacing",
    description: "Lorem ipsum dolor sit amet.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur adipiscing elit.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut nibh faucibus.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed dolor ac diam.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque at vehicula elit.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque at vehicula elit.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque at vehicula elit.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur adipiscing elit.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut nibh faucibus.",
    label: "Lorem Ipsum",
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed dolor ac diam.",
    label: "Lorem Ipsum",
  },
];

const TrandingTreatment = () => {
  return (
    <div className="mx-auto py-20 md:mt-6 font-raleway relative">
      <div className="text-center">
        <h2 className="text-4xl px-6">Trending Treatments</h2>
        <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
      </div>

      <div className="mt-20">
        <Carousel opts={{ align: "start" }} className="w-full container">
          <CarouselContent className="flex space-x-4">
            {treatments.map((treatment, index) => (
              <CarouselItem key={index} className="px-2  md:basis-1/3 lg:basis-1/5 xl:basis-1/6">
                <Card className="rounded-none bg-transparent shadow-none border-none">
                  <CardContent>
                    <TreatmentCard {...treatment} />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious style={{left: "0rem"}}/>
          <CarouselNext style={{right: "-1rem"}} />
        </Carousel>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-lighttext to-[#F6E9CE] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default TrandingTreatment;
