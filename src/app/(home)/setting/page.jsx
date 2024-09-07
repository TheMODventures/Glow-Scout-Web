"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";
import UserSetting from "@/components/reuseableComponenet/UserSetting";

const Setting = () => {
  const cookies = parseCookies();
  let accessToken = cookies.accessToken;
  const router=useRouter()

  useEffect(()=>{
    if(!accessToken){
      router.push("/auth/login")
    }
  },[accessToken])

  
  

  return (
    <>
      <UserSetting />
    </>
  );
};

export default Setting;
