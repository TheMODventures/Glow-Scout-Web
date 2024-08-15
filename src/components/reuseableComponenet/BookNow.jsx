"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Container from "./Container";
import { BookSchema } from "@/validation/common.validation";
import FilterSelect from "./FilterSelect";
import Link from "next/link";

function SelectForm() {
  const itemsDate = [
    {
      value: "newYork",
      label: "New York",
    },
    {
      value: "losAngeles",
      label: "Los Angeles",
    },
  ];

  const goalData = [
    {
      value: "saveMoney",
      label: "Save Money",
    },
    {
      value: "travel",
      label: "Travel",
    },
  ];
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(BookSchema),
  });

  function onSubmit(data) {
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="bg-[#F6E9CE99]  shadow-lg py-[8px] rounded-xl md:rounded-full grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2 md:flex-row px-3 2xl:px-5 grid-flow-row-dense items-center justify-center">
          <div className="md:col-span-2 flex">
            <FilterSelect
              selectItems={goalData}
              placeholder="Select your Goals"
              name="goal"
              Control={form.control}
            />
            <p className="text-xl 2xl:text-3xl  hidden text-gray-400 lg:block ml-4  2xl:ml-16">
              {" "}
              |{" "}
            </p>
          </div>

          <div className="md:col-span-2 w-full">
            <FilterSelect
              selectItems={itemsDate}
              placeholder="Select your Location"
              name="location"
              Control={form.control}
            />
          </div>

          <div className="col-span-2 md:col-span-1 flex justify-center w-full ">
            <Link href={"/spa-single/1"}>
              <button
                type="submit"
                className="rounded-full w-full md:w-auto max-w-fit bg-darkMahron px-7 2xl:px-10 text-white h-[32px] 2xl:h-[42px] text-base"
              >
                Book Now!
              </button>
            </Link>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SelectForm;
