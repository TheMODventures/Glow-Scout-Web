"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import Link from "next/link";
import FilterSearch from "@/components/reuseableComponenet/FilterSearch";
import { SearchSchema } from "@/validation/page.validation";

const page = () => {
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

  const selectitems = [
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

  function spaSubmitHandler(data) {
    console.log("Spa search submitted:", data);
  }

  return (
    <div className=" py-20 md:mt-6 font-raleway relative isolate border-t-2 border-darkMahron">
      <div className="text-center pb-5">
        <h2 className="text-4xl">Salons & Spas</h2>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="my-5">
        <FilterSearch
          onSubmit={spaSubmitHandler}
          schema={SearchSchema}
          placeholder="Filters"
          buttonText="Book Now!"
          selectItems={selectitems}
        />
      </div>

      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <Link href={`spa-single/${index}`} key={index}>
              <TreatmentCard key={index} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
