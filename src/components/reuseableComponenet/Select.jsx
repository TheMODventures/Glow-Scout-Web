import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";

const SelectField = ({ selectItems, placeholder ,customClass }) => {
  return (
          <Select>
              <SelectTrigger className={`${customClass} border-[1.5px] h-[32px] 2xl:h-[42px] lg:min-w-[250px] w-full border-darkMahron text-darkMahron  px-4 rounded-full mb-4 md:mb-0 md:mr-4`}>
                <SelectValue placeholder={placeholder} className="selectinputvalue" />
              </SelectTrigger>
            <SelectContent>
            <SelectGroup>
                <SelectLabel>{placeholder}</SelectLabel>
              {selectItems.map((item, index) => (
                <SelectItem key={index} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
              </SelectGroup>
            </SelectContent>
          </Select>
      
  );
};

export default SelectField;
