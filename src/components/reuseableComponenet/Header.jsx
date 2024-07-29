"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ProfileButton from "@/components/reuseableComponenet/ProfileButton";
import { useState } from "react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const routes = [
    { href: "/", label: "Home" },
    { href: "/goals", label: "Goals" },
    { href: "/spas", label: "Spas" },
    { href: "/blog", label: "Blog" },
  ];

  const dropDownData = [
    { href: "/auth/user", label: "SignUp" },
    { href: "/auth/login", label: "SignIn" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 bg-[#F8F8F8]">
      <div className="relative  sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full z-50">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl md:text-3xl font-valky text-[#351120] font-bold">
              Glow Scout
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <nav className="mx-6 items-center space-x-1 lg:space-x-6 hidden md:block font-bold">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i} size="lg">
                <Link
                  href={route.href}
                  className="font-raleway text-[#351120] font-bold text-xl"
                >
                  {route.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex">
          {currentUser ? (
            <ProfileButton />
          ) : (
            <div className="relative">
              <Button
                type="button"
                variant="myCustom"
                size="lg"
                className="hidden md:block rounded-full font-raleway md:text-xl text-[#F6E9CE] px-4 font-black"
                aria-label="login"
                onClick={toggleDropdown}
              >
                Sign In/Up
              </Button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="px-2 py-4">
                  <div className="flex justify-between font-bold px-3 pb-2 items-center border-b-2 border-darkMahron text-darkMahron ">
                    <h2 className=" text-xl ">
                      Sign In/Up
                    </h2>
                    <button onClick={()=>setIsDropdownOpen(false)} className="text-2xl ">
                      x
                    </button>
                    </div>
                    {dropDownData.map((item, i) => (
                      <div key={i} className="mt-4">
                        <Link href={item.href}>
                          <button className="w-full text-start px-4 py-2 text-sm text-darkMahron bg-transparent shadow-none hover:ring-0 hover:rounded-xl hover:bg-gray-100 focus:outline-none">
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

          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full h-screen">
              
            <div className="relative">
              <Button
                type="button"
                variant="myCustom"
                size="lg"
                className="rounded-full font-raleway text-[#F6E9CE] px-4 font-black"
                aria-label="login"
                onClick={toggleDropdown}
              >
                Sign In/Up
              </Button>
              {isDropdownOpen && (
                <div className="absolute mt-2 w-48 bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="px-2 py-4">
                    <div className="flex justify-between font-bold px-3 pb-2 items-center border-b-2 border-darkMahron text-darkMahron ">
                    <h2 className=" text-xl ">
                      Sign In/Up
                    </h2>
                    <button onClick={()=>setIsDropdownOpen(false)} className="text-2xl ">
                      x
                    </button>
                    </div>
                    {dropDownData.map((item, i) => (
                      <div key={i} className="mt-4">
                        <Link href={item.href}>
                          <button className="w-full text-start px-4 py-2 text-sm text-darkMahron bg-transparent shadow-none hover:ring-0 hover:rounded-xl hover:bg-gray-100 focus:outline-none">
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
        className="block px-2 py-1 text-xl"
      >
        {route.label}
      </Link>
    ))}
  </nav>
</div>

            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
