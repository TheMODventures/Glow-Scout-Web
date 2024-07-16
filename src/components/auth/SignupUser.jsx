"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { useState } from "react";
import SignupFormField from "../reuseableComponenet/InputFormField";
import { SignupUserSchema } from "@/validation/auth.validation";

function SignupForm() {
  const { toast } = useToast();

  const [passwordType, setPasswordType] = useState("password");

  const form = useForm({
    resolver: zodResolver(SignupUserSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
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
        Sign Up as User
      </h3>
      <div className="flex space-x-4 mb-4">
        <Button className="bg-white">
          <Image
            src="/images/auth/search-2.png"
            alt="Google"
            className="mr-2"
            width={20}
            height={20}
          />
          Sign up with Google
        </Button>
        <Button className="bg-white py-4">
          <Image
            src="/images/auth/facebook-1.png"
            alt="Facebook"
            className="mr-2"
            width={20}
            height={20}
          />
          Sign up with Facebook
        </Button>
      </div>
      <div className="text-center text-zinc-500 mb-4">- or -</div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 m-auto"
        >
          <SignupFormField
            name="name"
            placeholder="Full Name"
            formControl={form.control}
          />
          <SignupFormField
            name="email"
            placeholder="Email"
            formControl={form.control}
          />
          <div className="relative">
            <SignupFormField
              name="password"
              placeholder="Password"
              inputType={passwordType}
              formControl={form.control}
            />
            <span className="absolute right-14 top-4 text-zinc-500 cursor-pointer">
              {passwordType === "password" ? (
                <FaRegEyeSlash
                  onClick={() => setPasswordType("text")}
                  className="cursor-pointer"
                />
              ) : (
                <FaRegEye
                  onClick={() => setPasswordType("password")}
                  className="cursor-pointer"
                />
              )} 
            </span>
          </div>
          <div className="text-zinc-500 mb-4">
            Are you a business?{" "}
            <Link href="/auth/business" className=" text-[#351120] font-bold">
              Sign Up here
            </Link>
          </div>

          <div className="flex justify-center items-center">
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className=" rounded-full"
            >
              Get Started
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}



export default SignupForm;
