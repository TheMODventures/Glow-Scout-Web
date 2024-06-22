import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '@/components/ui/Button'
import { ArrowUpRight } from 'lucide-react'

const HeroSection = () => {
  return (
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
  )
}

export default HeroSection