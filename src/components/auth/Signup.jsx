"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { useState } from "react";
import SignupFormField from "../reuseableComponenet/InputFormField";

function Signup({ title, schema, linkText, linkHref, onSubmit }) {
  const { toast } = useToast();
  const [passwordType, setPasswordType] = useState("password");

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  function handleSubmit(data) {
    onSubmit(data);
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
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 ">
        <h3 className="py-4 text-[#351120] text-2xl mb-4 text-center">
          {title}
        </h3>
        <div className="flex space-x-4 mb-4 justify-center">
          <Button className="bg-white text-[12px] flex items-center">
            <Image
              src="/images/auth/search-2.png"
              alt="Google"
              className="mr-1"
              width={15}
              height={15}
            />
            Sign up with Google
          </Button>
          <Button className="bg-white text-[12px] flex items-center">
            <Image
              src="/images/auth/facebook-1.png"
              alt="Facebook"
              className="mr-1"
              width={15}
              height={15}
            />
            Sign up with Facebook
          </Button>
        </div>
        <p className="text-center text-sm text-zinc-500 mb-4">- or -</p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-3"
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
            <div className="relative flex items-center">
              <SignupFormField
                name="password"
                placeholder="Password"
                inputType={passwordType}
                formControl={form.control}
              />
              <span className="absolute right-4 top-2 text-zinc-500 cursor-pointer">
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
            <div className="text-zinc-500 text-center text-sm mb-4">
              {linkText}
              <Link href={linkHref} className="text-sm text-[#351120] font-semibold">
               {" "} Sign Up here
              </Link>
            </div>
            <div className="flex justify-center">
              <Button
                type="submit"
                variant="myCustom"
                size="lg"
                className="rounded-full"
              >
                Get Started
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Signup;
