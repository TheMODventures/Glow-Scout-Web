import React from "react";
import { FormControl } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const FilterSelect = ({selectItems}) => {
  return (
    <Select>
      <FormControl className=" border-darkMahron text-darkMahron py-2 h-12 px-4 min-w-40 rounded-full mb-4 md:mb-0 md:mr-4">
        <SelectTrigger>
          <SelectValue placeholder="Filters" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {selectItems.map((item, index) => {
          return (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default FilterSelect;
