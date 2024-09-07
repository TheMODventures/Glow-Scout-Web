"use client";

import { useEffect, useState , useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import InputFormField from "../reuseableComponenet/InputFormField";
import updateSpaSchema from "@/validation/spa.validation.js";
import { Input } from "@/components/ui/input";
import { updateSpa } from "@/API/spas.api";
import { ThreeDots } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "@/redux/user/authSlice";
import { IoStarSharp } from "react-icons/io5";
import Container from "./Container";
import Image from "next/image";
import { updateUser } from "@/API/auth.api";
import { FaRegUser } from "react-icons/fa";
import { Route } from "lucide-react";
import { useRouter } from "next/navigation";



const UserSetting = () => {
  const reviews = [
    { name: "Radiant Serenity", rating: 0 },
    { name: "Crystal Calm", rating: 2 },
    { name: "Eternal Bliss", rating: 3 },
    { name: "Heavenly Escape", rating: 4 },
    { name: "Radiant Serenity", rating: 4 },
    { name: "Crystal Calm", rating: 2 },
    { name: "Eternal Bliss", rating: 3 },
  ];

  const Star = ({ filled, onClick }) => {
    return (
      <IoStarSharp
        onClick={onClick}
        className={`w-5 h-5 cursor-pointer ${
          filled ? "text-yellow-500" : "text-gray-300"
        }`}
      />
    );
  };
  const [localReviews, setLocalReviews] = useState(reviews);

  const currentUser = useSelector((state) => state.auth.user);
  const [links, setLinks] = useState({ link1: "", link2: "", link3: "" });
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const filePickerRef = useRef();
  const [uploadedImage, setUploadedImage] = useState(null);
  const router=useRouter()


  useEffect(() => {
    if(!currentUser){
        router.push("/auth/login")
    }
    if (currentUser) {
      setLinks({
        link1:
          currentUser.links?.find((link) => link.platform === "instagram")
            ?.url || "",
        link2:
          currentUser.links?.find((link) => link.platform === "facebook")
            ?.url || "",
        link3:
          currentUser.links?.find((link) => link.platform === "snapchat")
            ?.url || "",
      });
    }
  }, [currentUser]);

  const handleStarClick = (reviewIndex, starIndex) => {
    setLocalReviews((prevReviews) =>
      prevReviews.map((review, index) =>
        index === reviewIndex ? { ...review, rating: starIndex + 1 } : review
      )
    );
  };

  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

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

  const form = useForm({
    resolver: zodResolver(updateSpaSchema),
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      phone: currentUser?.phone,
      city: currentUser?.city,
      alternateEmail: currentUser?.alternateEmail,
    },
  });

  async function handleSubmit(data) {
    const formData = new FormData();

    const linksArray = [
      { platform: "instagram", url: links.link1 },
      { platform: "facebook", url: links.link2 },
      { platform: "snapchat", url: links.link3 },
    ].filter((link) => link.url);

    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("city", data.city);
    formData.append("alternateEmail", data.alternateEmail);

    if (selectedFile) {
        formData.append("profileImage", selectedFile);
      }

    linksArray.forEach((link, index) => {
      formData.append(`links[${index}][platform]`, link.platform);
      formData.append(`links[${index}][url]`, link.url);
    });

    setLoading(true);

    try {
      console.log([...formData.entries()]);

      const response = await updateUser(formData);
      console.log(response);
      if (response) {
        toast({
          description: "User Updated successfully.",
        });
        dispatch(setUser(response.data));
      } else {
        toast({
          description: response.message,
        });
      }
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

  return (
    <Container>
      <div className={`flex flex-col items-center md:py-8 font-raleway`}>
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
        <div className="p-4 sm:p-8 my-10 mx-auto bg-white rounded-xl border-2 border-darkMahron max-w-full">
          <h1 className="text-3xl sm:text-5xl font-raleway font-thin mb-6 text-center text-darkMahron">
            Settings
          </h1>

          

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              encType="multipart/form-data"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
                <div className="col-span-1 pr-0 lg:pr-5 lg:border-r-2 border-darkMahron">
                  <h2 className="text-xl font-semibold text-darkMahron mb-4">
                    Details
                  </h2>
                  <InputFormField
                    name="name"
                    placeholder="Enter Spa name"
                    formControl={form.control}
                    inputType="text"
                    className="w-full mb-4"
                  />
                  <InputFormField
                    name="city"
                    placeholder="Enter Address"
                    formControl={form.control}
                    inputType="text"
                    className="w-full mb-4"
                  />

                  <div className="flex flex-col mt-4">
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
                  </div>
                </div>
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-darkMahron mb-4">
                    Profile Picture
                  </h2>

                  <div className="mb-6 flex justify-start font-raleway">
            <div className=" relative flex flex-col justify-center items-center text-center rounded-full bg-[#F0F0F0] w-44 h-44 border-2 border-darkMahron">
              <div className=" absolute z-0 bottom-0 ">
                <Image
                  alt="profile"
                  src={uploadedImage  || currentUser?.profileImage || ""
                  }
                  width={170}
                  height={100}
                  className=" rounded-full opacity-60 w-[240px] h-[174px] text-[0px]"
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

                  <h2 className="text-xl pt-3 font-semibold border-t-2 border-darkMahron text-darkMahron mb-4">
                    Contact details
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 gap-4">
                      <InputFormField
                        name="phone"
                        placeholder="Enter Phone number"
                        formControl={form.control}
                        inputType="text"
                        className="w-full"
                      />
                      <InputFormField
                        name="email"
                        placeholder="Enter our email"
                        formControl={form.control}
                        inputType="email"
                        className="w-full"
                        
                      />
                      <InputFormField
                        name="alternateEmail"
                        placeholder="Enter our alternate Email"
                        formControl={form.control}
                        inputType="email"
                        className="w-full mb-4"
                      />
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      <Input
                        id="link1"
                        name="link1"
                        placeholder="Facebook handle"
                        inputType="text"
                        value={links.link1}
                        onChange={handleChange}
                        className="w-full  border-[#35112033] text-darkMahron px-4 mb-4 md:mb-0 py-3 h-12"
                      />
                      <Input
                        id="link2"
                        name="link2"
                        placeholder=" Instagram handle"
                        inputType="text"
                        value={links.link2}
                        onChange={handleChange}
                        className="w-fullborder-[#35112033] text-darkMahron px-4 mb-4 md:mb-0 py-3 h-12"
                      />
                      <Input
                        id="link3"
                        name="link3"
                        placeholder="Snapchat handle"
                        inputType="text"
                        value={links.link3}
                        onChange={handleChange}
                        className="w-full border-[#35112033] text-darkMahron px-4 mb-4 md:mb-0 py-3 h-12"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="px-6 py-2 border-2 border-darkMahron text-darkMahron rounded-full"
                >
                  Discard changes
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-darkMahron text-white rounded-full"
                >
                  Save
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default UserSetting;
