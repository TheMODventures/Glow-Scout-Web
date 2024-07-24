import Image from "next/image";
const TreatmentCard = ({ image, imageAlt, label, title, description }) => {
  return (
    
    <div className="my-3">
      <div className="relative w-full h-56 md:h-full rounded-xl">
        <Image
          className="rounded-xl static w-full h-full object-cover"
          src={image}
          alt={imageAlt}
          style={{ objectFit: "cover" }}
          height={500}
          width={800}
        />
        {label ? (
          <p className="absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg">
            {label}
          </p>
        ) : null}
      </div>
      <div className="pt-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className=" text-base">{description}</p>
      </div>
    </div>
    
  );
};

export default TreatmentCard;
