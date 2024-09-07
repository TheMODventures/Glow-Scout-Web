"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import FilterSearch from "@/components/reuseableComponenet/FilterSearch";
import FilterSelect from "@/components/reuseableComponenet/FilterSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Search from "@/components/reuseableComponenet/Search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FormSelect from "@/components/reuseableComponenet/FilterSelect";
import Container from "@/components/reuseableComponenet/Container";
import Image from "next/image";
import { useEffect, useState } from "react";
import axiosInstance from "@/axiosInstance";
import SkeletonCard from "@/components/reuseableComponenet/SkeletonCard";


const TreatmentPage = () => {
  const [allTreatments, setAllTreatments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTreatments();
  }, []);
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
  useEffect(() => {
    getTreatments(currentPage);
  }, [currentPage]);

  const getTreatments = async (page) => {
    setIsLoading(true);
    if (isFetching) return;
    setIsFetching(true);
    
    try {
      const response = await axiosInstance.get(`/treatment?page=${page}`, {
        withCredentials: true,
      });
      const newTreatments = response.data.data.data;

      setAllTreatments((prevTreatments) => {
        const newUniqueTreatments = newTreatments.filter(
          (newTreatment) =>
            !prevTreatments.some(
              (existingTreatment) => existingTreatment.id === newTreatment.id
            )
        );
        return [...prevTreatments, ...newUniqueTreatments];
      });

      setHasNextPage(response.data.data.pagination.hasNextPage);
    } catch (error) {
      console.error("Error fetching treatments: ", error);
    } finally {
      setIsFetching(false); 
      setIsLoading(false);
    }
  };



  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FilterSelect),
  });

  function handleSubmit(data) {
    try {
      console.log(data);
      toast({
        title: "Form submitted!",
        description: "Your form has been submitted successfully.",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "An error occurred.",
        description:
          "There was an error submitting your form. Please try again.",
        status: "error",
      });
    }
  }

  const handleViewMore = () => {
    if (hasNextPage && !isFetching) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="py-6 md:py-10 md:mt-6  relative isolate">
       
      <div className="text-center text-darkMahron md:pb-5">
        <h2 className="text-4xl md:text-6xl md:font-ralewayLight font-raleway font-thin">Treatments</h2>
        <p className="m-2 text-sm md:text-lg font-raleway">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <Container>
        <div className="hidden mx-auto w-full md:max-w-6xl md:flex justify-center items-center flex-col bg-opacity-60  bg-lightbg md:bg-transparent">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="md:bg-lightbg  bg-opacity-60 shadow-[#0000001A] shadow-lg pl-5  py-1 md:rounded-full h-[60px] flex flex-col md:flex-row items-center mb-4   mt-6">
                <div className="flex justify-between items-center flex-col md:flex-row">
                  <FormSelect
                    selectItems={selectItems}
                    placeholder="Filters"
                    name="goal"
                    customClass="min-w-60 py-[18px]"
                  />
                  <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block mx-5">
                    |
                  </span>
                  <div>
                    <Link href="/compare-treatment">
                      <Button
                        variant="myCustom"
                        size="lg"
                        className="rounded-full px-4 min-w-60  mb-4 md:mb-0 md:mr-4 py-3 "
                      >
                        Compare Treatments
                      </Button>
                    </Link>
                  </div>
                  <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block mx-5">
                    |
                  </span>
                </div>
                <div className="flex relative mt-4 md:mt-0 h-auto">
                  <div>
                    <Search
                      name="goal"
                      placeholder="Search for Treatment"
                      formControl={form.control}
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
            </form>
          </Form>
        </div>
      


      <div className="container my-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 ">
          
          {
          isLoading || !allTreatments.length
          ? Array(10).fill().map((_, index) => <SkeletonCard key={index} />):
          allTreatments.map((item, index) => (
            <div className="md:mb-8">
          <Link href={`/treatment/${index}`} key={index}>
            <TreatmentCard key={index} {...item} imageHeightWeb={"h-60"} />
            </Link>  
            </div>
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
      
      <div className="md:hidden flex justify-end items-end sticky bottom-3 mr-3">
  <Link href={'/compare-treatment'} className="py-1 px-4 bg-darkMahron text-white rounded-full shadow-md transform transition-transform hover:scale-105">
    Compare
  </Link>
</div>
</Container>
    </div>
  );
};

export default TreatmentPage;
