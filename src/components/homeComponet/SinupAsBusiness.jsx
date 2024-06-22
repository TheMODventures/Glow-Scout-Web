import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const SinupAsBusiness = () => {
  return (
    <div className=" mx-auto py-20 md:mt-6 font-raleway border-b-darkMahron">
      <div className="text-center">
        <h2 className="text-6xl text-darkMahron">Are you a business?</h2>
        <p className="py-10 text-lg">
          People are seeking for the specialist. <br /> Join us now and serve
          your skills
        </p>
        <Link href={"auth/business"}>
          <Button
            variant="outline"
            size="lg"
            className=" rounded-full p-5 border-darkMahron font-bold"
          >
            Sign Up as Business
            <span className="text-sm text-white bg-[#351120]  rounded-full mx-2">
              <ArrowUpRight size={20} color="#fff" />
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SinupAsBusiness;
