import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BusinessHeader = () => {
  return (
    <div className=" border-b-2 text-darkMahron border-darkMahron">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl md:text-3xl font-bold text-green font-valky text-[#351120]">
              Glow Scout
            </h1>
          </Link>
          <span className=" font-raleway">Business Dashboard</span>
        </div>
        <div className="flex items-center gap-1">
          <Link href="/spas" className="ml-4 lg:ml-0">
            <h1 className="text-xl md:text-2xl font-light text-green font-raleway text-[#351120] italic">
              Go to your Spa Page
            </h1>
          </Link>
          <span className="text-sm text-white bg-[#351120]  rounded-full mx-2">
            <ArrowUpRight size={20} color="#fff" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
