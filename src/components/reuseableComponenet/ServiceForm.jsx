import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "@/axiosInstance";
import { useToast } from "../ui/use-toast";


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

const EditImageIcon = () => {
  return (
    <svg
      className="w-8 h-8 text-darkMahron rounded-lg mb-2"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="currentColor"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g fill="currentColor" fillRule="nonzero">
          <path d="M21.3306,11.6695 C22.2232,12.5621 22.2232,14.0093 21.3306,14.9019 L15.4282,20.8043 C15.084,21.1485 14.6528,21.3926 14.1807,21.5106 L12.35,21.9683 C11.5538,22.1674 10.8327,21.4462 11.0317,20.6501 L11.4894,18.8194 C11.6075,18.3472 11.8516,17.916 12.1957,17.5719 L18.0981,11.6695 C18.9908,10.7768 20.438,10.7768 21.3306,11.6695 Z M17.75,3 C19.5449,3 21,4.45507 21,6.25 L21,10.261 C20.5233,10.0586 20.0086,9.9739 19.5,10.007 L19.5,6.25 C19.5,5.2835 18.7165,4.5 17.75,4.5 L6.25,4.5 C5.2835,4.5 4.5,5.2835 4.5,6.25 L4.5,17.75 C4.5,17.9584 4.53643,18.1583 4.60326,18.3437 L10.4258,12.643 C11.2589,11.8273 12.5675,11.7885 13.4458,12.5266 L13.5742,12.6431 L14.6534,13.7 L13.5926,14.7608 L12.5247,13.7148 C12.2596,13.4553 11.8501,13.4316 11.5588,13.644 L11.4752,13.7148 L5.66845,19.4011 C5.8504,19.4651 6.04613,19.5 6.25,19.5 L10.2885,19.5 L10.0616,20.4075 C10.0113,20.6088 9.99166,20.8075 9.99888,21 L6.25,21 C4.45507,21 3,19.5449 3,17.75 L3,6.25 C3,4.45507 4.45507,3 6.25,3 L17.75,3 Z M19.2469143,12.6540339 L19.1588,12.7301 L13.2564,18.6325 C13.13488,18.75402 13.041584,18.90018 12.9824512,19.060484 L12.9446,19.1832 L12.6539,20.3462 L13.8169,20.0554 C13.98362,20.01372 14.138756,19.936456 14.2719144,19.8294448 L14.3675,19.7437 L20.2699,13.8412 C20.5768,13.5344 20.5768,13.0369 20.2699,12.7301 C19.9909909,12.4511909 19.5544785,12.4258355 19.2469143,12.6540339 Z M15.2521,6.00179 C16.4959,6.00179 17.5042,7.0101 17.5042,8.25391 C17.5042,9.49771 16.4959,10.506 15.2521,10.506 C14.0083,10.506 13,9.49771 13,8.25391 C13,7.0101 14.0083,6.00179 15.2521,6.00179 Z M15.2521,7.50179 C14.8367,7.50179 14.5,7.83852 14.5,8.25391 C14.5,8.66929 14.8367,9.00602 15.2521,9.00602 C15.6675,9.00602 16.0042,8.66929 16.0042,8.25391 C16.0042,7.83852 15.6675,7.50179 15.2521,7.50179 Z"></path>
        </g>
      </g>
    </svg>
  );
};

const ServiceForm = ({ isEdit, initialData }) => {
  const { toast } = useToast();
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const [updateTreatmentData, setUpdataTreatmentData] = useState({
    title: "",
    description: "",
    image: "",
    goal: "",
    price: 0,
  });

  const headerText = isEdit ? "Update Treatment" : "Create Treatment";

  useEffect(() => {
    if (isEdit && initialData) {
      setUpdataTreatmentData({
        title: initialData.title || "",
        description: initialData.description || "",
        image: initialData.image || "",
        goal: initialData.goal || "",
        price: initialData.price || 0,
      });
    }
  }, [isEdit, initialData]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    // Append each field individually
    formData.append("title", updateTreatmentData.title);
    formData.append("description", updateTreatmentData.description);
    formData.append("goal", "65dfc081aaf4e436bc208510");
    formData.append("price", updateTreatmentData.price);
    if (updateTreatmentData.image) {
      formData.append("image", updateTreatmentData.image);
    }

    try {
      const apiUrl = isEdit
        ? `/treatment/update/${initialData.id}`
        : "/treatment/create";
      const method = isEdit ? "put" : "post";

      const response = await axiosInstance[method](apiUrl, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      console.log("Response:", response.data);
      alert("Operation successful");
    } catch (error) {
      console.error("Error submitting form: ", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdataTreatmentData({
      ...updateTreatmentData,
      [name]: value,
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (allowedTypes.includes(file.type)) {
        setUpdataTreatmentData({
          ...updateTreatmentData,
          image: file,
        });
        setIsImageUploading(true);

        setTimeout(() => {
          setIsImageUploaded(true);
          setIsImageUploading(false);
          toast({
            description: (
              <div
                className={`mt-2 w-[280px] rounded-md border-2 border-green-500 p-2`}
              >
                <p className={`text-green-500 text-base text-center`}>
                  Image Successfully Uploaded
                </p>
              </div>
            ),
          });
        }, 2000);
      } else {
        toast({
          description: (
            <div
              className={`mt-2 w-[280px] rounded-md border-2 border-red-500 p-2`}
            >
              <p className={`text-red-500 text-base text-center`}>
                Please upload an image file <b>(PNG, JPG, JPEG)</b>.
              </p>
            </div>
          ),
        });
      }
    }
  };

  return (
    <div className="mx-auto min-h-screen  relative md:px-4">
      <div className="mt-10 lg:mt-20 xl:mt-30 flex items-center justify-center">
        <div className="bg-white border-2 border-darkMahron rounded-lg px-8 py-4 sm:py-8 sm:px-20 w-full h-full md:max-w-[70%] md:max-h-[50%]">
          <h1 className="text-3xl sm:text-5xl font-ralewayThin font-thin mb-6 text-center text-darkMahron">
            {headerText}
          </h1>
          <div className="mb-6 flex justify-center font-raleway">
            <div className="relative w-64 h-40 border rounded-lg overflow-hidden">
              {isEdit && updateTreatmentData.image ? (
                <>
                  <Image
                    src={
                      typeof updateTreatmentData.image === "string"
                        ? updateTreatmentData.image
                        : URL.createObjectURL(updateTreatmentData.image)
                    }
                    alt="Edit Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute rounded-md inset-0 w-full h-full object-cover opacity-70"
                  />
                  <input
                    id="image"
                    name="image"
                    onChange={handleFileChange}
                    type="file"
                    className="hidden"
                  />
                </>
              ) : isImageUploading ? (
                <p className="text-sm text-darkMahron">Uploading-----</p>
              ) : (
                <div className="bg-gray-100 flex justify-center items-center border-2 border-darkMahron rounded-lg h-40 w-full max-w-[300px]">
                  <label className="flex flex-col items-center cursor-pointer">
                    {isImageUploaded ? <EditImageIcon /> : <Add />}
                    <span className="text-darkMahron">
                      {isImageUploaded ? "Change" : "Add"} profile Images
                    </span>
                    <input
                      name="image"
                      id="image"
                      onChange={handleFileChange}
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              )}
              {isEdit && (
                <div className="absolute inset-0 flex items-center rounded-md justify-center border-2 border-darkMahron">
                  <label className="flex flex-col items-center">
                    <EditImageIcon />
                    <span className="text-black">Edit Image</span>
                    <input
                      name="image"
                      id="image"
                      type="file"
                      className="hidden"
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
          <form
            onSubmit={handleFormSubmit}
            className="grid grid-cols-2 gap-4 font-raleway"
          >
            <div className="mb-4 col-span-2 sm:col-span-1">
              <input
                id="title"
                name="title"
                value={updateTreatmentData.title}
                onChange={handleInputChange}
                type="text"
                placeholder="Treatment name"
                className="w-full p-2 border-b border-darkMahron focus:outline-none focus:border-darkMahron"
              />
            </div>
            <div className="mb-4 col-span-2 sm:col-span-1">
              
              <select
                id="goal"
                name="goal"
                value={updateTreatmentData.goal}
                onChange={handleInputChange}
                className="w-full p-2 border border-darkMahron rounded-full focus:outline-none focus:border-darkMahron"
              >
                <option value="" disabled>
                  Select Goal
                </option>
                <option value="goal1">Goal 1</option>
                <option value="goal2">Goal 2</option>
                <option value="goal3">Goal 3</option>
              </select>
            </div>
            <div className="mb-4 col-span-2 sm:col-span-1">
              <input
                id="description"
                name="description"
                value={updateTreatmentData.description}
                onChange={handleInputChange}
                type="text"
                placeholder="Description"
                className="w-full p-2 border-b border-darkMahron focus:outline-none focus:border-darkMahron"
              />
            </div>
            <div className="mb-4 col-span-2 sm:col-span-1">
              <input
                id="price"
                name="price"
                value={updateTreatmentData.price}
                onChange={handleInputChange}
                type="tel"
                placeholder="Price"
                className="w-full p-2 border-b border-darkMahron focus:outline-none focus:border-darkMahron"
              />
            </div>
            <div className="flex justify-center space-x-3 col-span-2">
              <button
                type="button"
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
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
