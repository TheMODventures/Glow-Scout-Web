"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Container from "./Container";
import { BookSchema } from "@/validation/common.validation";
import FormSelect from "./FormSelect";

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
    <Container>
      <div className="lg:absolute lg:left-36  lg:-bottom-10 lg:w-2/3 container mx-auto w-full md:max-w-5xl flex justify-center items-center flex-col bg-[#F6E9CE] md:bg-transparent">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
            <div className='md:bg-[#F6E9CE] dark:bg-zinc-800 py-3 md:rounded-full md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between mt-6'>
              <div>
                <FormSelect
                  selectItems={goalData}
                  placeholder="Select your Goals"
                  name="goal"
                  Control={form.control}
                  customClass="min-w-60"
                />
              </div>
              <span className="h-full w-[1px] text-2xl text-darkMahron hidden md:block">
                |
              </span>
              <div>
                <FormSelect
                  selectItems={itemsDate}
                  placeholder="Select your Location"
                  name="location"
                  Control={form.control}
                  customClass="min-w-60"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  variant="myCustom"
                  size="lg"
                  className="rounded-full"
                >
                  Book Now!
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default SelectForm;
