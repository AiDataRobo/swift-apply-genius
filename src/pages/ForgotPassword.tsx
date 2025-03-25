
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import AuthPageLayout from '@/components/layout/AuthPageLayout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

const ForgotPassword = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would call your authentication API
      console.log("Reset password for:", data.email);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Password reset email sent",
        description: "Please check your inbox for further instructions",
        duration: 5000,
      });
      
      // Optional: redirect to login page after successful submission
      // navigate("/login");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset email. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthPageLayout 
      title="Reset Your Password" 
      subtitle="Enter your email and we'll send you a link to reset your password"
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                      className="pl-10" 
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
            disabled={isSubmitting}
          >
            {isSubmitting ? (
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
        </form>
      </Form>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
