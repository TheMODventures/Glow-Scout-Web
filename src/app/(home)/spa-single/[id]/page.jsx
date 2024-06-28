"use client";

import TreatmentCard from "@/components/myCustom/TreatmentCard";
import {  Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VisitSpa from "@/components/spasComponent/VisitSpa";


const page = ({params}) => {

  const id = params.id;

  let dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.",
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

const testimonials = [
    {
        name: 'Ashley K.',
        stars: 5,
        review: '“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”',
    },

    {
        name: 'Ashley F.',
        stars: 4,
        review: '“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”'
    },

];

  return (
    <div className="container font-raleway mx-auto px-4 ">
      <VisitSpa />

      <div className=" py-20 md:mt-6 font-raleway  border-b border-darkMahron">
      <div className="text-center pb-5">
        <h2 className="text-4xl">Treatments Offered</h2>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <TreatmentCard key={index} {...item} />
          ))}
        </div>
      </div>

    </div>

    <div className=" py-20 md:mt-6 font-raleway">
    <div className="text-center pb-5">
        <h2 className="text-6xl font-raleway">Reviews</h2>
      </div>
      <div>
       
       {
            testimonials.map((testimonial, index) => (
            <div key={index} className='flex flex-col md:flex-row justify-center items-center gap-5'>
            <div>
            <div className='p-6'>
            <h3 className=' text-[#351120] text-4xl font-bold pb-3'>{testimonial.name}</h3>
                <p className='py-3 w-[400px]'>{testimonial.review}</p>
                <div>
                <div className="relative">
            <div className="flex gap-2">
            { Array.from({ length: 5 }, (_, index) => (
                <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
            ))}
            </div>
            <div className="flex gap-2 absolute top-0">
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            </div>
        </div>
                </div>
            </div>
            </div>
            <div className='p-6'>
            <h3 className=' text-[#351120] text-4xl font-bold pb-3'>{testimonial.name}</h3>
                <p className='py-3 w-[400px]'>{testimonial.review}</p>
                <div>
                <div className="relative">
            <div className="flex gap-2">
            { Array.from({ length: 5 }, (_, index) => (
                <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
            ))}
            </div>
            <div className="flex gap-2 absolute top-0">
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />
            <Star fill="#E5BA1F" strokeWidth={0} />

            </div>
        </div>
                </div>
            </div>
            </div>
            ))
       }
        
      </div>

      <div className="flex justify-center items-center my-20">
          <Button type="submit" variant="myCustom" size="lg" className="rounded-full m-auto">
          View all
          </Button>
          </div>


          <div className="container border border-darkMahron rounded-xl p-4">
          <div className="pb-5">
        <h2 className="text-4xl">Add your review</h2>
      </div>
         <div className="flex gap-4">
         <Input placeholder="Type your message here." className=' border-b-1 bordeer-t-0  border-darkMahron'/>
         <div>
            <p>Ratings</p>
            <div className="flex gap-2">
            { Array.from({ length: 5 }, (_, index) => (
                <Star fill="#111" strokeWidth={0} key={`star-${index}`}/>
            ))}
         </div>
         </div>
          </div>
    </div>
    </div>
    </div>
  );
};

export default page;
