"use client";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
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
const ChangeImge = ({ Color }) => {
  return (
    <svg
    className={"w-12 h-12 text-darkMahron mb-2"} 
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <style type="text/css">
          {`
            .st0{fill:${Color};}
            .st1{fill:none;stroke:;stroke-width:0.00512;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
          `}
        </style>
        <g id="Layer_1"></g>
        <g id="Layer_2">
          <g>
            <g>
              <path
                className="st0"
                d="M307.81,212.18c-3.24,0-6.07-2.17-6.91-5.3l-4.82-17.88c-0.84-3.12-3.68-5.3-6.91-5.3h-21.46h-25.44H220.8 c-3.24,0-6.07,2.17-6.91,5.3l-4.82,17.88c-0.84,3.12-3.68,5.3-6.91,5.3H169.5c-3.96,0-7.16,3.21-7.16,7.16v101.78 c0,3.96,3.21,7.16,7.16,7.16h170.95c3.96,0,7.16-3.21,7.16-7.16V219.35c0-3.96-3.21-7.16-7.16-7.16H307.81z M282.33,264.94 c-0.86,13.64-11.93,24.71-25.58,25.58c-16.54,1.05-30.18-12.59-29.14-29.14c0.86-13.64,11.93-24.71,25.58-25.58 C269.74,234.76,283.38,248.4,282.33,264.94z"
              ></path>
            </g>
            <g>
              <path
                className="st0"
                d="M82.95,272.41c3.82,0,7.53-1.53,10.23-4.23l21.23-21.23c4.74-4.74,6.4-11.92,3.73-18.06 c-2.73-6.29-8.88-8.95-18.84-7.57l-0.27,0.27c15.78-71.56,79.7-125.27,155.94-125.27c60.72,0,115.41,33.72,142.73,87.99 c3.58,7.11,12.24,9.97,19.34,6.39c7.11-3.58,9.97-12.24,6.39-19.34c-15.47-30.73-39.05-56.66-68.22-75.01 C325.23,77.47,290.57,67.5,254.98,67.5c-93,0-170.48,67.71-185.75,156.41c-5.38-4.77-13.59-5.18-19.13-0.44 c-6.3,5.39-6.75,14.88-1.13,20.84c0.23,0.24,5.69,6.03,11.41,11.93c3.41,3.51,6.2,6.33,8.3,8.38c4.23,4.13,7.88,7.69,14.07,7.78 C82.81,272.41,82.88,272.41,82.95,272.41z"
              ></path>
            </g>
            <g>
              <path
                className="st0"
                d="M464.28,247.82l-26.5-26.5c-2.75-2.75-6.57-4.3-10.44-4.23c-2.33,0.03-4.29,0.56-6.07,1.42 c-0.26,0.12-0.51,0.26-0.76,0.4c-0.04,0.02-0.08,0.04-0.12,0.06c-0.59,0.33-1.16,0.68-1.69,1.08c-1.88,1.34-3.6,3.03-5.44,4.82 c-2.1,2.05-4.89,4.87-8.3,8.38c-5.72,5.9-11.18,11.68-11.41,11.93c-5.46,5.79-5.19,14.91,0.6,20.36 c5.75,5.42,14.77,5.18,20.24-0.48c-4.72,83.85-74.42,150.62-159.43,150.62c-70.52,0-131.86-45.23-152.62-112.55 c-2.35-7.6-10.41-11.86-18.01-9.52c-7.6,2.34-11.86,10.41-9.52,18.01c11.62,37.68,35.48,71.52,67.19,95.28 c32.8,24.59,71.86,37.58,112.96,37.58c100.11,0,182.23-78.45,188.14-177.1l0.79,0.79c2.81,2.81,6.5,4.22,10.18,4.22 c3.69,0,7.37-1.41,10.18-4.22C469.91,262.57,469.91,253.45,464.28,247.82z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
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
  imgUrl,
  onImageChange,
  saveBtnFunc,
  type,
  details,
  reviews,
  contactDetail,
  onDetailsChange,
  onContactDetailChange,
}) => {
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [localReviews, setLocalReviews] = useState(reviews);
  const [isImageUploading, setIsImageUploading] = useState(false);
  const { toast } = useToast();

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
                    // onClick={handleOnClick}
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
                  // onClick={handleOnClick}
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
                  <div className="w-full sm:w-1/3 h-44 flex flex-col items-center justify-center border-2 bg-gray-100 border-darkMahron rounded-full relative overflow-hidden">
                    {imgUrl ? (
                     <div className="relative w-full h-full flex justify-center items-center">
                     <input
                       id="file-upload"
                       type="file"
                       className="hidden"
                       onChange={handleFileChange}
                     />
                     
                     <Image
                       src={imgUrl}
                       alt="Profile Image"
                       layout="fill"
                       objectFit="cover"
                       className="absolute inset-0 w-full h-full object-cover opacity-65"
                     />
                   
                     <label
                       htmlFor="file-upload"
                       className="cursor-pointer flex flex-col items-center z-10"
                     >
                       <ChangeImge Color={"#351120"} />
                       <span className="text-darkMahron text-sm mt-2">Change profile Images</span>
                     </label>
                   </div>
                   
                    ) : isImageUploading ? (
                      <p>Uploading...</p>
                    ) : (
                      <div className="flex flex-col items-center justify-center">
                        <label
                          htmlFor="file-upload"
                          className="cursor-pointer flex flex-col items-center"
                        >
                          {isImageUploaded || imgUrl ? (
                            <ChangeImge Color={"#351120"}
                            />
                          ) : (
                            <Add />
                          )}
                        </label>
                        <input
                          id="file-upload"
                          type="file"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                        <span className="text-darkMahron text-sm mt-2">
                          {imgUrl || isImageUploaded ? "Change" : "Add"} profile
                          Images
                        </span>
                      </div>
                    )}
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
                  // onClick={handleOnClick}
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
