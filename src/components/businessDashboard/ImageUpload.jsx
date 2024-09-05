import { useRef } from "react";
import { Input } from "../ui/input";
import Image from "next/image";

const ImageUpload = ({ id, image, handleFileChange }) => {
    const filePickerRef = useRef();
  
    return (
      <div className="relative flex flex-col justify-center items-center text-center rounded-xl bg-[#F0F0F0] w-64 h-40 border-2 border-darkMahron">
        <div className="absolute z-0 bottom-2">
          {
            image && (
                <Image
            alt="img"
            src={image || ""}
            width={170}
            height={100}
            className="rounded-xl opacity-60 w-[240px] h-[140px]"
          />
            )
          }
        </div>
        <div
          className="mb-2 cursor-pointer z-10"
          onClick={() => filePickerRef.current.click()}
        >
          <Input
            name={`image${id}`}
            id={`image${id}`}
            type="file"
            ref={filePickerRef}
            className="hidden"
            onChange={(e) => handleFileChange(e, id)}
          />
          <svg
            className="w-8 h-8 p-2 text-darkMahron border-2 border-darkMahron rounded-lg mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="text-sm md:text-base font-raleway font-semibold text-darkMahron z-10">
          {image ? "Update Image" : "Add Cover Image"}
        </p>
      </div>
    );
  };


  export default ImageUpload;
  