
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';
import AuthPageLayout from '@/components/layout/AuthPageLayout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { forgotPasswordSchema, type ForgotPasswordData } from '@/schemas/auth';
import { useAuth } from '@/contexts/AuthContext';

const ForgotPassword = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { resetPassword, isLoading } = useAuth();
  const [isEmailSent, setIsEmailSent] = useState(false);
  
  const form = useForm<ForgotPasswordData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    try {
      await resetPassword(data.email);
      setIsEmailSent(true);
    } catch (error) {
      // Error is handled by the AuthContext
      console.error('Password reset error:', error);
    }
  };

  return (
    <AuthPageLayout 
      title="Reset Your Password" 
      subtitle="Enter your email and we'll send you a link to reset your password"
      isLogin={true}
    >
      <Form {...form}>
        <motion.form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isEmailSent ? (
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                        </span>
                        <Input 
                          id="email" 
                          type="email" 
                          className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20" 
                          placeholder="you@example.com"
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <span className="mr-2">Sending...</span>
                    <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Reset Link
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">Check your inbox</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We've sent a password reset link to <span className="font-medium">{form.getValues().email}</span>
              </p>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  form.reset();
                  setIsEmailSent(false);
                }}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Try another email
              </Button>
            </div>
          )}
          
          <div className="text-center text-sm">
            <p>
              <Link 
                to="/login" 
                className="text-primary hover:underline"
              >
                Return to login
              </Link>
            </p>
          </div>
        </motion.form>
      </Form>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
