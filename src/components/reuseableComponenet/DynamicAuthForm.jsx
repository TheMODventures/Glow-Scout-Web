"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import SignupFormField from "./InputFormField";
import { useRouter } from "next/navigation";
import { setUser, setStatus, setError } from "@/redux/auth/authSlice";
import { useDispatch } from "react-redux";
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
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function handleSubmit(data) {
    try {
      console.log("User Input:", data); // Print user input
      dispatch(setStatus("loading"));
      const response = await onSubmit(data);
      console.log("API Response:", response); // Print API response
      localStorage.setItem("accessToken", response.data.data.accessToken);
      localStorage.setItem("id", response.data.data.user._id);
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
      if ( response.data.data.user.role === "business") {
        router.push("/pricing");
      } else {
        router.push(btnLink);  // Redirect on success
      }
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
              {JSON.stringify(error.response.data.message, null, 2)}
            </p>
          </div>
        ),
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0">
      <h3 className="py-4 text-[#351120] text-3xl mb-4">{title}</h3>
      {["signup", "login"].includes(formType) && (
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
          <Button className="bg-white flex items-center justify-center w-full md:w-auto">
            <Image
              src="/images/auth/search-2.png"
              alt="Google"
              className="mr-2"
              width={20}
              height={20}
            />
            Sign up with Google
          </Button>
          <Button className="bg-white flex items-center justify-center w-full md:w-auto">
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
      {formType !== "forgot-password" && (
        <div className="text-center text-zinc-500 mb-4">- or -</div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full md:w-2/3 space-y-6"
        >
          {formType !== "login" && (
            <SignupFormField
              name="name"
              placeholder="Full Name"
              formControl={form.control}
            />
          )}
          <SignupFormField
            name="email"
            placeholder="Email"
            formControl={form.control}
          />
          {["signup", "login"].includes(formType) && (
            <SignupFormField
              name="password"
              placeholder="Password"
              inputType="password"
              formControl={form.control}
            />
          )}
          {linkText && (
            <div className="text-zinc-500 mb-4">
              {linkText}
              <Link href={linkHref} className="text-[#351120] font-bold">
                Click here
              </Link>
              {formType === "signup" ? (
                <>
                  {" "}
                  or{" "}
                  <Link
                    href={"/auth/login"}
                    className="text-[#351120] font-bold"
                  >
                    Login
                  </Link>
                </>
              ) : (
                ""
              )}
            </div>
          )}
          <div className="flex justify-center items-center">
            {/* <Link href={btnLink}> */}
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className="rounded-full"
            >
              {formType === "login"
                ? "Log In"
                : formType === "signup"
                ? "Sign Up"
                : "Send Code"}
            </Button>
            {/* </Link/> */}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DynamicAuthForm;
