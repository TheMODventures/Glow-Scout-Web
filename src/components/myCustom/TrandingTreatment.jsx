import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const treatments = [
  {
    image: "/images/home/tranding-1.png",
    title: "Laser Resurfacing",
    description: "Lorem ipsum dolor sit amet.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur adipiscing elit.",
   label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut nibh faucibus.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed dolor ac diam.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque at vehicula elit.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque at vehicula elit.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-5.png",
    title: "Dermal Fillers",
    description: "Pellentesque at vehicula elit.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-2.png",
    title: "Botox Injections",
    description: "Consectetur adipiscing elit.",
   label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-3.png",
    title: "Chemical Peel",
    description: "Ut ut nibh faucibus.",
    label: "Lorem Ipsum"
  },
  {
    image: "/images/home/tranding-4.png",
    title: "Microdermabrasion",
    description: "Etiam sed dolor ac diam.",
    label: "Lorem Ipsum"
  },
];

const TrandingTreatment = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 md:mt-6 font-raleway relative isolate">
      {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lighttext to-[#F6E9CE] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
      <div className="text-center">
        <h2 className="text-4xl">Trending Treatments</h2>
        <p className="mt-2 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.</p>
      </div>

      <div className='mt-20'>
      <Carousel
        opts={{ align: "start" }}
        className="w-full"
      >
        <CarouselContent>
          {treatments.map((treatment, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
              <Card className='rounded-none bg-noneborder bg-transparent shadow-none border-none'>
                <CardContent className="p-0 flex aspect-square items-center justify-center">
                  <div>
                    <div className="relative h-64 w-48 rounded-lg">
                      <Image
                        className="rounded-lg static"
                        src={treatment.image} 
                        alt={treatment.title}
                        fill={true}
                        style={{objectFit: "cover"}}
                      />
                      <p className='absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg'>{treatment.label}</p>
                    </div>
                    <div className="pt-2">
                      <h3 className="text-lg font-bold">{treatment.title}</h3>
                      <p className="mt-2 text-sm">{treatment.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
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
  )
}

export default TrandingTreatment
