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
import { Raleway } from "next/font/google";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Raleway1 = Raleway({
  weight: "400",
  subsets: ["latin"],
});
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
    <div className="mx-auto py-10 md:py-0 font-raleway bg-[#FEF5E3] md:h-screen w-screen flex justify-center items-center">
      <div className="">
        <div className="text-center text-darkMahron pb-5">
          <h2
            className={`${Raleway1.className} text-3xl font-thin md:text-4xl 2xl:text-5xl`}
          >
            {" "}
            Client Testimonials{" "}
          </h2>
          <p className="m-2 text-base 2xl:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>
        <div className="pt-8 container flex flex-col items-center">
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
                  <div className="flex  justify-center items-center gap-2">
                    <div className="ml-3 md:ml-0 flex-shrink-0 w-40 h-56 md:w-full md:h-full md:max-w-[22%] md:max-h-[40%]">
                      <Image
                        src={testimonial.image}
                        alt="testimonial"
                        width={250}
                        height={350}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-2 md:p-6 text-left">
                      <h3 className="text-[#351120] text-xl md:text-2xl font-bold pb-3">
                        {testimonial.name}
                      </h3>
                      <p className="py-3 w-full md:w-[300px] text-sm md:text-base">
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
              {/* Previous Button */}
              <div
                className=" absolute top-1/2 left-2 transform -translate-y-1/2 text-darkMahron text-2xl font-black"
              >
                <CarouselPrevious  />
              </div>

              {/* Next Button */}
              <div
                className="absolute top-1/2 right-2 transform -translate-y-1/2  text-darkMahron text-2xl font-black"
              >
                <CarouselNext />
              </div>
            </div>
            <CarouselDots />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;
