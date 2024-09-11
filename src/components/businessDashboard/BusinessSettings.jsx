  "use client";

  import { useEffect, useState } from "react";
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
  import ImageUpload from "./ImageUpload";
  import TimingInput from "./TimingInput";
  import { useRouter } from "next/navigation";

  const BusinessSettings = () => {
    const currentUser = useSelector((state) => state.auth.user);
    const [links, setLinks] = useState({ link1: "", link2: "", link3: "" });
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
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

        const combineImages = [
          ...(currentUser.showcaseImages), currentUser.profileImage
        ]

        setUploadedImages(combineImages)
      }
    }, [currentUser]);

    const [timings, setTimings] = useState({
      Monday: { openTime: "08:00", closeTime: "21:00" },
      Tuesday: { openTime: "08:00", closeTime: "21:00" },
      Wednesday: { openTime: "08:00", closeTime: "21:00" },
      Thursday: { openTime: "08:00", closeTime: "21:00" },
      Friday: { openTime: "08:00", closeTime: "21:00" },
      Saturday: { openTime: "08:00", closeTime: "21:00" },
      Sunday: { openTime: "08:00", closeTime: "21:00" },
    });

    const { toast } = useToast();
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [linksValue, setLinksValue] = useState("");

    const handleChange = (e) => {
      const { name, value } = e.target;
      setLinks((prevLinks) => ({
        ...prevLinks,
        [name]: value,
      }));
    };

    const form = useForm({
      resolver: zodResolver(updateSpaSchema),
      defaultValues: {
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser?.phone,
        city: currentUser?.city,
        alternateEmail: currentUser?.alternateEmail,
      },
    });

    const [imageFiles, setImageFiles] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);

    const handleFileChange = (e, id) => {
      const file = e.target.files[0];
      const allowedTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (file && allowedTypes.includes(file.type)) {
        const newUploadedImages = [...uploadedImages];
        const newImageFiles = [...imageFiles];

        newUploadedImages[id - 1] = URL.createObjectURL(file);
        newImageFiles[id - 1] = file;

        setUploadedImages(newUploadedImages);
        setImageFiles(newImageFiles);
      } else {
        alert("Unsupported file type.");
      }
    };

    const handleTimingChange = (day, key, value) => {
      setTimings((prevTimings) => ({
        ...prevTimings,
        [day]: { ...prevTimings[day], [key]: value },
      }));
    };

    async function handleSubmit(data) {
      const formData = new FormData();

      const linksArray = [
        { platform: "instagram", url: links.link1 },
        { platform: "facebook", url: links.link2 },
        { platform: "snapchat", url: links.link3 },
      ].filter((link) => link.url);

      const formatTime = (time) => {
        let [hour, minute] = time.split(":");
        hour = parseInt(hour);

        const period = hour >= 12 ? "PM" : "AM";
        hour = hour % 12 || 12;

        return `${hour}:${minute} ${period}`;
      };

      const formattedTimings = {};
    
      Object.keys(formattedTimings).forEach((day) => {
        formData.append(`businessTiming[${day}][ON]`, formattedTimings[day].ON);
        formData.append(
          `businessTiming[${day}][startTime]`,
          formattedTimings[day].startTime
        );
        formData.append(
          `businessTiming[${day}][endTime]`,
          formattedTimings[day].endTime
        );
      });

      formData.append("name", data?.name);
      formData.append("email", data?.email);
      formData.append("phone", data?.phone);
      formData.append("city", data?.city);
      formData.append("alternateEmail", data?.alternateEmail);

      Object.keys(formattedTimings).forEach((day) => {
        formData.append(`businessTiming.${day}.ON`, formattedTimings[day].ON);
        formData.append(
          `businessTiming.${day}.startTime`,
          formattedTimings[day].startTime
        );
        formData.append(
          `businessTiming.${day}.endTime`,
          formattedTimings[day].endTime
        );
      });

      linksArray.forEach((link, index) => {
        formData.append(`links[${index}][platform]`, link.platform);
        formData.append(`links[${index}][url]`, link.url);
      });

      const imageFilesArray = Array.from(imageFiles);
      if (imageFilesArray.length >= 3) {
        imageFilesArray.slice(0, 2).forEach((file, index) => {
          if(file !== undefined){
            formData.append(`showcaseImages`, file);
          }
        });

        if(imageFilesArray[2] !==undefined){
          formData.append("profileImage", imageFilesArray[2]);
        }
      }

      setLoading(true);

      try {
        console.log([...formData.entries()]);

        const response = await updateSpa(currentUser._id, formData);
        console.log(response);
        if (response) {
          toast({
            description: "Spa Updated successfully.",
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
                    <div className="flex justify-between items-center text-darkMahron mb-4">
                      <h2 className="text-xl font-semibold w-1/3">Timings</h2>
                      <p className="text-sm w-1/3 text-center text-gray-300">
                        Open
                      </p>
                      <p className="text-sm w-1/3 text-center text-gray-300">
                        Close
                      </p>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.keys(timings).map((day) => (
                        <TimingInput
                          key={day}
                          day={day}
                          openTime={timings[day].openTime}
                          closeTime={timings[day].closeTime}
                          onChange={handleTimingChange}
                          className="w-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-span-2">
                  <h2 className="text-xl font-semibold text-darkMahron mb-4">
                    Gallery
                  </h2>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-8 overflow-hidden">
                      {[1, 2, 3].map((value) => (
                        <ImageUpload
                          id={value}
                          image={uploadedImages[value - 1]}
                          handleFileChange={handleFileChange}
                          className="w-full h-auto"
                        />
                      ))}
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
                        inputType="number"
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
    );
  };

  export default BusinessSettings;
