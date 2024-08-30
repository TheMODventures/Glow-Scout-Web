import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SinupAsBusiness = () => {
  return (
    <div className=" mx-auto md:py-20 py-10 md:mt-6  border-b-darkMahron">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl text-darkMahron font-raleway md:font-ralewayLight">Are you a Business?</h2>
        <p className="py-10 text-lg font-raleway">
          People are seeking for the specialist. <br /> Join us now and serve
          your skills
        </p>
        <Link href={"/auth/business"}>
          <Button
            variant="outline"
            size="lg"
            className=" rounded-full border-2  p-5 border-darkMahron font-raleway text-lg font-extrabold"
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
