import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import Header from "@/components/reuseableComponenet/Header";
import Footer from "@/components/reuseableComponenet/Footer";
import Image from "next/image";
const ReduxProvider = dynamic(
  () => import('@/app/ReduxProvider'),
  { ssr: false }
);
import {valky, raleway , ralewayLight} from "@/helper/fonts.js"


export const metadata = {
  title: "Glow Scout",
  description:
    "Glow Scout is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Glow Scout.",
};

export default function RootLayout({ children }) {

  return (
    <html
      lang="en"
      className={`${valky.variable} ${raleway.variable} ${ralewayLight.variable} font-sans`}
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
