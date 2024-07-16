
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';



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
                className="border-[#35112033] text-darkMahron  px-4 min-w-80  mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  };


  export default InputFormField