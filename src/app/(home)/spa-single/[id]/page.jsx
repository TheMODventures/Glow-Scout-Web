"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import VisitSpa from "@/components/spasComponent/VisitSpa";
import Image from "next/image";
import React, { useState } from "react";
import Container from "@/components/reuseableComponenet/Container";

function Star1({ filled, onClick }) {
  return (
    <svg
      onClick={onClick}
      className={`w-5 h-5 cursor-pointer ${
        filled ? "text-yellow-500" : "text-gray-700"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.396 2.465a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.396-2.465a1 1 0 00-1.176 0l-3.396 2.465c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.326 9.397c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  );
}
const SpaSingle = ({ params }) => {
  const [localReviews, setLocalReviews] = useState([
    { rating: 0 },
    { rating: 0 },
    { rating: 0 },
    { rating: 0 },
  ]);

  const handleStarClick = (reviewIndex, starIndex) => {
    setLocalReviews((prevReviews) =>
      prevReviews.map((review, index) =>
        index === reviewIndex ? { ...review, rating: starIndex + 1 } : review
      )
    );
  };
  const id = params.id;

  let dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
      imageHeightWeb: "full",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
      imageHeightWeb: "full",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
      imageHeightWeb: "full",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
      imageHeightWeb: "full",
    },
  ];

  const testimonials = [
    {
      name: "Ashley K.",
      stars: 5,
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
      path: "/images/home/testimonial-1.png",
    },
    {
      name: "Client 2",
      stars: 4,
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
      path: "/images/home/testimonial-1.png",
    },
    {
      name: "Client 3",
      stars: 4,
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
      path: "/images/home/testimonial-1.png",
    },
    {
      name: "Client 4",
      stars: 4,
      review:
        "“It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.”",
      path: "/images/home/testimonial-1.png",
    },
  ];

  return (
    <div className="mx-auto px-4 max-w-screen-2xl">
      <VisitSpa />

      <div className="py-4  md:pb-36 border-b font-ralewayLight md:font-thin border-darkMahron">
        <div className="text-center text-darkMahron pb-5">
          <h2 className="text-4xl md:text-6xl font-ralewayLight">
            {" "}
            Treatments Offered{" "}
          </h2>
          <p className="m-2 text-lg font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>

        <div className="my-3">
          <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
            {dummyData.map((item, index) => (
              <TreatmentCard key={index} {...item} imageHeightWeb={"md:h-[300px]"} />
            ))}
          </div>
        </div>
      </div>

      <div className="py-6 md:mt-6">
        <div className="text-center pb-5">
          <h2 className="text-4xl md:text-6xl font-ralewayLight  text-darkMahron  ">
            Reviews
          </h2>
        </div>
        <Container>
        <div className="grid md:grid-cols-2 gap-5 mt-2 md:mt-5 font-raleway">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols gap-5 items-center"
            >
              <div className="flex justify-between items-center">
                <Image
                  width={160}
                  height={200}
                  src={testimonial.path}
                  alt={testimonial.name}
                  className="block md:hidden w-40 h-56 rounded-xl object-cover mb-4 md:mb-0"
                />
                <div className="px-6 py-3">
                  <h3 className="text-darkMahron md:text-5xl text-2xl  md:pb-3 pb-1">
                    {testimonial.name}
                  </h3>
                  <p className="md:py-3 w-full  md:text-xl text-[12px] font-normal">
                    {testimonial.review}
                  </p>
                  <div className="mt-2 md:mt-0 relative">
                    <div className="flex md:gap-2 gap-x-1">
                      {Array.from({ length: 5 }, (_, index) => (
                        <Star
                          fill="#111"
                          strokeWidth={0}
                          key={`star-${index}`}
                        />
                      ))}
                    </div>
                    <div className="flex md:gap-2 gap-x-1 absolute top-0">
                      {Array.from({ length: testimonial.stars }, (_, index) => (
                        <Star
                          fill="#E5BA1F"
                          strokeWidth={0}
                          key={`filled-star-${index}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        </Container>
        <div className="flex justify-center items-center my-16">
          <Button
            type="submit"
            variant="myCustom"
            size="lg"
            className="rounded-full text-xl"
          >
            View all
          </Button>
        </div>

        <div className="border border-darkMahron text-darkMahron rounded-xl py-5 px-4 my-8 ">
          <div className="pb-10">
            <h2 className="md:text-5xl text-2xl font-ralewayLight">Add your review</h2>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
  <Input
    placeholder="Write your review here....."
    className="border-b-1 bordeer-t-0  border-darkMahron w-full md:w-auto md:min-w-[600px]"
  />
  <div className="flex flex-row items-center">
    <p className="text-lg text-darkMahron font-raleway mr-2">Ratings</p>
    <div className="flex gap-2">
      {Array.from({ length: 5 }, (_, starIndex) => (
        <Star1
          key={starIndex}
          filled={starIndex < localReviews[0].rating}
          onClick={() => handleStarClick(0, starIndex)}
        />
      ))}
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default SpaSingle;
