
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface SocialLoginButtonsProps {
  showText?: boolean;
}

const SocialLoginButtons = ({ showText = true }: SocialLoginButtonsProps) => {
  return (
    <div className="w-full">
      {showText && (
        <div className="flex items-center justify-between mb-4">
          <Separator className="flex-1" />
          <span className="px-3 text-sm text-muted-foreground">Or continue with</span>
          <Separator className="flex-1" />
        </div>
      )}
      
      <Button 
        variant="outline" 
        className="w-full flex items-center justify-center gap-2" 
        type="button"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.545 6.558a9.42 9.42 0 0 0-.139-1.626H8V7.87h4.26a3.622 3.622 0 0 1-1.578 2.415v1.998h2.554c1.495-1.383 2.355-3.427 2.355-5.836.05-.416.05-.832-.046-1.24z" fill="#4285F4"/>
          <path d="M8 16c2.142 0 3.936-.703 5.248-1.902l-2.541-1.98c-.705.47-1.614.75-2.707.75-2.08 0-3.842-1.407-4.474-3.302H.918v2.07C2.303 14.203 5.01 16 8 16z" fill="#34A853"/>
          <path d="M3.526 9.566c-.16-.479-.245-.986-.245-1.505 0-.52.085-1.026.245-1.505V4.486H.918a8.025 8.025 0 0 0 0 7.153l2.608-2.073z" fill="#FBBC05"/>
          <path d="M8 3.304c1.177 0 2.233.404 3.063 1.196l2.214-2.215C11.957.84 10.155 0 8 0 5.01 0 2.303 1.797.918 4.366l2.608 2.07C4.158 4.711 5.92 3.304 8 3.304z" fill="#EA4335"/>
        </svg>
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};

export default SocialLoginButtons;
