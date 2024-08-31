"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import  Container  from "@/components/reuseableComponenet/Container";
import { Check } from 'lucide-react';


const PlanAndPricing = () => {
  const router = useRouter();
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("platinum");
  const data = [
    { icon: <Check strokeWidth={1.5} size={15} className="bg-darkMahron text-white rounded-full" />, label: "Lorem Ipsum" },
    { icon: <Check strokeWidth={1.5} size={15} className="bg-darkMahron text-white rounded-full"  />, label: "Lorem Ipsum" },
    { icon: <Check strokeWidth={1.5} size={15} className="bg-darkMahron text-white rounded-full"  />, label: "Lorem Ipsum" },
  ];
  const handleNext = () => {
    const id = localStorage.getItem("id");
    if (selectedPlan) {
      router.push(`/business-dashboard`);
    }
  };
  return (
    <Container>
    <div className="mx-auto min-h-screen md:mx-10   px-4">
      <div className="flex justify-center items-center min-h-screen">
        <div className="md:p-6 py-6 rounded-lg w-full">
          <div className="text-center text-darkMahron pb-5">
            <h2 className="text-4xl md:text-6xl font-ralewayLight">
              {" "}
              Plans & Pricing{" "}
            </h2>
            <p className="m-2 text-sm md:text-lg font-raleway pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus.
            </p>
          </div>
          <div className="bg-white border-2 border-darkMahron rounded-xl px-4 py-5 md:px-16 flex justify-center items-center">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-end items-center">
              <TabsList className="grid w-[200px]  grid-cols-2 rounded-full border-2 border-darkMahron h-12 justify-center items-center">
                <TabsTrigger value="monthly" className="h-[36px]">Monthly</TabsTrigger>
                <TabsTrigger value="annual" className="h-[36px]">Annual</TabsTrigger>
              </TabsList>
              </div>
              <TabsContent value="monthly">
                <div className="py-4 text-darkMahron grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-5 font-raleway">
                  <div className="bg-white p-4 md:border-l border-darkMahron md:border-0 md:border-transparent">
                    <h2 className="text-xl md:text-3xl font-semibold">
                      $19{" "}
                      <span className="text-muted-foreground text-sm">
                        /month
                      </span>
                    </h2>
                    <h3 className="text-lg font-bold md:mt-3">Silver</h3>
                    <p className="text-lg  text-darkMahron font-raleway my-2">
                      Unleash the power of automation.
                    </p>
                    <div className="list-disc list-inside text-darkMahron mb-4">
                      {data.map((items, key) => (
                        <div
                          key={key}
                          className="flex justify-start items-center gap-2"
                        >
                          <div className="text-sm">{items.icon}</div>
                          <p className="text-sm font-normal">{items.label}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPlan("silver")}
                      className={` block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full ${
                        selectedPlan === "silver"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                    >
                      {selectedPlan === "silver" ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                  <div className="bg-white md:border-l border-darkMahron p-4">
                    <h2 className="text-xl md:text-3xl font-semibold">
                      $29{" "}
                      <span className="text-muted-foreground text-sm">
                        /month
                      </span>
                    </h2>
                    <h3 className="text-lg font-bold md:mt-3">Gold</h3>
                    <p className="text-lg  text-darkMahron font-raleway my-2">
                      Unleash the power of automation.
                    </p>
                    <div className="list-disc list-inside text-darkMahron mb-4">
                      {data.map((items, key) => (
                        <div
                          key={key}
                          className="flex justify-start items-center gap-2"
                        >
                          <div className="text-sm">{items.icon}</div>
                          <p className="text-sm font-normal">{items.label}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPlan("gold")}
                      className={` block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full ${
                        selectedPlan === "gold"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                    >
                      {selectedPlan === "gold" ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                  <div className="bg-white md:border-l border-darkMahron p-4">
                    <h2 className="text-xl md:text-3xl font-semibold">
                      $39{" "}
                      <span className="text-muted-foreground text-sm">
                        /month
                      </span>
                    </h2>
                    <h3 className="text-lg font-bold md:mt-3">Platinum</h3>
                    <p className="text-lg  text-darkMahron font-raleway my-2">
                      Unleash the power of automation.
                    </p>
                    <div className="list-disc list-inside text-darkMahron mb-4">
                      {data.map((items, key) => (
                        <div
                          key={key}
                          className="flex justify-start items-center gap-2"
                        >
                          <div className="text-sm">{items.icon}</div>
                          <p className="text-sm font-normal">{items.label}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPlan("platinum")}
                      className={`block md:hidden ml-3 text-darkMahron font-raleway border-2 font-bold border-darkMahron p-2 rounded-full w-full ${
                        selectedPlan === "platinum"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                    >
                      {selectedPlan === "platinum" ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                </div>
                <div className="md:flex hidden md:flex-row justify-center items-center gap-4 md:gap-x-10 xl:gap-x-16 md:mb-4">
                  <button
                    onClick={() => setSelectedPlan("silver")}
                    className={` border-2 font-bold border-darkMahron font-raleway px-4 py-2  rounded-full w-1/4 ${
                      selectedPlan === "silver"
                        ? "bg-darkMahron text-white"
                        : "bg-transparent text-darkMahron"
                    }`}
                  >
                    {selectedPlan === "silver" ? "Selected" : "Choose Plan"}
                  </button>
                  <button
                    onClick={() => setSelectedPlan("gold")}
                    className={` border-2 font-bold border-darkMahron font-raleway px-4 py-2  rounded-full w-1/4 ${
                      selectedPlan === "gold"
                        ? "bg-darkMahron text-white"
                        : "bg-transparent text-darkMahron"
                    }`}
                  >
                    {selectedPlan === "gold" ? "Selected" : "Choose Plan"}
                  </button>
                  <button
                    onClick={() => setSelectedPlan("platinum")}
                    className={` border-2 font-bold border-darkMahron px-4 py-2 font-raleway  rounded-full w-1/4 ${
                      selectedPlan === "platinum"
                        ? "bg-darkMahron text-white"
                        : "bg-transparent text-darkMahron"
                    }`}
                  >
                    {selectedPlan === "platinum" ? "Selected" : "Choose Plan"}
                  </button>
                </div>
              </TabsContent>
              <TabsContent value="annual">
              <div className="py-4 text-darkMahron grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-5 font-raleway">
                  <div className="bg-white p-4 md:border-l border-darkMahron md:border-0 md:border-transparent">
                    <h2 className="text-xl md:text-3xl font-semibold">
                      $228{" "}
                      <span className="text-muted-foreground text-sm">
                        /year
                      </span>
                    </h2>
                    <h3 className="text-lg font-bold md:mt-3">Silver</h3>
                    <p className="text-lg  text-darkMahron font-raleway my-2">
                      Unleash the power of automation.
                    </p>
                    <div className="list-disc list-inside text-darkMahron mb-4">
                      {data.map((items, key) => (
                        <div
                          key={key}
                          className="flex justify-start items-center gap-2"
                        >
                          <div className="text-sm">{items.icon}</div>
                          <p className="text-sm font-normal">{items.label}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPlan("silver")}
                      className={` block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full ${
                        selectedPlan === "silver"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                    >
                      {selectedPlan === "silver" ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                  <div className="bg-white md:border-l border-darkMahron p-4">
                    <h2 className="text-xl md:text-3xl font-semibold">
                      $348{" "}
                      <span className="text-muted-foreground text-sm">
                        /year
                      </span>
                    </h2>
                    <h3 className="text-lg font-bold md:mt-3">Gold</h3>
                    <p className="text-lg  text-darkMahron font-raleway my-2">
                      Unleash the power of automation.
                    </p>
                    <div className="list-disc list-inside text-darkMahron mb-4">
                      {data.map((items, key) => (
                        <div
                          key={key}
                          className="flex justify-start items-center gap-2"
                        >
                          <div className="text-sm">{items.icon}</div>
                          <p className="text-sm font-normal">{items.label}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPlan("gold")}
                      className={` block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full ${
                        selectedPlan === "gold"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                    >
                      {selectedPlan === "gold" ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                  <div className="bg-white md:border-l border-darkMahron p-4">
                    <h2 className="text-xl md:text-3xl font-semibold">
                      $468{" "}
                      <span className="text-muted-foreground text-sm">
                        /year
                      </span>
                    </h2>
                    <h3 className="text-lg font-bold md:mt-3">Platinum</h3>
                    <p className="text-lg  text-darkMahron font-raleway my-2">
                      Unleash the power of automation.
                    </p>
                    <div className="list-disc list-inside text-darkMahron mb-4">
                      {data.map((items, key) => (
                        <div
                          key={key}
                          className="flex justify-start items-center gap-2"
                        >
                          <div className="text-sm">{items.icon}</div>
                          <p className="text-sm font-normal">{items.label}</p>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPlan("platinum")}
                      className={`block md:hidden ml-3 text-darkMahron font-raleway border-2 font-bold border-darkMahron p-2 rounded-full w-full ${
                        selectedPlan === "platinum"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                    >
                      {selectedPlan === "platinum" ? "Selected" : "Choose Plan"}
                    </button>
                  </div>
                </div>
                <div className="md:flex hidden md:flex-row justify-center items-center gap-4 md:gap-x-10 xl:gap-x-16 mb-4">
                  <button
                    onClick={() => setSelectedPlan("silver")}
                    className={` border-2 font-bold border-darkMahron font-raleway px-4 py-2  rounded-full w-1/4 ${
                      selectedPlan === "silver"
                        ? "bg-darkMahron text-white"
                        : "bg-transparent text-darkMahron"
                    }`}
                  >
                    {selectedPlan === "silver" ? "Selected" : "Choose Plan"}
                  </button>
                  <button
                    onClick={() => setSelectedPlan("gold")}
                    className={` border-2 font-bold border-darkMahron font-raleway px-4 py-2  rounded-full w-1/4 ${
                      selectedPlan === "gold"
                        ? "bg-darkMahron text-white"
                        : "bg-transparent text-darkMahron"
                    }`}
                  >
                    {selectedPlan === "gold" ? "Selected" : "Choose Plan"}
                  </button>
                  <button
                    onClick={() => setSelectedPlan("platinum")}
                    className={` border-2 font-bold border-darkMahron px-4 py-2 font-raleway  rounded-full w-1/4 ${
                      selectedPlan === "platinum"
                        ? "bg-darkMahron text-white"
                        : "bg-transparent text-darkMahron"
                    }`}
                  >
                    {selectedPlan === "platinum" ? "Selected" : "Choose Plan"}
                  </button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div className="flex justify-center items-center">
            <Button
              onClick={handleNext}
              variant="myCustom"
              className="py-5 px-10 md:text-lg mt-6 rounded-full font-raleway"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default PlanAndPricing;
