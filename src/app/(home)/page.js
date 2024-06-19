import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BookNow from "@/components/myCustom/BookNow";
import Container from "@/components/myCustom/Container";
import TrandingTreatment from "@/components/myCustom/TrandingTreatment";
import ClientTestimonials from "@/components/myCustom/ClientTestimonials";
import Link from "next/link";

export default function Widget() {
  return (
    <>
      
      <div className=" dark:bg-zinc-900 py-12 px-6 md:px-14 lg:px-24 flex flex-col md:flex-row items-center justify-between text-darkMahron relative isolate ">
      {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-lighttext to-[#F6E9CE] opacity-80 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        <div className="flex-1 text-center md:text-left  md:pr-20">
          <h1 className="text-3xl md:text-6xl font-light font-raleway text-darkMahron">
            REVEAL YOUR <br />
            BEAUTY WITH
          </h1>
          <h2 className="text-7xl md:text-8xl font-normal mb-2 font-valky leading-[80px] md:leading-[150px]">
            Glow Scout
          </h2>
          <p className="text-lg font-normal font-raleway mb-6">
          &rdquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Ut ut nibh
            faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
            Ut ut nibh faucibus.&rdquo;
          </p>
          <Link href={'auth/user'}>
          <Button variant="outline" size="lg" className=" rounded-full p-5">
            Sign Up
            <span className="text-sm text-white bg-[#351120]  rounded-full mx-2"><ArrowUpRight size={20} color="#fff" /></span>
          </Button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-6 md:mt-0 relative">
          <Image
            src="/images/home/hero-1.png"
            alt="Woman"
            className="rounded-full shadow-lg"
            width={800}
            height={400}
          />
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/home/hero-1.png"
              alt="Decoration"
              className="w-12 h-12"
              width={50}
              height={50}
            />
          </div>
          {/* <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-lighttext to-[#F6E9CE] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div> */}
        </div>
      </div>
      <div className="mb-5">
      <BookNow />
      </div>


      {/* home scot work start  */}
      <div className=" bg-[#FEF5E3] text-center py-20 rounded-t-3xl border">
      <Container>

      
          <h2 className="text-5xl font-normal text-brown-dark mb-8 mt-4 font-raleway">How Glow Scout Works</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 gap-4">
            <div className="bg-cream p-6 rounded-lg shadow-md w-48 md:min-h-[500px] flex justify-between flex-col bg-[#F6E9CE]">
              <div className="text-4xl font-bold text-brown-dark mb-2">01</div>
              <div className="text-3xl text-brown-dark font-raleway">Sign Up</div>
            </div>
            <div className="bg-cream p-6 rounded-lg shadow-md w-48 md:min-h-[500px] flex justify-between flex-col bg-[#F6E9CE]">
              <div className="text-4xl font-bold text-brown-dark mb-2">02</div>
              <div className="text-3xl text-brown-dark font-raleway">Select your Beauty Goals</div>
            </div>
            <div className="bg-cream p-6 rounded-lg shadow-md w-48 md:min-h-[500px] flex justify-between flex-col bg-[#F6E9CE]">
              <div className="text-4xl font-bold text-brown-dark mb-2">03</div>
              <div className="text-3xl text-brown-dark font-raleway">Select Treatment</div>
            </div>
            <div className="bg-cream p-6 rounded-lg shadow-md w-48 md:min-h-[500px] flex justify-between flex-col bg-[#F6E9CE]">
              <div className="text-4xl font-bold text-brown-dark mb-2">04</div>
              <div className="text-3xl text-brown-dark font-raleway">Select Spa</div>
            </div>
          </div>
          
          <Button type="submit" variant="myCustom" size="lg" className="rounded-full mt-8">
          Book Now!
          </Button>
      </Container>
      </div>

      {/* home scot work end  */}


      {/* tranding treatment start */}

      <TrandingTreatment />
    
      {/* tranding treatment end */}

      {/* client testimonial start */}

      <div>
      <ClientTestimonials />
      </div>

      {/* client testimonial end  */}

      {/* about glow start  */}


      <div className=" bg-darkMahron font-raleway text-lighttext flex flex-col py-10 md:py-40 md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex-shrink-0">
            <Image src="/images/home/flow-about-1.png" alt="Left Image" className="rounded-lg shadow-lg" width={300} height={300}/>
          </div>
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-6xl mb-4 font-raleway text-center">About<br/>&rdquo;Glow Scout&rdquo;</h2>
            <p className="text-lg leading-relaxed pb-3 px-3 md:px-1 font-raleway text-center">
            &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image src="/images/home/flow-about-2.png" alt="Right Image" className="rounded-lg shadow-lg" width={300} height={300}/>
          </div>
        </div>

        {/* about glow end  */}


        {/* signup for business section start  */}

        <div className=" mx-auto py-20 md:mt-6 font-raleway border-b-darkMahron">
        <div className="text-center">
        <h2 className="text-6xl text-darkMahron">Are you a business?</h2>
        <p className="py-10 text-lg">People are seeking for the specialist. <br/> Join us now and serve your skills</p>
        <Link href={'auth/business'}>
        <Button variant="outline" size="lg" className=" rounded-full p-5 border-darkMahron font-bold">
        Sign Up as Business
            <span className="text-sm text-white bg-[#351120]  rounded-full mx-2"><ArrowUpRight size={20} color="#fff" /></span>
          </Button>
          </Link>
      </div>
    </div>

    {/* signup for business section  end*/}
    </>
  );
}
