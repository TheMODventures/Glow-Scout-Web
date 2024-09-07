"use client";

import { useEffect, useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import FilterSelect from "../reuseableComponenet/FilterSelect";
import InputFormField from "../reuseableComponenet/InputFormField";
import { CreatTreatmentSchema } from "@/validation/business.validation";
import { Input } from "@/components/ui/input";
import { updateTreatment } from "@/API/business.api";
import Image from "next/image";
import { ThreeDots } from "react-loader-spinner";

const UpdateTreatment = ({ treatment, onDiscard }) => {
  const { toast } = useToast();
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef();
  const [uploadedImage, setUploadedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(CreatTreatmentSchema),
    defaultValues: treatment,
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setUploadedImage(URL.createObjectURL(file));
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
    }

    setLoading(true);

    try {
      const response = await updateTreatment(treatment._id, formData);
      console.log(response);
      if (response.ok) {
        toast({
          description: "Treatment Updated successfully.",
        });
      }

      if (!response.ok) {
        toast({
          description: response.message,
        });
      }

      onDiscard();
    } catch (error) {
      console.error("API call error:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      });
    } finally {
      setLoading(false);
    }
  }

  function getGoalId(goal) {
    const goalsMap = {
      goal1: "64e1f8b34e5c35a2c4567890",
      goal2: "64e1f8b34e5c35a2c4567891",
      goal3: "64e1f8b34e5c35a2c4567892",
    };
    return goalsMap[goal] || goal;
  }

  const selectGoals = [
    { value: "goal1", label: "Goal 1" },
    { value: "goal2", label: "Goal 2" },
    { value: "goal3", label: "Goal 3" },
  ];

  return (
    <div className="mx-auto min-h-screen relative md:px-4">
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#351120"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className="mt-10 lg:mt-20 xl:mt-30 flex items-center justify-center">
        <div className="bg-white border-2 border-darkMahron rounded-lg px-8 py-4 sm:py-8 sm:px-20 w-full h-full md:max-w-[70%] md:max-h-[50%]">
          <h1 className="text-3xl sm:text-5xl font-ralewayThin font-thin mb-6 md:mb-12 text-center text-darkMahron">
            Update Treatment
          </h1>
          <div className="mb-6 flex justify-center font-raleway">
            <div className=" relative flex flex-col justify-center items-center text-center rounded-xl bg-[#F0F0F0] w-64 h-40 border-2 border-darkMahron">
              <div className=" absolute z-0 bottom-2 ">
                <Image
                  alt="img"
                  src={uploadedImage || treatment.image}
                  width={170}
                  height={100}
                  className=" rounded-xl opacity-60 w-[240px] h-[140px]"
                />
              </div>
              <div
                className="mb-2 cursor-pointer z-10"
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
                  />
                </svg>
              </div>
              <p className="text-sm md:text-base font-raleway font-semibold text-darkMahron z-10">
                {uploadedImage ? "Image Updated" : "Update Image"}
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

export default UpdateTreatment;
