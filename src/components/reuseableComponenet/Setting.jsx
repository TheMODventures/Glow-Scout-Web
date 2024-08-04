"use client";
import React, { useState } from "react";

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

const Star = ({ filled, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={`w-5 h-5 cursor-pointer ${
        filled ? "text-yellow-500" : "text-gray-300"
      }`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.188c.969 0 1.371 1.24.588 1.81l-3.396 2.465a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.396-2.465a1 1 0 00-1.176 0l-3.396 2.465c-.784.57-1.838-.197-1.54-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.326 9.397c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 00.95-.69l1.286-3.97z" />
    </svg>
  );
};

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

const SettingComponent = ({
  onImageChange,
  saveBtnFunc,
  type,
  details,
  reviews,
  contactDetail,
  onDetailsChange,
  onContactDetailChange,
}) => {
  const [localReviews, setLocalReviews] = useState(reviews);

  const handleStarClick = (reviewIndex, starIndex) => {
    setLocalReviews((prevReviews) =>
      prevReviews.map((review, index) =>
        index === reviewIndex ? { ...review, rating: starIndex + 1 } : review
      )
    );
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (allowedTypes.includes(file.type)) {
        onImageChange(event);
      } else {
        alert("Please upload an image file (PNG, JPG, JPEG).");
      }
    }
  };
  const fileUploadOptions = [
    { id: "file-upload1", label: "Add Cover Images" },
    { id: "file-upload2", label: "Add Images" },
    { id: "file-upload3", label: "Add Images" },
  ];
  return (
    <div className={`flex flex-col items-center md:p-8 font-raleway`}>
      <div className="p-4 sm:p-8 my-10 mx-auto bg-white rounded-xl border-2 border-darkMahron max-w-full lg:max-w-4xl">
        <h1 className="text-3xl sm:text-5xl font-raleway font-thin mb-6 text-center text-darkMahron">
          Settings
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          {/* Details Section */}
          <div className="col-span-1 pr-0 lg:pr-5 lg:border-r-2 border-darkMahron">
            <h2 className="text-xl font-semibold text-darkMahron mb-4">
              Details
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
                    value={detail.value || ""}
                    onChange={(e) => onDetailsChange(index, e.target.value)}
                    className="p-2 w-full"
                  />
                  <LocationIcon className="w-6 h-6 text-darkMahron" />
                </div>
              ) : (
                <input
                  key={index}
                  type="text"
                  placeholder={detail.placeholder}
                  value={detail.value || ""}
                  onChange={(e) => onDetailsChange(index, e.target.value)}
                  className="w-full p-2 mb-4 border-b-2 border-darkMahron rounded"
                />
              )
            )}

            {type === "user" && (
              <>
                <h2 className="text-xl font-semibold mb-4 mt-6 w-full">
                  Previous Reviews
                </h2>

                <div className="grid grid-cols-1 gap-2">
                  {localReviews.map((review, reviewIndex) => (
                    <div key={reviewIndex} className="flex items-center">
                      <span className="w-40">{review.name}</span>
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star
                            key={starIndex}
                            filled={starIndex < review.rating}
                            onClick={() =>
                              handleStarClick(reviewIndex, starIndex)
                            }
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
            {type === "business" && (
              <>
                <div className="flex justify-between gap-x-5 text-darkMahron">
                  <h2 className="text-xl font-semibold mb-4 w-full">Timings</h2>
                  <p className="text-base font-semibold mb-4">Open</p>
                  <p className="text-base font-semibold mb-4">Close</p>
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
              </>
            )}
          </div>

          {/* Gallery and Contact Details Section */}
          <div className="col-span-2">
            {type === "user" && (
              <>
                <h2 className="text-xl font-semibold text-darkMahron mb-4">
                  Profile picture
                </h2>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <div className="w-full sm:w-1/3 h-44 flex flex-col items-center justify-center border-2 bg-gray-100 border-darkMahron rounded-full">
                    <input
                      type="file"
                      id="file-upload"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <Add />
                      <span className="text-darkMahron text-sm">
                        Add profile Images
                      </span>
                    </label>
                  </div>
                </div>
              </>
            )}
            {type === "business" && (
              <>
                <h2 className="text-xl font-semibold text-darkMahron mb-4">
                  Gallery
                </h2>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  {fileUploadOptions.map(({ id, label }) => (
                    <div
                      key={id}
                      className="w-full sm:w-1/3 h-28 flex flex-col items-center justify-center border-2 bg-gray-100 border-darkMahron rounded-xl"
                    >
                      <input type="file" id={id} className="hidden" />
                      <label
                        htmlFor={id}
                        className="flex flex-col items-center justify-center cursor-pointer"
                      >
                        <Add />
                        <span className="text-darkMahron text-sm">{label}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2 className="text-xl pt-3 font-semibold border-t-2 border-darkMahron text-darkMahron mb-4">
              Contact details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactDetail.map((info, index) => (
                <input
                  key={index}
                  type="text"
                  placeholder={info.placeholder}
                  value={info.value || ""}
                  onChange={(e) => onContactDetailChange(index, e.target.value)}
                  className="p-2 border-b-2 border-darkMahron rounded"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 border-2 border-darkMahron text-darkMahron rounded-full">
            Discard changes
          </button>
          <button
            onClick={saveBtnFunc}
            className="px-6 py-2 bg-darkMahron text-white rounded-full"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingComponent;
