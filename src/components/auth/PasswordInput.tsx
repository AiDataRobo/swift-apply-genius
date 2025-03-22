
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form';
import PasswordStrengthIndicator from './PasswordStrengthIndicator';

interface PasswordInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  placeholder: string;
  showStrengthIndicator?: boolean;
}

const PasswordInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ 
  control, 
  name, 
  label, 
  placeholder, 
  showStrengthIndicator = false
}: PasswordInputProps<TFieldValues, TName>) => {
  const [showPassword, setShowPassword] = useState(false);
  const { field } = useController({ name, control });
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div className="relative">
          <Input 
            type={showPassword ? "text" : "password"} 
            placeholder={placeholder} 
            {...field} 
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </FormControl>
      
      {showStrengthIndicator && field.value && field.value.length > 0 && (
        <PasswordStrengthIndicator password={field.value} />
      )}
      
      <FormMessage />
    </FormItem>
  );
};

export default PasswordInput;
