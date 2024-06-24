"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

import { useState } from "react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

function Login() {
  const { toast } = useToast();

  const [passwordType, setPasswordType] = useState("password");

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
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
      <h3 className="py-4 text-[#351120] text-3xl mb-4">Log In</h3>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6 m-auto"
        >
          <SignupFormField
            name="email"
            placeholder="Email"
            formControl={form.control}
          />
          <div className=" relative">
            <SignupFormField
              name="password"
              placeholder="Password"
              inputType={passwordType}
              formControl={form.control}
            />
            <span className="absolute right-3 top-2 text-zinc-500 cursor-pointer">
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
            Forgot password?{" "}
            <Link
              href="/auth/forgot-password"
              className=" text-[#351120] font-bold"
            >
              Reset now
            </Link>
          </div>

          <div className="flex justify-center items-center text-center">
            <Link href="#">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="outline rounded-full text-[#351120] mx-4">
                    <NavigationMenuTrigger>Sign Up</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <Link href="/auth/user" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Sign Up As User
                        </NavigationMenuLink>
                      </Link>
                      <Link href="/auth/business" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Sign Up As Business
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </Link>

            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className=" rounded-full"
            >
              Log In
            </Button>
          </div>
        </form>
      </Form>
      <div className="text-center text-zinc-500 mb-4 mt-4">- or -</div>
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
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default Login;
