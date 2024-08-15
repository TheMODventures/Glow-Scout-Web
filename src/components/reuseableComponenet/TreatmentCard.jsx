import Image from "next/image";
const TreatmentCard = ({ image, imageAlt, label, title, description ,imageHeightWeb }) => {
  return (
    <div className="my-3">
      <div className="relative  rounded-xl">
        <Image
          className={`rounded-xl static w-full ${imageHeightWeb}  object-cover shadow-md`}
          src={image}
          alt={imageAlt}
          height={500}
          width={500}
        />
        {label ? (
          <p className="absolute font-raleway top-0 right-0 md:px-6 p-2 bg-lightbg rounded-bl-lg rounded-tr-lg">
            {label}
          </p>
        ) : null}
      </div>
      <div className="pt-2">
        <h3 className="text-start text-base md:text-lg 2xl:text-xl  font-semibold text-darkMahron font-raleway">
          {title}
        </h3>
        <p className="text-start text-sm md:text-base font-raleway">{description}</p>
      </div>
    </div>
  );
};
export default TreatmentCard;
