import { Input } from "../ui/input";


const TimingInput = ({ day, openTime, closeTime, onChange }) => (
    <div className="flex items-center gap-x-4 justify-between">
      <span className="font-thin text-sm text-darkMahron w-full">{day}</span>
      <Input
        type="time"
        value={openTime}
        onChange={(e) => onChange(day, "openTime", e.target.value)}
        className="py-1 px-2 border text-[12px] border-darkMahron rounded-lg w-20"
      />
      <Input
        type="time"
        value={closeTime}
        onChange={(e) => onChange(day, "closeTime", e.target.value)}
        className="py-1 px-2 border text-[12px] border-darkMahron rounded-lg w-20"
      />
    </div>
  );

  export default TimingInput;
  