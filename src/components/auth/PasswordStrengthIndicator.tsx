
import { CheckCircle2, XCircle } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  password: string;
  className?: string;
}

const PasswordStrengthIndicator = ({ password, className }: PasswordStrengthIndicatorProps) => {
  // Password validation checks
  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordStrength = [hasLength, hasUppercase, hasLowercase, hasNumber].filter(Boolean).length;

  return (
    <div className={`mt-2 space-y-2 ${className}`}>
      <div className="h-1.5 w-full flex gap-1">
        <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength > 0 ? 'bg-red-500' : 'bg-gray-200'}`}></div>
        <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength > 1 ? 'bg-amber-500' : 'bg-gray-200'}`}></div>
        <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength > 2 ? 'bg-yellow-500' : 'bg-gray-200'}`}></div>
        <div className={`h-full flex-1 rounded-full transition-colors ${passwordStrength > 3 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
      </div>
      
      <ul className="text-xs space-y-1">
        <li className="flex items-center gap-1">
          {hasLength ? 
            <CheckCircle2 className="h-3 w-3 text-green-500" /> : 
            <XCircle className="h-3 w-3 text-red-500" />
          }
          <span className={hasLength ? "text-green-500" : "text-red-500"}>
            At least 8 characters
          </span>
        </li>
        <li className="flex items-center gap-1">
          {hasUppercase ? 
            <CheckCircle2 className="h-3 w-3 text-green-500" /> : 
            <XCircle className="h-3 w-3 text-red-500" />
          }
          <span className={hasUppercase ? "text-green-500" : "text-red-500"}>
            One uppercase letter
          </span>
        </li>
        <li className="flex items-center gap-1">
          {hasLowercase ? 
            <CheckCircle2 className="h-3 w-3 text-green-500" /> : 
            <XCircle className="h-3 w-3 text-red-500" />
          }
          <span className={hasLowercase ? "text-green-500" : "text-red-500"}>
            One lowercase letter
          </span>
        </li>
        <li className="flex items-center gap-1">
          {hasNumber ? 
            <CheckCircle2 className="h-3 w-3 text-green-500" /> : 
            <XCircle className="h-3 w-3 text-red-500" />
          }
          <span className={hasNumber ? "text-green-500" : "text-red-500"}>
            One number
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PasswordStrengthIndicator;
