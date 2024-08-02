"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ClientTestimonials = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const testimonials = [
    {
      name: "Ashley K.",
      image: "/images/home/testimonial-1.png",
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
    },
    {
      name: "Ashley F.",
      image: "/images/home/testimonial-1.png",
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
    },
    {
      name: "Ashley F.",
      image: "/images/home/testimonial-1.png",
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
    },
    {
      name: "Ashley F.",
      image: "/images/home/testimonial-1.png",
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
    },
    {
      name: "Ashley F.",
      image: "/images/home/testimonial-1.png",
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
    },
  ];

  return (
    <div className="mx-auto py-24 md:py-40 font-raleway bg-[#FEF5E3]">
   <div className="text-center text-darkMahron pb-5">
        <h2 className="text-center text-darkMahron text-4xl md:text-6xl font-thin"> Client Testimonials </h2>
        <p className="m-2 text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
        </p>
   </div>

      <div className="pt-14 container flex flex-col items-center">
        <Carousel
          opts={{ align: "start" }}
          className=" md:w-[600px] lg:w-[700px] w-screen mx-2"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          plugins={[plugin.current]}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="flex  justify-between items-center md:gap-5 gap-2">
                  <div className="ml-3 md:ml-0 flex-shrink-0 md:w-full md:h-full md:max-w-60 md:max-h-96">
                    <Image
                      src={testimonial.image}
                      alt="testimonial"
                      width={250}
                      height={350}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-2 md:p-6 text-left">
                    <h3 className="text-[#351120] text-3xl md:text-5xl font-bold pb-3">
                      {testimonial.name}
                    </h3>
                    <p className="py-3 w-full md:w-[300px] text-sm md:text-xl">
                      {testimonial.review}
                    </p>
                    <div className="flex justify-center md:justify-start">
                      <div className="relative">
                        <div className="flex gap-2 text-lg md:text-xl">
                          {Array.from({ length: 5 }, (_, index) => (
                            <Star
                              fill="#111"
                              strokeWidth={0}
                              key={`star-${index}`}
                            />
                          ))}
                        </div>
                        <div className="flex gap-2 absolute top-0">
                          <Star fill="#E5BA1F" strokeWidth={0} />
                          <Star fill="#E5BA1F" strokeWidth={0} />
                          <StarHalf fill="#E5BA1F" strokeWidth={0} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
};

export default ClientTestimonials;
