"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ProfileButton from "@/components/reuseableComponenet/ProfileButton";
import { useState } from "react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/treatment", label: "Treatments" },
    { href: "/spas", label: "Spas" },
    { href: "/blog", label: "Blog" },
  ];

  const dropDownData = [
    { href: "/auth/user", label: "User" },
    { href: "/auth/business", label: "Business" },
    { href: "/auth/login", label: "Login" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleSheet = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 bg-[#F8F8F8]  border-b-2 border-darkMahron">
      <div className="relative  sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full z-50">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-valky text-[#351120] font-bold">
              Glow Scout
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <nav className="mx-6 items-center space-x-1 lg:space-x-16 hidden md:block font-bold">
            {routes.map((route, i) => (
              <button key={i}>
                <Link
                  href={route.href}
                  className="font-raleway text-[#351120] font-bold text-xl"
                >
                  {route.label}
                </Link>
              </button>
            ))}
          </nav>
        </div>

        <div className="flex">
          {currentUser ? (
            <ProfileButton />
          ) : (
            <div className="relative">
              <button
                    className="hidden md:block rounded-full font-raleway bg-darkMahron text-[#F6E9CE] px-4 py-2 font-normal text-lg"
                    aria-label="login"
                    onClick={toggleDropdown}
                  >
                    Sign In/Up
                  </button>
              {isDropdownOpen && (
                <div className="absolute font-raleway right-0 mt-2 w-52 bg-white rounded-2xl px-2 shadow-md overflow-hidden">
                  <div className="px-2 py-4">
                    <div className="flex justify-start font-extrabold  pb-1 items-start border-b border-darkMahron text-darkMahron ">
                      <h2
                        onClick={() => setIsDropdownOpen(false)}
                        className="cursor-pointer text-2xl font-bold"
                      >
                        Sign Up as
                      </h2>
                    </div>
                    {dropDownData.map((item, i) => (
                      <div key={i} className="">
                        <Link href={item.href}>
                          <button className="w-full text-start px-1 py-2 text-lg text-darkMahron bg-transparent shadow-none hover:ring-0 hover:rounded-md hover:bg-gray-100 focus:outline-none">
                            {item.label}
                          </button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="relative">
            <button onClick={toggleSheet} className="h-6 w-6 md:hidden text-darkMahron">
              <Menu />
            </button>
            {isSheetOpen && (
              <div className="fixed right-0 top-0 w-full h-screen bg-white shadow-lg z-50 md:hidden">
                <div className="relative p-4">
                  <button
                    className="rounded-full font-raleway bg-darkMahron text-[#F6E9CE] px-6 py-2 font-black bg-myCustom text-lg"
                    aria-label="login"
                    onClick={toggleDropdown}
                  >
                    Sign In
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-2 mt-2 w-52 bg-white rounded-2xl px-2 shadow-md overflow-hidden">
                      <div className="px-2 py-4">
                        <div className="flex justify-start pb-1 items-start border-b border-darkMahron text-darkMahron">
                          <h2
                            onClick={() => setIsDropdownOpen(false)}
                            className="cursor-pointer text-2xl font-bold"
                          >
                            Sign Up as
                          </h2>
                        </div>
                        {dropDownData.map((item, i) => (
                          <div key={i}>
                            <Link href={item.href}>
                              <button className="w-full text-start px-1 py-2 text-sm text-darkMahron bg-transparent shadow-none hover:bg-gray-100 focus:outline-none">
                                {item.label}
                              </button>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="h-screen flex justify-center items-center">
                  <nav className="flex flex-col justify-center items-center gap-4">
                    {routes.map((route, i) => (
                      <Link
                        key={i}
                        href={route.href}
                        onClick={closeSheet} // Close the sheet when a route is clicked
                        className="block px-2 py-1 text-xl"
                      >
                        {route.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
