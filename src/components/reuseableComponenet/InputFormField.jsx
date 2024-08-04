// InputFormField.jsx
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils"; // Make sure to import the cn utility if not already imported

const InputFormField = ({ name, placeholder, inputType, formControl }) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
              value={field.value || ''} // Ensure value is never undefined
              className={cn(
                inputType === "password" ? "w-full max-w-80" : "w-full max-w-[640px]",
                "border-[#35112033] text-darkMahron px-4 mb-4 md:mb-0 py-3 h-12"
              )}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputFormField;
