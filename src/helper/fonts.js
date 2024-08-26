import localFont from "next/font/local";

const valky = localFont({
    src: [
      {
        path: "../../public/fonts/ValkyRegular.ttf",
        weight: "400",
      },
    ],
    variable: "--font-valky",
  });
  
  const raleway = localFont({
    src: [
      {
        path: "../../public/fonts/Raleway-Regular.ttf",
        weight: "100",
      },
    ],
    variable: "--font-raleway",
  });
  
  const ralewayLight = localFont({
    src: [
      {
        path: "../../public/fonts/Raleway-Light.ttf",
        weight: "300",
      },
    ],
    variable: "--font-raleway-light",
  });

  export{valky, raleway , ralewayLight};