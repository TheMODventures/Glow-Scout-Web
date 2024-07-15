"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import SignupFormField from "../spasComponent/SignupFormField";
import {ForgotSchema} from "@/validation/auth.validation"



function ForgotPassword() {
  const { toast } = useToast();


  const form = useForm({
    resolver: zodResolver(ForgotSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <h3 className="py-4 text-[#351120] text-3xl mb-4">
      Forgot Password?
      </h3>
     
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 m-auto"
        >
          <SignupFormField
            name="email"
            placeholder="Enter email address"
            formControl={form.control}
          />

          <div className="flex justify-center items-center">
          <Link href='/auth/login'>
          <Button
              variant="outline"
              size="lg"
              className=" rounded-full mx-2"
            >
              Sign Up new account
            </Button>
          </Link>
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className=" rounded-full mx-2"
            >
              Send Code
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}



export default ForgotPassword;
