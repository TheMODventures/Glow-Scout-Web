import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import Header from "@/components/reuseableComponenet/Header";
import Footer from "@/components/reuseableComponenet/Footer";
import Image from "next/image";
import ReduxProvider from "@/app/ReduxProvider";

const valky = localFont({
  src: [
    {
      path: "../../../public/fonts/ValkyRegular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-valky",
});

const raleway = localFont({
  src: [
    {
      path: "../../../public/fonts/Raleway-Regular.ttf",
      weight: "100",
    },
  ],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Glow Scout",
  description:
    "Glow Scout is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Glow Scout.",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${valky.variable} ${raleway.variable}  font-sans`}
    >
      <body>
        <ReduxProvider>
          <Header />
          <Image
            width={300}
            height={300}
            alt="bg"
            src={"/images/shadow-1.png"}
            className="absolute top-24 right-0 z-1 hidden md:block"
            style={{ zIndex: -1 }}
          />
          <div className="relative z-10">{children}</div>
          <Image
            width={300}
            height={300}
            alt="bg"
            src={"/images/shadow-2.png"}
            className="absolute -bottom-56 left-0 z-1 hidden md:block"
            style={{ zIndex: -1 }}
          />
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
