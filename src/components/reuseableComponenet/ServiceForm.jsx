import Image from "next/image";
import React from "react";


const Icon = ({ isEdit }) => {
  if (isEdit) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM11 11H8V13H11V16H13V13H16V11H13V8H11V11Z"
          fill="currentColor"
        />
      </svg>
    );
  }
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

const ServiceForm = ({ isEdit, initialData }) => {
  const { title, description, image } = initialData || {};
  const headerText = isEdit ? "Update Treatment" : "Create Treatment";

  return (
    <div className="mx-auto min-h-screen font-raleway relative px-4">
      <div className="mt-10 lg:mt-20 xl:mt-30 flex items-center justify-center">
        <div className="bg-white border-2 border-darkMahron rounded-lg py-8 px-20 w-full h-full md:max-w-[70%] md:max-h-[50%]">
          <h1 className="text-5xl text-darkMahron font-thin mb-10 fontd-raleway text-center">
            {headerText}
          </h1>
          <div className="mb-6 flex justify-center">
            <div className="relative w-64 h-40 border rounded-lg overflow-hidden">
              {isEdit && image ? (
               <>
               <Image
                  src={image}
                  alt="Edit Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <input type="file" className="hidden" />
                </>
              ) : (
                <div className="bg-gray-100 flex justify-center items-center border-2 border-darkMahron rounded-lg h-40 w-full max-w-[300px]">
                  <label className="flex flex-col items-center cursor-pointer">
                    <Icon isEdit={false} />
                    <span className="text-darkMahron">Add Image</span>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              )}
              {isEdit && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <Icon isEdit={true} />
                    <span className="text-black">Edit Image</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <form className="grid grid-cols-2 gap-4">
            <div className="mb-4 col-span-2 sm:col-span-1">
              <input
                defaultValue={title}
                type="text"
                placeholder="Treatment name"
                className="w-full p-2 border-b border-darkMahron focus:outline-none focus:border-darkMahron"
              />
            </div>
            <div className="mb-4 col-span-2 sm:col-span-1">
              <select
                defaultValue={isEdit ? "goal1" : ""}
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
                defaultValue={description}
                type="text"
                placeholder="Description"
                className="w-full p-2 border-b border-darkMahron focus:outline-none focus:border-darkMahron"
              />
            </div>
            <div className="mb-4 col-span-2 sm:col-span-1">
              <input
              defaultValue={isEdit ? "$100" : ""}
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
