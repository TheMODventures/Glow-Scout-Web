import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const Search = ({ name, placeholder, inputType, formControl }) => {
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
                className="border-darkMahron border-2 text-darkMahron  px-4 min-w-80 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
  );
};

export default Search;
