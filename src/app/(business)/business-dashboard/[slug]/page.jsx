import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import AnalyticsComponent from '@/components/businessDashboard/analyticsComponent'

const page = () => {
  return (
    <div className='flex justify-center items-center mt-10 md:mt-28'>
      <Tabs defaultValue="analytics" className="w-[500px] h-10 flex flex-col items-center">
      <TabsList className="h-14 rounded-full px-4 grid w-full grid-cols-3  bg-[#F6E9CE] m-auto">
        <TabsTrigger value="analytics" className="rounded-full py-2">Analytics</TabsTrigger>
        <TabsTrigger value="services" className="rounded-full py-2">Services</TabsTrigger>
        <TabsTrigger value="account" className="rounded-full py-2">Settings</TabsTrigger>
        
      </TabsList>
      <TabsContent value="analytics" className="w-[800px]">

       <AnalyticsComponent />
        
      </TabsContent>
      

    </Tabs>  
    </div>
  )
}

export default page