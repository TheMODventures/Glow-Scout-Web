// InputFormField.jsx
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils"; 

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
              value={field.value || ''}
              className={cn(
                "w-full max-w-[640px]",
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
