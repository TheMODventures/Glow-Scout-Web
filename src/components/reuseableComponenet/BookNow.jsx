"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Container from "./Container";
import { BookSchema } from "@/validation/common.validation";
import FormSelect from "./FormSelect";
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
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
        <div className="bg-[#F6E9CE99]  shadow-lg py-3 rounded-xl md:rounded-full grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-2 md:flex-row md:container px-4 grid-flow-row-dense items-center justify-center">
          <div class="md:col-span-2 flex w-full">
            <FormSelect
              selectItems={goalData}
              placeholder="Select your Goals"
              name="goal"
              Control={form.control}
              customClass="w-full"
            />
            <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block ">
              |
            </span>
          </div>

          <div class="md:col-span-2 w-full">
            <FormSelect
              selectItems={itemsDate}
              placeholder="Select your Location"
              name="location"
              Control={form.control}
              customClass="w-full"
            />
          </div>

          <div className="col-span-2 md:col-span-1 flex justify-center w-full">
  <Link href={'/spa-single/1'} className="w-full">
    <Button
      type="submit"
      variant="myCustom"
      size="lg"
      className="rounded-full w-full"
    >
      Book Now!
    </Button>
  </Link>
</div>

        </div>
      </form>
    </Form>
  );
}

export default SelectForm;
