"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import InputFormField from "./InputFormField";
import { useRouter } from "next/navigation";
import { setUser, setStatus, setError } from "@/redux/auth/authSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { usePathname  } from "next/navigation";

const DynamicAuthForm = ({
  formType,
  title,
  schema,
  linkText,
  linkHref,
  onSubmit,
  btnLink,
}) => {
  const { toast } = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  let form;
  const [passwordType, setPasswordType] = useState("password");
  const currentRoute= usePathname();

 form = useForm({   
    resolver: zodResolver(schema),
    
  });

  async function handleSubmit(data) {
      
    try {
      console.log("User Input:", data); 
      dispatch(setStatus("loading"));
      const response = await onSubmit(data);
      console.log("API Response:", response); 
      localStorage.setItem("accessToken", response.data.data.accessToken);
      if (formType === "login") {
        localStorage.setItem("id", response.data.data.user._id);
      }

      dispatch(setUser(response.data.data.user));
      dispatch(setStatus("succeeded"));

      toast({
        description: (
          <div className="w-[200px] rounded-md bg-green-600 py-1 px-2 flex justify-between items-center">
            <p className="h-4 w-4 bg-white text-green-500 rounded-sm text-center font-bold">
              ✓
            </p>
            <p className="text-white text-base text-center">
              {JSON.stringify(response.data.message, null, 2)}
            </p>
          </div>
        ),
      });
        router.push(formType === "login" && response.data.data.user.role === "business" ? "/pricing" : btnLink);  // Redirect on success

    } catch (error) {
      console.error("API call error:", error);
      dispatch(setError(error.message)); // Ensure dispatching only serializable data
      dispatch(setStatus("failed"));
      toast({
        description: (
          <div className="w-[200px] rounded-md bg-red-600 py-1 px-2 flex justify-between items-center">
            <p className="h-4 w-4 bg-white text-red-500 rounded-sm text-center font-bold">
              X
            </p>
            <p className="text-white text-base text-center">
              {JSON.stringify(error.response.data.message, null, 2) || JSON.stringify(error.response.message, null, 2)}
            </p>
          </div>
        ),
      });
    }
  }

  function handleGoogleSubmit(){
    alert("sign as google")
  }

  function handleFacebookSubmit(){
    alert("sign as facebook")
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0">
      <h3 className="py-4 text-[#351120] text-3xl mb-4">{title}</h3>

      
      {["signup"].includes(formType) && (
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4 flex-wrap md:flex-nowrap items-center justify-center">
          <Button className="bg-white flex items-center justify-center w-full md:w-auto" onClick={handleGoogleSubmit}>
            <Image
              src="/images/auth/search-2.png"
              alt="Google"
              className="mr-2"
              width={20}
              height={20}
            />
            Sign up with Google
          </Button>
          <Button className="bg-white flex items-center justify-center w-full md:w-auto" onClick={handleFacebookSubmit}>
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
      )}
      {formType == "signup" && (
        <div className="text-center text-zinc-500 my-4">- or -</div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full md:w-2/3 space-y-6"
        >
          {formType !== "login" && formType !== "forgot-password" && (
            <InputFormField
              name="name"
              placeholder="Full Name"
              formControl={form.control}
              inputType="text"
            />
          )}
          <InputFormField
            name="email"
            placeholder="Email"
            formControl={form.control}
            inputType="email"
          />
          
          {["signup", "login"].includes(formType) && (
            <div className=" relative">
            <InputFormField
              name="password"
              placeholder="Password"
              inputType={passwordType}
              formControl={form.control}
            />
            <span className="absolute right-2 top-4  cursor-pointer">
              {passwordType === "password" ? (
                <FaRegEyeSlash
                  onClick={() => setPasswordType("text")}
                  className="cursor-pointer text-gray-300"
                />
              ) : (
                <FaRegEye
                  onClick={() => setPasswordType("password")}
                  className="cursor-pointer"
                />
              )}
            </span>
          </div>
          )}
          
          
          {linkText && (
            <div className="text-zinc-500 mb-4 text-sm">
              {linkText}
              <Link href={linkHref} className="text-[#351120] font-bold text-sm hover:underline">
                {formType=="login" && "Reset Now"}
              </Link>
              {formType === "signup" && (
                <>
                  <Link
                    href={ currentRoute=="/auth/user" ? "/auth/business" : "/auth/user"}
                    className="text-[#351120] font-bold"
                  >
                    Sign Up here
                  </Link>
                </>
              ) }
            </div>
          )}

{formType !== "forgot-password" && formType =="login" && (
        <div className="text-center text-zinc-500 my-4">- or -</div>
      )}
      {["login"].includes(formType) && (
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4 flex-wrap md:flex-nowrap items-center justify-center">
          <Button className="bg-white flex items-center justify-center w-full md:w-auto" onClick={handleGoogleSubmit}>
            <Image
              src="/images/auth/search-2.png"
              alt="Google"
              className="mr-2"
              width={20}
              height={20}
            />
            Sign up with Google
          </Button>
          <Button className="bg-white flex items-center justify-center w-full md:w-auto" onClick={handleFacebookSubmit}>
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
      )}
          <div className="flex justify-center items-center py-8">
            {
              formType == "forgot-password" && (
                <Link href="/auth/login">
              <Button
                variant="outline"
                size="lg"
                className=" rounded-full mx-2"
              >
                Sign Up new account
              </Button>
            </Link>
              )
            }
          {
            formType === "login" && (
              <Link as="#" href="">
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
            )
          }

            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className="rounded-full"
            >
              {formType==="signup"  && "Get Started"}
              {formType === "login" && "Log In" }
              {formType ==="forgot-password" && "Send Code"}
            </Button>
            
          </div>
        </form>
      </Form>
      
      
    </div>
  );
};

export default DynamicAuthForm;
