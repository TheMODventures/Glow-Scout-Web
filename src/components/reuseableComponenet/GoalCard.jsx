import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";

const GoalCard = ({ number, name, img }) => {
  return (
    <Card className='min-h-40 md:max-w-64'>
      <div className="p-2 md:p-4">
        <div>
          <div>
            <h2 className=" font-bold text-xl md:text-2xl pb-2">{number}</h2>
            <h3 className="text-lg md:text-xl">{name}</h3>
          </div>
          <div className="mt-2 flex items-end justify-end">
          <Image
            src={img}
            alt="Anti-Aging"
            className="object-contain "
            width={50}
            height={50}
          />
          </div>
          
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
