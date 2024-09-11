import Image from "next/image";
import { Card } from "@/components/ui/card";

const GoalCard = ({ number, title, image }) => {
  // Format the number to display "01", "02", etc., for numbers between 1 and 9
  const formattedNumber = number < 9 ? `0${number + 1}` : number + 1;

  return (
    <Card className='min-h-40 md:max-w-64'>
      <div className="p-2 md:p-4">
        <div>
          <div>
            <h2 className=" font-bold text-xl md:text-[28px] pb-2 font-raleway text-[#351120]">
              {formattedNumber} {/* Display the formatted number */}
            </h2>
            <h3 className="text-lg md:text-xl font-raleway text-[#351120]">{title}</h3>
          </div>
          <div className="mt-2 flex items-end justify-end">
            <Image
              src={image}
              alt={title}
              className="object-contain"
              width={40}
              height={50}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
