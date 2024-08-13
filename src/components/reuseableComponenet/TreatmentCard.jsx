import Image from "next/image";
const TreatmentCard = ({ image, imageAlt, label, title, description }) => {
  return (
    <div className="my-3">
      <div className="relative h-52 w-44  2xl:h-64 2xl:w-52 rounded-xl">
        <Image
          className="rounded-xl static w-full h-full object-cover shadow-md"
          src={image}
          alt={imageAlt}
          height={1000}
          width={800}
        />
        {label ? (
          <p className="absolute font-raleway top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg">
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
