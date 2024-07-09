import React from 'react'
import Container from '../myCustom/Container'
import {Button} from '../ui/button'
import Link from 'next/link'

const ScotWorkSection = () => {
  return (
    <div className=" bg-[#FEF5E3] text-center py-20 rounded-t-3xl border">
    <Container>

    
        <h2 className="text-6xl md:text-5xl font-light text-brown-dark mb-8 mt-4 font-raleway">How Glow Scout Works</h2>
        <div className=" px-5 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 gap-4">
          <div className="bg-cream p-6 rounded-lg shadow-md w-full  md:w-48 md:min-h-[400px] flex justify-between md:flex-col bg-[#F6E9CE]">
            <div className="text-4xl font-bold text-brown-dark mb-2">01</div>
            <div className="text-4xl text-brown-dark font-raleway">Sign Up</div>
          </div>
          <div className="bg-cream p-6 rounded-lg shadow-md w-full  md:w-48 md:min-h-[400px] flex justify-between md:flex-col items-center bg-[#F6E9CE]">
            <div className="text-4xl font-bold text-brown-dark mb-2">02</div>
            <div className="text-4xl text-right md:text-center  text-brown-dark font-raleway">Select your Beauty Goals</div>
          </div>
          <div className="bg-cream p-6 rounded-lg shadow-md w-full  md:w-48 md:min-h-[400px] flex justify-between md:flex-col bg-[#F6E9CE]">
            <div className="text-4xl font-bold text-brown-dark mb-2">03</div>
            <div className="text-4xl text-right md:text-center text-brown-dark font-raleway">Select Treatment</div>
          </div>
          <div className="bg-cream p-6 rounded-lg shadow-md w-full  md:w-48 md:min-h-[400px] flex justify-between md:flex-col bg-[#F6E9CE]">
            <div className="text-4xl font-bold text-brown-dark mb-2">04</div>
            <div className="text-4xl text-brown-dark font-raleway">Select Spa</div>
          </div>
        </div>
        
        <Link href="/">
        <Button type="submit" variant="myCustom" size="lg" className="rounded-full mt-8">
        Get Started
        </Button>
        </Link>
    </Container>
    </div>
  )
}

export default ScotWorkSection