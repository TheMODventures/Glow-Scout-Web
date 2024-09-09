"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Container from "@/components/reuseableComponenet/Container";
import SelectField from "@/components/reuseableComponenet/Select";
import { getSpas } from "@/API/spas.api";
import { useEffect, useState } from "react";
import SkeletonCard from "@/components/reuseableComponenet/SkeletonCard";

const SpaPage = () => {
  const [allSpas, setAllSpas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSpasData(currentPage);
  }, [currentPage]);

  const getSpasData = async (page) => {
    setIsLoading(true);
    if (isFetching) return;
    setIsFetching(true);

    try {
      const spas = await getSpas(page);
      spas.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      if (page === 1) {
        setAllSpas(spas);
      } else {
        setAllSpas((prevSpas) => [...prevSpas, ...spas]);
      }
      setHasNextPage(spas.length > 0);
    } catch (error) {
      console.error("Error fetching spas:", error);
    } finally {
      setIsFetching(false);
      setIsLoading(false);
    }
  };

  const handleViewMore = () => {
    if (hasNextPage && !isFetching) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const selectItems = [
    { value: "saveMoney", label: "Save Money" },
    { value: "saveTime", label: "Save Time" },
    { value: "saveBoth", label: "Save Both" },
  ];

  const { toast } = useToast();

  return (
    <div className="py-6 md:py-10 md:mt-6 relative isolate">
      <div className="text-center text-darkMahron md:pb-5">
        <h2 className="text-4xl md:text-6xl font-ralewayLight">Salons & Spas</h2>
        <p className="m-2 text-lg font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
        </p>
      </div>

      <Container>
        {/* Filter and Search Form */}
        <div className="hidden mx-auto w-full md:max-w-6xl md:flex justify-center bg-opacity-60 items-center flex-col bg-lightbg md:bg-transparent">
          <div className="md:bg-[#FEF5E3] shadow-[#0000001A] shadow-lg bg-opacity-60 pl-5 py-1 md:rounded-full h-[60px] flex flex-col md:flex-row items-center mb-4 mt-6">
            <div className="flex justify-between items-center flex-col md:flex-row">
              <SelectField selectItems={selectItems} placeholder="Filters" customClass="py-[18px]" />
              <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block mx-5">|</span>
              <div>
                <Input
                  placeholder="Please enter your location"
                  type="search"
                  className="border-darkMahron border-[1.5px] text-darkMahron px-4 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-60 h-10"
                />
              </div>
              <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block mx-5">|</span>
            </div>
            <div className="flex relative mt-4 md:mt-0 h-auto">
              <div>
                <Input
                  name="goal"
                  placeholder="Search by Treatment or Spa"
                  className="border-darkMahron border-[1.5px] text-darkMahron px-4 min-w-70 rounded-full mb-4 md:mb-0 md:mr-4 py-1 md:w-52 lg:w-72 xl:w-96 h-11"
                />
              </div>
              <div className="absolute right-2 md:right-6 bottom-6 md:bottom-[6px]">
                <Button type="submit" variant="myCustom" size="sm" className="rounded-full">
                  Book Now!
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Spa Cards */}
        <div className="my-5 mx-4 md:mx-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 mb-2">
            {isLoading
              ? Array(10).fill().map((_, index) => <SkeletonCard key={index} />)
              : allSpas.map((item, index) => (
                  <Link href={`spa-single/${item._id}`} key={index}>
                    <div className="md:mb-8">
                      <TreatmentCard
                        key={index}
                        image={item.showcaseImages[0]}
                        imageAlt={item.name}
                        label={item.city}
                        title={item.name}
                        description={item.email}
                        imageHeightWeb={"h-[200px] md:h-[300px]"}
                      />
                    </div>
                  </Link>
                ))}
          </div>

          {hasNextPage && (
            <div className="flex justify-center items-center mt-10">
              <Button
                onClick={handleViewMore}
                variant="myCustom"
                className="px-6 rounded-full py-[20px] font-raleway font-bold"
                disabled={isFetching}
              >
                {isFetching ? "Loading..." : "View More"}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default SpaPage;
