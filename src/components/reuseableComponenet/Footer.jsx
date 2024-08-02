import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 border-darkMahron ">
      <div className=" mx-5  pt-8 ">
        <Container>
          <div className="bg-black text-white p-8 rounded-t-xl min-h-60">
            <div className="flex flex-col md:flex-row justify-around">
              <div className="flex justify-center items-center w-15">
                <h2 className="text-6xl font-valky text-lighttext mb-12 md:mb-0">
                  Glow <br /> Scout
                </h2>
              </div>
              <div className="flex flex-col md:flex-row  md:space-y-0 md:space-x-24 font-raleway text-center text-lighttext">
                <div>
                  <h3 className="font-semibold mb-2 text-lg md:text-xl">Quick Links</h3>
                  <ul className="space-y-2 py-2">
                    <li>
                      <Link href="/" className="hover:underline text-base md:text-lg">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/treatment" className="hover:underline text-base md:text-lg">
                        Treatments
                      </Link>
                    </li>
                    <li>
                      <Link href="/spas" className="hover:underline text-base md:text-lg">
                        Spas
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="hover:underline text-base md:text-lg">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>
                    <Link href="/privacy-policy" className="hover:underline text-base md:text-lg my-2">
                      Privacy Policy{" "}
                    </Link>
                  </h3>
                  <ul className="space-y-2  py-2">
                    <li>
                      <Link
                        href="/terms-conditions"
                        className="hover:underline text-base md:text-lg"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:underline text-base md:text-lg">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mt-2 md:mt-0 mb-2 text-lg md:text-xl">Follow Us</h3>
                  <ul className="space-y-2  py-2">
                    <li>
                      <Link href="#" className="hover:underline text-base md:text-lg">
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline text-base md:text-lg">
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:underline text-base md:text-lg">
                        YouTube
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
