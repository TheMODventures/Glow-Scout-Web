"use client";
import React, { useState } from "react";

const LocationIcon = ({ className }) => {
  return (
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
          stroke="#000000"
          strokeWidth="0.984"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
          stroke="#000000"
          strokeWidth="0.984"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

const ClockIcon = ({ className }) => {
  return (
    <svg
      width="256px"
      height="256px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M12 17V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
          stroke="#000000"
          strokeWidth="1.104"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
};

const BookAppointment = () => {
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("PM");
  const details = [
    { placeholder: "First name", icon: null },
    { placeholder: "Last name", icon: null },
    { placeholder: "Email address", icon: "location" },
  ];
  const contactDetails = [
    { placeholder: "Mobile/Telephone" },
    { placeholder: "Email address" },
    { placeholder: "Alternate Email address" },
  ];
  return (
    <div className="flex flex-col items-center md:p-8 p-4 font-raleway">
      <div className="p-4 sm:p-8 my-10 bg-white rounded-xl border-2 border-darkMahron max-w-full lg:max-w-4xl">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-raleway font-thin mb-6 text-center text-darkMahron">
          Book Appointment
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          <div className="col-span-1 pr-0 lg:pr-5 lg:border-r-2 border-darkMahron">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-darkMahron">
              Personal Details
            </h2>
            {details.map((detail, index) =>
              detail.icon ? (
                <div
                  key={index}
                  className="w-full flex items-center justify-between mb-4 border-b-2 border-darkMahron rounded"
                >
                  <input
                    type="text"
                    placeholder={detail.placeholder}
                    className="p-2 w-full"
                  />
                  <LocationIcon className="w-6 h-6 text-darkMahron" />
                </div>
              ) : (
                <input
                  key={index}
                  type="text"
                  placeholder={detail.placeholder}
                  className="w-full p-2 mb-4 border-b-2 border-darkMahron rounded"
                />
              )
            )}
            <h2 className="text-lg sm:text-xl lg:text-2xl mt-10 font-semibold text-darkMahron">
              Contact details
            </h2>
            {contactDetails.map((detail, index) => (
              <input
                key={index}
                type="text"
                placeholder={detail.placeholder}
                className="w-full p-2 mb-4 border-b-2 border-darkMahron rounded"
              />
            ))}
          </div>
          <div className="col-span-2">
            <div className="mb-4 col-span-2">
              <h2 className="text-lg sm:text-xl lg:text-2xl mb-4 font-semibold text-darkMahron">
                Date & Timings
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-x-6">
                <input
                  type="date"
                  className="w-full max-w-[240px] p-1 border border-darkMahron rounded-lg mb-2"
                />
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-8 h-8 text-darkMahron" />
                  <input
                    type="number"
                    className="w-8 p-1 border border-darkMahron rounded-lg text-center"
                  />
                  <span className="text-darkMahron font-bold">:</span>
                  <input
                    type="number"
                    className="w-8 p-1 border border-darkMahron rounded-lg text-center"
                  />
                  <div className="flex items-center rounded-xl border border-darkMahron">
                    <button
                      type="button"
                      className={`p-2 text-sm rounded-l-lg ${
                        selectedTimePeriod === "AM"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                      onClick={() => setSelectedTimePeriod("AM")}
                    >
                      AM
                    </button>
                    <button
                      type="button"
                      className={`p-2 text-sm rounded-r-lg ${
                        selectedTimePeriod === "PM"
                          ? "bg-darkMahron text-white"
                          : "bg-transparent text-darkMahron"
                      }`}
                      onClick={() => setSelectedTimePeriod("PM")}
                    >
                      PM
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl pt-3 font-semibold border-t-2 border-darkMahron text-darkMahron mb-4">
                Comment
              </h2>
              <textarea
                placeholder="Write any instruction here."
                className="w-full p-2 border border-darkMahron h-40 sm:h-48 lg:h-64 rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 border-2 border-darkMahron text-darkMahron rounded-full">
            Cancel
          </button>
          <button className="px-6 py-2 bg-darkMahron text-white rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
