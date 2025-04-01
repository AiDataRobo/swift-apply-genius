
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import SocialLoginButtons from '@/components/auth/SocialLoginButtons';
import AuthPageLayout from '@/components/layout/AuthPageLayout';
import { signUpFormSchema, type SignUpFormData } from '@/schemas/auth';
import { toast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import PhoneInput from '@/components/auth/PhoneInput';
import PasswordInput from '@/components/auth/PasswordInput';

const SignUp = () => {
  const navigate = useNavigate();
  
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log(data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Account created successfully!",
        description: "Welcome to SwiftApply. Let's build your professional toolkit.",
      });
      
      navigate('/dashboard');
    } catch (error) {
      toast({
        title: "Error creating account",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <AuthPageLayout 
      title="Create your account" 
      subtitle="Build stunning, ATS-optimized resumes in minutes"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <input 
                        placeholder="Enter your full name" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20" 
                        {...field} 
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <PhoneInput value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      control={form.control}
                      name="password"
                      placeholder="Create a password"
                      className="transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20"
                      showStrengthIndicator={true}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      control={form.control}
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      className="transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange} 
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="font-normal">
                      I agree to the <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full">
              {form.formState.isSubmitting ? (
                <span className="flex items-center">
                  <span className="mr-2">Signing up</span>
                  <span className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-white"></span>
                </span>
              ) : (
                "Sign Up for Free"
              )}
            </Button>
          </motion.div>
        </form>
      </Form>
      
      <div className="mt-6">
        <SocialLoginButtons showText={true} />
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-primary hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </AuthPageLayout>
  );
};

export default SignUp;
