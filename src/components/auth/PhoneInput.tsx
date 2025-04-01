
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronDown, Check, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Add more countries as needed
const countries = [
  { code: 'US', name: 'United States', flag: '🇺🇸', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dialCode: '+44' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dialCode: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dialCode: '+61' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dialCode: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dialCode: '+33' },
  { code: 'IN', name: 'India', flag: '🇮🇳', dialCode: '+91' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dialCode: '+81' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dialCode: '+86' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dialCode: '+55' },
];

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);
  
  // Get user's country by IP address (simplified version - in a real app, you'd use geolocation API)
  useEffect(() => {
    // This would be replaced with an actual API call to get user's country
    // For demo purposes, we'll just use US as default
    const userCountry = countries.find(country => country.code === 'US');
    if (userCountry) setSelectedCountry(userCountry);
  }, []);
  
  useEffect(() => {
    if (value) {
      // Extract country code and phone number if a value is provided
      const countryCode = value.split(' ')[0];
      const country = countries.find(c => c.dialCode === countryCode);
      if (country) {
        setSelectedCountry(country);
        setPhoneNumber(value.substring(country.dialCode.length + 1));
      } else {
        setPhoneNumber(value);
      }
    }
  }, [value]);
  
  const handleCountryChange = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    updatePhoneValue(country, phoneNumber);
  };
  
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhone = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(newPhone);
    updatePhoneValue(selectedCountry, newPhone);
  };
  
  const updatePhoneValue = (country: typeof countries[0], phone: string) => {
    // Simple validation - in a real app you'd use a more sophisticated validator
    const isValidPhone = validatePhoneNumber(phone);
    setIsValid(phone.length > 0 ? isValidPhone : null);
    
    // Format: +XX XXXXXXXXXX
    const formattedValue = phone ? `${country.dialCode} ${phone}` : '';
    onChange(formattedValue);
  };
  
  const validatePhoneNumber = (phone: string): boolean => {
    // Simple validation - check if it has at least 7 digits
    // In a real app, you'd use a proper phone validation library
    return phone.length >= 7;
  };
  
  return (
    <div className="flex">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button 
            variant="outline" 
            className="rounded-r-none flex items-center gap-1 h-10 w-24 px-2"
            type="button"
          >
            <span className="text-base">{selectedCountry.flag}</span>
            <span className="text-xs">{selectedCountry.dialCode}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="max-h-[300px] overflow-y-auto">
          {countries.map((country) => (
            <DropdownMenuItem 
              key={country.code}
              onClick={() => handleCountryChange(country)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-base">{country.flag}</span>
              <span className="text-sm">{country.name}</span>
              <span className="text-xs ml-auto text-muted-foreground">{country.dialCode}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div className="relative flex-1">
        <Input 
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          className="rounded-l-none transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20 pr-10"
        />
        
        {isValid !== null && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {isValid ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <X className="h-4 w-4 text-red-500" />
            )}
          </span>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;
