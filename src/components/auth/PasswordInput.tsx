
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
  control?: Control<TFieldValues>;
  name?: TName;
  label?: string;
  placeholder?: string;
  showStrengthIndicator?: boolean;
  className?: string;
  id?: string;
  // Add other properties that are being passed to the component
  onChange?: (...event: any[]) => void;
  onBlur?: () => void;
  value?: string;
  disabled?: boolean;
  ref?: any;
}

const PasswordInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ 
  control, 
  name, 
  label, 
  placeholder, 
  showStrengthIndicator = false,
  className = "",
  id,
  ...props
}: PasswordInputProps<TFieldValues, TName>) => {
  const [showPassword, setShowPassword] = useState(false);
  const controller = name && control ? useController({ name, control }) : null;
  const field = controller?.field;
  
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // If used within a form with control and name
  if (field && label) {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <div className="relative">
            <Input 
              type={showPassword ? "text" : "password"} 
              placeholder={placeholder} 
              className={className}
              id={id}
              {...field} 
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
              tabIndex={-1} // Prevent this button from affecting form tab order
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
  }
  
  // If used as a standalone component
  return (
    <div className="relative">
      <Input 
        type={showPassword ? "text" : "password"} 
        placeholder={placeholder} 
        className={className}
        id={id}
        {...props} 
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        onClick={togglePasswordVisibility}
        tabIndex={-1} // Prevent this button from affecting form tab order
      >
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </button>
      
      {showStrengthIndicator && props.value && typeof props.value === 'string' && props.value.length > 0 && (
        <PasswordStrengthIndicator password={props.value} />
      )}
    </div>
  );
};

export default PasswordInput;
