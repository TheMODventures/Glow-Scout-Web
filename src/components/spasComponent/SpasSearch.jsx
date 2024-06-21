'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast'; 
import { Input } from '@/components/ui/input';

// Define your schema using Zod
const FormSchema = z.object({
  goal: z.string({ message: 'Please select a Filters.' }),
});

function TreatmentSearch() {
  const { toast } = useToast(); 

  const form = useForm({
    resolver: zodResolver(FormSchema),
    
  });

  function onSubmit(data) {
    try {
      console.log(data);
    toast({
      title: 'Form submitted!',
      description: 'Your form has been submitted successfully.',
      status: 'success',
    });
    } catch (error) {
      
      toast({
        title: 'An error occurred.',
        description: 'There was an error submitting your form. Please try again.',
        status: 'error',
      });
    }


  }

  return (
    <div className="flex justify-center items-center flex-col bg-[#F6E9CE] md:bg-transparent my-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" w-2/3">
         <div className='md:bg-[#F6E9CE] dark:bg-zinc-800 py-6 md:rounded-full  flex flex-col md:flex-row items-center justify-around mt-6"'>
         <div className='flex justify-between items-center flex-col md:flex-row'>
                <Select>
                  <FormControl className=' border-darkMahron text-darkMahron py-2 h-12 px-4 min-w-40 rounded-full mb-4 md:mb-0 md:mr-4'>
                    <SelectTrigger>
                      <SelectValue placeholder="Filters" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="saveMoney">Save Money</SelectItem>
                    <SelectItem value="travel">Travel</SelectItem>
                    <SelectItem value="learnNewSkill">Learn New Skill</SelectItem>
                  </SelectContent>
                </Select>
         <span className='h-full w-[1px] text-2xl text-darkMahron hidden md:block mx-5'>|</span>
         <div>
         <Input
                placeholder="Please enter your location"
                type="search"
                className="border-darkMahron border-2 text-darkMahron  px-4 min-w-80 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"
              />
          </div>
          <span className='h-full w-[1px] text-2xl text-darkMahron hidden md:block mx-5'>|</span>
          </div >
          
        

          <div className='flex relative mt-4 md:mt-0'>
            <div>
            <SignupFormField
                name="goal"
                placeholder="Search by Treatment or Spa"
                formControl={form.control}
                />
            {/* <Input type="text" placeholder="Search for treatments" className="border-darkMahron border-2 text-darkMahron  px-4 min-w-80 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"/> */}
            </div>
            <div className=' absolute right-2 md:right-6 bottom-6 md:bottom-2'>
            <Button type="submit" variant="myCustom" size="sm" className="rounded-full">
          Book Now!
          </Button>
            </div>
            
          
          </div>
         </div>
         

          
        </form>
      </Form>
    </div>
  );
}




const SignupFormField = ({ name, placeholder, inputType, formControl }) => {
    return (
      <FormField
        control={formControl}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                placeholder={placeholder}
                type={inputType || "text"}
                {...field}
                className="border-darkMahron border-2 text-darkMahron  px-4 min-w-80 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"
              />
            </FormControl>
            {/* <FormMessage /> */}
          </FormItem>
        )}
      />
    );
  };


  export default TreatmentSearch;