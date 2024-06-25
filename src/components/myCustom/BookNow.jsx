"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import Container from "./Container";

// Define your schema using Zod
const FormSchema = z.object({
  goal: z.string({ message: "Please select a goal." }),
  location: z.string({ message: "Please select a location." }),
});

function SelectForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FormSchema),
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
      <div className="container mx-auto w-full md:max-w-5xl flex justify-center items-center flex-col bg-[#F6E9CE] md:bg-transparent">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
            <div className='shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300 md:bg-[#F6E9CE] dark:bg-zinc-800 py-6 md:rounded-full md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between mt-6"'>
              <div>
                <FormField
                  control={form.control}
                  name="goal"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange}>
                        <FormControl className=" border-darkMahron text-darkMahron py-2 px-4 min-w-60 rounded-full mb-4 md:mb-0 md:mr-4">
                          <SelectTrigger>
                            <SelectValue placeholder="Select your Goals" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="saveMoney">Save Money</SelectItem>
                          <SelectItem value="travel">Travel</SelectItem>
                          <SelectItem value="learnNewSkill">
                            Learn New Skill
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <span className="h-full w-[1px] text-2xl text-darkMahron hidden md:block">
                |
              </span>
              <div>
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <Select onValueChange={field.onChange}>
                        <FormControl className=" border-darkMahron text-darkMahron py-2 px-4 min-w-60 rounded-full mb-4 md:mb-0 md:mr-4">
                          <SelectTrigger>
                            <SelectValue placeholder="Select your Location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="newYork">New York</SelectItem>
                          <SelectItem value="losAngeles">
                            Los Angeles
                          </SelectItem>
                          <SelectItem value="sanFrancisco">
                            San Francisco
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
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
