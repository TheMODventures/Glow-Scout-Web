"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import FilterSelect from "../reuseableComponenet/FilterSelect";
import InputFormField from "../reuseableComponenet/InputFormField";
import { CreatTreatmentSchema } from "@/validation/business.validation";
import { Input } from "@/components/ui/input"
import { useRef, useState } from 'react';

const CreateTreatment = ({ onSubmit ,onDiscard  }) => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState({});

  const form = useForm({
    resolver: zodResolver(CreatTreatmentSchema),
  });

  const filePickerRef = useRef();

  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      console.log("Selected file:", file);
    } else {
      console.error("Unsupported file type.");
    }
  };

  async function handleSubmit(data) {
    const goalId = getGoalId(data.goal); 
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("goal", goalId); 
    formData.append("description", data.description);
    formData.append("price", data.price);

    if (selectedFile) {
        formData.append("image", selectedFile);
    } else {
        console.error("No file selected");
    }

    try {
        const response = await onSubmit(formData);
        console.log(response);
        toast({
            description: (
                <div className="w-[200px] rounded-md bg-green-600 py-1 px-2 flex justify-between items-center">
                    <p className="h-4 w-4 bg-white text-green-500 rounded-sm text-center font-bold">
                        ✓
                    </p>
                    <p className="text-white text-base text-center">Submitted</p>
                </div>
            ),
        });
    } catch (error) {
        console.error("API call error:", error);
        toast({
            description: (
                <div className="w-[200px] rounded-md bg-red-600 py-1 px-2 flex justify-between items-center">
                    <p className="h-4 w-4 bg-white text-red-500 rounded-sm text-center font-bold">
                        X
                    </p>
                    <p className="text-white text-base text-center">Error</p>
                </div>
            ),
        });
    }
}

function getGoalId(goal) {
    const goalsMap = {
        "goal1": "64e1f8b34e5c35a2c4567890", 
        "goal2": "64e1f8b34e5c35a2c4567891", 
        "goal3": "64e1f8b34e5c35a2c4567892",
    };
    return goalsMap[goal] || goal;
}

  

  const selectGoals = [
    { value: "goal1", label: "Goal 1" },
    { value: "goal2", label: "Goal 2" },
    { value: "goal3", label: "Goal 3" },
  ];

  const Add = () => {
    return (
      <svg
        className="w-8 h-8 p-2 text-darkMahron border-2 border-darkMahron rounded-lg mb-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
    );
  };

  return (
    <div className="mx-auto min-h-screen relative md:px-4">
      <div className="mt-10 lg:mt-20 xl:mt-30 flex items-center justify-center">
        <div className="bg-white border-2 border-darkMahron rounded-lg px-8 py-4 sm:py-8 sm:px-20 w-full h-full md:max-w-[70%] md:max-h-[50%]">
          <h1 className="text-3xl sm:text-5xl font-ralewayLight font-thin mb-6 text-center text-darkMahron">
            Create Treatment
          </h1>
          <div className="mb-6 flex justify-center font-raleway">
            <div className="flex flex-col justify-center items-center text-center rounded-xl bg-[#F0F0F0] w-64 h-40 border-2 border-darkMahron">
              <div
                className="mb-2 cursor-pointer"
                onClick={() => filePickerRef.current.click()}
              >
                <Input
                  name="image"
                  id="image"
                  type="file"
                  ref={filePickerRef}
                  className="hidden"
                  onChange={handleFileChange}
                />
                <Add />
              </div>
              <p className="text-sm md:ext-base font-raleway font-semibold text-darkMahron">
                Upload Image
              </p>
            </div>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              encType="multipart/form-data"
              className="grid grid-cols-2 gap-4 font-raleway"
            >
              <div className="mb-4 col-span-2 sm:col-span-1">
                <InputFormField
                  name="title"
                  placeholder="Treatment name"
                  formControl={form.control}
                  inputType="text"
                />
              </div>
              <div className="mb-4 col-span-2 sm:col-span-1">
                <FilterSelect
                  selectItems={selectGoals}
                  placeholder="Select Goal"
                  Control={form.control}
                  name="goal"
                  customClass="w-full py-6"
                />
              </div>
              <div className="mb-4 col-span-2 sm:col-span-1">
                <InputFormField
                  name="description"
                  placeholder="Description"
                  formControl={form.control}
                  inputType="text"
                />
              </div>
              <div className="mb-4 col-span-2 sm:col-span-1">
                <InputFormField
                  name="price"
                  placeholder="Price"
                  formControl={form.control}
                  inputType="tel"
                />
              </div>
              <div className="flex justify-center space-x-3 col-span-2">
                <button
                  type="button"
                  onClick={onDiscard}
                  className="py-2 px-4 w-32 font-semibold bg-white border-2 border-darkMahron text-darkMahron rounded-full hover:bg-gray-100"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 w-32 bg-darkMahron text-white rounded-full hover:bg-opacity-90"
                >
                  Save
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateTreatment;
