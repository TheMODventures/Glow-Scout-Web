import Image from "next/image";
import React from "react";

const Location = () => (
  <svg
    className="text-darkMahron text-sm h-6 w-6 font-thin"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#000000"
  >
    <path
      d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
    <path
      d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const Add = () => (
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

const SettingComponent = () => {
  return (
    <div className="p-4 sm:p-8 my-10 mx-auto bg-white rounded-xl border-2 border-darkMahron shadow-lg max-w-full lg:max-w-4xl">
     <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-14 right-0 z-0 hidden md:block"
      />
      <h1 className="text-3xl sm:text-5xl font-raleway font-thin mb-6 text-center text-darkMahron">
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
        {/* Details Section */}
        <div className="col-span-1 pr-0 lg:pr-5 lg:border-r-2 border-darkMahron">
          <h2 className="text-xl font-thin text-darkMahron mb-4">Details</h2>
          <input
            type="text"
            placeholder="Enter Spa name"
            className="w-full p-2 mb-4 border-b-2 border-darkMahron rounded"
          />
          <div className="flex justify-between w-full p-2 mb-8 border-b-2 border-darkMahron rounded">
            <input
              type="text"
              placeholder="Enter address"
              className="border-none focus:outline-none"
            />
            <Location />
          </div>
          {/* Timings Section */}
          <div className="flex justify-between gap-x-5">
            <h2 className="text-xl font-thin mb-4 w-full">Timings</h2>
            <p className="text-base font-thin mb-4">Open</p>
            <p className="text-base font-thin mb-4">Close</p>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day) => (
              <div
                key={day}
                className="flex items-center gap-x-4 justify-between"
              >
                <span className="font-thin text-sm text-darkMahron w-full">
                  {day}
                </span>
                <p className="py-1 px-2 border text-[12px] border-darkMahron rounded-lg">
                  08:00
                </p>
                <p className="py-1 px-2 border text-[12px] border-darkMahron rounded-lg">
                  21:00
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery and Contact Details Section */}
        <div className="col-span-2">
          <h2 className="text-xl font-thin text-darkMahron mb-4">Gallery</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <div className="w-full sm:w-1/3 h-32 flex flex-col items-center justify-center border-2 bg-gray-100 border-darkMahron rounded-lg">
              <input type="file" id="file-upload1" className="hidden" />
              <label
                htmlFor="file-upload1"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Add />
                <span className="text-darkMahron">Add Cover Images</span>
              </label>
            </div>
            <div className="w-full sm:w-1/3 h-32 flex flex-col items-center justify-center border-2 bg-gray-100 border-darkMahron rounded-lg">
              <input type="file" id="file-upload2" className="hidden" />
              <label
                htmlFor="file-upload2"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Add />
                <span className="text-darkMahron">Add Images</span>
              </label>
            </div>
            <div className="w-full sm:w-1/3 h-32 flex flex-col items-center justify-center border-2 bg-gray-100 border-darkMahron rounded-lg">
              <input type="file" id="file-upload3" className="hidden" />
              <label
                htmlFor="file-upload3"
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <Add />
                <span className="text-darkMahron">Add Images</span>
              </label>
            </div>
          </div>

          <h2 className="text-xl pt-3 font-thin border-t-2 border-darkMahron text-darkMahron mb-4">
            Contact details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Mobile/Telephone"
              className="p-2 border-b-2 border-darkMahron rounded"
            />
            <input
              type="text"
              placeholder="Facebook handle"
              className="p-2 border-b-2 border-darkMahron rounded"
            />
            <input
              type="email"
              placeholder="Business Email address"
              className="p-2 border-b-2 border-darkMahron rounded"
            />
            <input
              type="text"
              placeholder="Instagram handle"
              className="p-2 border-b-2 border-darkMahron rounded"
            />
            <input
              type="email"
              placeholder="Alternate Email address"
              className="p-2 border-b-2 border-darkMahron rounded"
            />
            <input
              type="text"
              placeholder="Snapchat handle"
              className="p-2 border-b-2 border-darkMahron rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="px-6 py-2 border-2 border-darkMahron text-darkMahron rounded-full">
          Discard changes
        </button>
        <button className="px-6 py-2 bg-darkMahron text-white rounded-full">
          Save
        </button>
      </div>
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className="absolute bottom-0 left-0 z-0 hidden md:block"
      />
    </div>
  );
};

export default SettingComponent;
