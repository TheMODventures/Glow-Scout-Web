"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ProfileButton from "@/components/reuseableComponenet/ProfileButton";
import { useState } from "react";

const Header = () => {
  const [currentUser, setCurrentUser] = useState(false);
  const routes = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/goals",
      label: "Goals",
    },
    {
      href: "/spas",
      label: "Spas",
    },
    {
      href: "/blog",
      label: "Blog",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 bg-[#F8F8F8]">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl md:text-3xl font-bold text-green font-valky text-[#351120]">
              Glow Scout
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:block font-bold">
            {routes.map((route, i) => (
              <Button asChild variant="ghost" key={i} size="lg">
                <Link
                  href={route.href}
                  className="font-raleway text-[#351120] font-bold text-lg "
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
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className=" hidden md:block rounded-full font-raleway text-[#F6E9CE] px-4"
              aria-label="login"
            >
              <Link href="/auth/user">Sign In/Up</Link>
            </Button>
          )}
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route, i) => (
                  <Link
                    key={i}
                    href={route.href}
                    className="block px-2 py-1 text-lg"
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
