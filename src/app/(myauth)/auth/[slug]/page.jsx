"use client";
import Image from "next/image";
import { notFound } from "next/navigation";
import DynamicAuthForm from "@/components/reuseableComponenet/DynamicAuthForm";
import { LoginSchema, SignupSchema, ForgotSchema ,OtpSchema } from "@/validation/auth.validation";
import axiosInstance from '@/axiosInstance';

const AuthCommon = ({ params }) => {
  const slug = params.slug;

  const forms = {
    "user": {
      formType: "signup",
      title: "Sign Up as User",
      schema: SignupSchema,
      linkText: "Are you a business? ",
      linkHref: "/auth/business",
      onSubmit: (data) => axiosInstance.post('/auth/register', { ...data, role: 'user', loginType: 'EMAIL_PASSWORD' },{withCredentials:true}),
      btnLink: "/auth/login",
    },
    "business": {
      formType: "signup",
      title: "Sign Up as Business",
      schema: SignupSchema,
      linkText: "Are you a user? ",
      linkHref: "/auth/user",
      onSubmit: (data) => axiosInstance.post('/auth/register', { ...data, role: 'business', loginType: 'EMAIL_PASSWORD' },{withCredentials:true}),
      btnLink: "/auth/login",
    },
    "login": {
      formType: "login",
      title: "Log In",
      schema: LoginSchema,
      linkText: "Forgot password? ",
      linkHref: "/auth/forgot-password",
      onSubmit: (data) => axiosInstance.post('/auth/login', data,{withCredentials:true}),
      btnLink: "/setting",
    },
    "forgot-password": {
      formType: "forgot-password",
      title: "Forgot Password?",
      schema: ForgotSchema,
      linkText: null,
      linkHref: null,
      onSubmit: (data) => axiosInstance.post('/auth/otp', data),
      btnLink: "/auth/user",
    },
    "verify-otp":{
      formType: "verify-otp",
      title: "Verify User?",
      schema: OtpSchema,
      linkText: null,
      linkHref: "/auth/verify-otp",
      onSubmit: (data) => axiosInstance.post('/auth/verify-otp', data),
      btnLink: "/auth/verify-otp",
    }
  };

  const formProps = forms[slug];

  if (!formProps) return notFound();

  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-[#351120]">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className="absolute rotate-[60deg] opacity-50 top-[-150px] left-0 border-none rounded-xl hidden md:block"
      />
      <div className="bg-[#351120] text-lighttext px-20 py-16 md:py-28 md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-6xl  mb-4 font-ralewayLight">
          REVEAL YOUR <br />
          BEAUTY WITH
        </h1>
        <h2 className="text-7xl md:text-8xl font-normal mb-4 font-valky leading-[80px] md:leading-[100px]">
          Glow <br /> Scout
        </h2>
        <p className="text-lg font-normal font-raleway text-[#EEEEEE]">
          &rdquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
          nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus.&rdquo;
        </p>
      </div>
      <div className="bg-white p-10 md:w-1/2 flex flex-col justify-center rounded-tl-[60px] rounded-bl-3xl font-raleway z-30">
        <DynamicAuthForm {...formProps} />
      </div>
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-3.png"}
        className="absolute rotate-[0deg] opacity-50 bottom-[0px] right-0 border-none rounded-xl hidden md:block z-0"
      />
    </div>
  );
};

export default AuthCommon;
