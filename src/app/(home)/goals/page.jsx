"use client"; // Ensure this is a client component

import { useState, useEffect } from "react";
import GoalCard from "@/components/reuseableComponenet/GoalCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchGoals } from "@/API/goals.api";

const Page = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getGoals = async () => {
      const data = await fetchGoals();
      setGoals(data.data); // Update state with the correct array of goals
      setLoading(false);
    };
    getGoals();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Optionally add a loading spinner
  }

  return (
    <div className="py-10 md:mt-6">
      <div className="text-center text-darkMahron pb-5">
        <h2 className="text-4xl md:text-6xl font-ralewayLight">Select Goal for your Skin</h2>
        <p className="m-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
        </p>
      </div>

      <div className="container my-5">
        <div className="md:mx-24 grid grid-cols-2 md:grid-cols-4 gap-y-4 mt-6 mb-2 gap-x-4">
          {goals.map((goal, index) => (
            <label htmlFor="input" key={goal._id}> {/* Use unique key */}
              <input name="input" type="radio" className="hidden" />
              <GoalCard key={goal._id} {...goal} number={index} /> {/* Pass individual goal properties */}
            </label>
          ))}
        </div>

        <div className="flex justify-center items-center my-20">
          <Link href={'/treatment'}>
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className="rounded-full m-auto text-white text-xl font-normal"
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
