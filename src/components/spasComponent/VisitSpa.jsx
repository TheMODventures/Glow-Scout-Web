import Image from "next/image";
import { useState } from "react";
import { Heart, Star, StarHalf, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const VisitSpa = ({data}) => {
  console.log("spaData  ",data)
  const [favourite, setFavourite] = useState(false);
  return (
    <div className="border-b border-darkMahron pb-5 mb-20 font-raleway">
      <h1 className="text-5xl text-darkMahron font-ralewayLight mt-6  md:mt-10">{data?.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 mb-2">
        <div className="col-span-2">
          <div className="relative">
            <Image
              src={data?.showcaseImages[0] || `/images/salon-spas/spa-1.png`}
              alt="Main Spa Image"
              width={600}
              height={400}
              className="w-full rounded-xl md:h-[600px] object-cover my-5"
            />
            <button className="absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg">
              View all images
            </button>
          </div>
        </div>

        <div className="md:col-span-1 flex md:flex-col gap-4 md:py-5 justify-center items-center">
          <Image
            src={data?.showcaseImages[1] || "/images/salon-spas/spa-2.png"}
            alt="Spa"
            width={100}
            height={200}
            className="w-full md:h-[295px] rounded-xl"
          />
          <Image
            src={data?.profileImage || "/images/salon-spas/spa-3.png"}
            alt="Spa"
            width={100}
            height={200}
            className="w-full md:h-[295px] rounded-xl"
          />
        </div>

        <div className="col-span-2 py-5">
          <Card className="p-6 border-darkMahron h-full flex flex-col max-h-[600px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium mb-4  text-darkMahron font-ralewayLight ">{data?.name}</h2>
              <div className="flex justify-between items-center md:mb-4 mb-2">
                <p className="text-darkMahron text-base md:text-lg font-semibold">Add to favourites</p>
                <button onClick={() => setFavourite(!favourite)}>
                  <Heart size={20} color={favourite ? "red" : "black"} />
                </button>
              </div>
              <div className="py-4">
                <p className="text-darkMahron text-base md:text-lg font-semibold">Rating</p>
                <div className="flex items-center border-b border-darkMahron md:pb-8 pb-4 mb-4">
                  <Star fill="#E5BA1F" strokeWidth={0} size={18} />
                  <Star fill="#E5BA1F" strokeWidth={0} size={18} />
                  <StarHalf fill="#E5BA1F" strokeWidth={0} size={18} />
                  <Star fill="#111" strokeWidth={0} size={18} />
                  <Star fill="#111" strokeWidth={0} size={18} />
                  <p className="text-[12px] ml-2">(5,212)</p>
                </div>
                <div className="md:py-14 py-4 border-b border-darkMahron gap-y-7">
                  <p className="flex gap-2 items-center mb-2 text-darkMahron text-base md:text-xl">
                    <Clock size={26} strokeWidth={1} />
                    Open until 12:00p.m.
                  </p>
                  <address className="flex gap-2 items-center mb-2 not-italic text-darkMahron text-base md:text-xl">
                    <MapPin size={26} strokeWidth={1} />
                    {data?.city || "Not updated yet."}
                  </address>
                  <Link
                    href="#"
                    className="text-darkMahron underline font-bold font-semibold text-base md:text-xl"
                  >
                    Get directions
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-xl w-full mb-4  text-darkMahron text-base md:text-xl"
              >
                Visit Website
              </Button>
              <Link href={'/appointment'}>
              <Button
                type="button"
                variant="myCustom"
                size="lg"
                className="rounded-xl w-full  text-white text-base md:text-xl"
              >
                Book Now
              </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisitSpa;
