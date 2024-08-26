"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Container from "@/components/reuseableComponenet/Container";
import  SelectField  from "@/components/reuseableComponenet/Select";
import axiosInstance from '@/axiosInstance';


const SpaPage = () => {

  const spas= axiosInstance.get("/spas");
  

  let dummyData = [
    {
      image: "/images/salon-spas/salon-1.png",
      imageAlt: "Salon 1",
      label: "Lorem Ipsum",
      title: "Salon 1",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: "/images/salon-spas/salon-2.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: "/images/salon-spas/salon-3.png",
      imageAlt: "Salon 3",
      label: "Lorem Ipsum",
      title: "Salon 3",
      description: "Ut ut nibh faucibus.",
    },
    {
      image: "/images/salon-spas/salon-4.png",
      imageAlt: "Salon 4",
      label: "Lorem Ipsum",
      title: "Salon 4",
      description: "Etiam sed dolor ac diam.",
    },
    {
      image: "/images/salon-spas/salon-5.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-6.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-7.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-8.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: "/images/salon-spas/salon-1.png",
      imageAlt: "Salon 1",
      label: "Lorem Ipsum",
      title: "Salon 1",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: "/images/salon-spas/salon-2.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: "/images/salon-spas/salon-3.png",
      imageAlt: "Salon 3",
      label: "Lorem Ipsum",
      title: "Salon 3",
      description: "Ut ut nibh faucibus.",
    },
    {
      image: "/images/salon-spas/salon-4.png",
      imageAlt: "Salon 4",
      label: "Lorem Ipsum",
      title: "Salon 4",
      description: "Etiam sed dolor ac diam.",
    },
    {
      image: "/images/salon-spas/salon-5.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-6.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-7.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-8.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
  ];

  const selectItems = [
    {
      value: "saveMoney",
      label: "Save Money",
    },
    {
      value: "saveTime",
      label: "Save Time",
    },
    {
      value: "saveBoth",
      label: "Save Both",
    },
  ];

  const { toast } = useToast();

  

  return (
    <div className="py-6 md:py-10 md:mt-6 relative isolate">
      <div className="text-center text-darkMahron md:pb-5">
        <h2 className="text-4xl md:text-6xl font-ralewayLight"> Salons & Spas </h2>
        <p className="m-2 text-lg font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <Container>
        <div className="hidden mx-auto w-full md:max-w-6xl md:flex justify-center bg-opacity-60  items-center flex-col bg-lightbg md:bg-transparent">
          
              <div className="md:bg-[#FEF5E3] shadow-[#0000001A] shadow-lg bg-opacity-60  pl-5  py-1 md:rounded-full h-[60px] flex flex-col md:flex-row items-center mb-4  mt-6">
                <div className="flex justify-between  items-center flex-col md:flex-row">
                  <SelectField
                    selectItems={selectItems}
                    placeholder="Filters"
                    customClass="py-[18px]"
                  />
                  <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block mx-5">
                    |
                  </span>
                  <div>
                    <Input
                      placeholder="Please enter your location"
                      type="search"
                      className="border-darkMahron border-[1.5px] text-darkMahron  px-4  rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-60 h-10"
                    />
                  </div>
                  <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block mx-5">
                    |
                  </span>
                </div>
                <div className="flex relative mt-4 md:mt-0 h-auto">
                  <div>
                    <Input
                      name="goal"
                      placeholder="Search by Treatment or Spa"
                      className="border-darkMahron border-[1.5px] text-darkMahron  px-4 min-w-70 rounded-full mb-4 md:mb-0 md:mr-4 py-1 md:w-52 lg:w-72 xl:w-96 h-11"
                      
                    />
                  </div>
                  <div className=" absolute right-2 md:right-6 bottom-6 md:bottom-[6px]">
                    <Button
                      type="submit"
                      variant="myCustom"
                      size="sm"
                      className="rounded-full"
                    >
                      Book Now!
                    </Button>
                  </div>
                </div>
              </div>
            
        </div>
      

      <div className=" my-5 mx-4 md:mx-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4  mt-6 mb-2">
          {dummyData.map((item, index) => (
            <Link href={`spa-single/${index}`} key={index}>
              <div className="md:mb-8">
              <TreatmentCard key={index} {...item} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      </Container>
    </div>
  );
};

export default SpaPage;
