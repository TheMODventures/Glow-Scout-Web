'use client'

import React from 'react'
import Image from 'next/image'
import { Star, StarHalf } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import { useRef } from 'react';

const ClientTestimonials = () => {

  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

    const testimonials = [
        {
            name: 'Ashley K.',
            image: '/images/home/testimonial-1.png',
            review: '“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”',
        },

        {
            name: 'Ashley F.',
            image: '/images/home/testimonial-1.png',
            review: '“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”'
        },

    ];

        

  return (
    <div className="mx-auto py-40  font-raleway bg-[#FEF5E3]">
        <div className="text-center">
        <h2 className="text-6xl">Client’s Testimonials</h2>
      </div>

      <div className='pt-20 container flex flex-col items-center'>
      <Carousel
        opts={{ align: "start" }}
        className='md:w-[600px] lg:w-[700px] w-[300px]'
        onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      plugins={[plugin.current]}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index}>
              
                
                <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
        <div>
            <Image src={testimonial.image} alt="testimonial" width={200} height={300} className='w-50 h-80'/>
        </div>
        <div className='p-6'>
          <h3 className=' text-[#351120] text-4xl font-bold pb-3'>{testimonial.name}</h3>
            <p className='py-3 w-[300px] text-xl'>{testimonial.review}</p>
            <div>
            <div className="relative">
        <div className="flex gap-2 text-xl">
          { Array.from({ length: 5 }, (_, index) => (
              <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </div>
    </div>
  )
}

export default ClientTestimonials