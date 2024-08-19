import "@/app/globals.css";
import BusinessHeader from "@/components/businessDashboard/BusinessHeader";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import Image from "next/image";
import ReduxProvider from "@/app/ReduxProvider";
import { Raleway } from 'next/font/google'

const RalewayThin = Raleway({
  weight: '300',
  subsets: ['latin'],
  variable: "--font-raleway-thin",
})

const valky = localFont({
  src: [
    {
      path: "../../../../../public/fonts/ValkyRegular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-valky",
});

const raleway = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Raleway-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Business Dashboard",
  description:
    "Business Dashboard is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Business Dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${valky.variable} ${raleway.variable} ${RalewayThin.variable} font-sans`}
    >
      <body>
        <ReduxProvider>
          <BusinessHeader />
          <Image
            width={300}
            height={300}
            alt="bg"
            src={"/images/shadow-1.png"}
            className="absolute top-[70px] right-0 z-1 hidden md:block"
            style={{ zIndex: -1 }}
          />
          <div className="relative z-10">{children}</div>
          <Image
            width={300}
            height={300}
            alt="bg"
            src={"/images/shadow-2.png"}
            className="absolute -bottom-48 left-0 z-1 hidden md:block"
            style={{ zIndex: -1 }}
          />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
