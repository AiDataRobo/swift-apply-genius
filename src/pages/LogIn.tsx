import React, { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock } from "lucide-react";
import AuthPageLayout from '@/components/layout/AuthPageLayout';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import SocialLoginButtons from '@/components/auth/SocialLoginButtons';
import PasswordInput from '@/components/auth/PasswordInput';
import { motion } from 'framer-motion';
import { loginFormSchema, type LoginFormData } from '@/schemas/auth';
import { useAuth } from '@/contexts/AuthContext';

const LogIn = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      // Error is handled by the AuthContext
      console.error('Login submission error:', error);
    }
  };

  return (
    <AuthPageLayout 
      title="Welcome back" 
      subtitle="Log in to your account to continue" 
      isLogin={true}
    >
      <Form {...form}>
        <motion.form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
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
          
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link to="/forgot-password" className="text-xs text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </motion.div>
                </div>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      <Lock className="h-4 w-4" />
                    </span>
                    <PasswordInput 
                      className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-offset-0 focus:ring-primary/20" 
                      placeholder="Enter your password"
                      id="password"
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
            name="rememberMe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                <FormControl>
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <label htmlFor="rememberMe" className="text-sm font-medium leading-none cursor-pointer">
                  Remember me
                </label>
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full mt-4" 
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <span className="mr-2">Logging in</span>
                <span className="animate-spin rounded-full h-4 w-4 border-2 border-b-transparent border-white"></span>
              </span>
            ) : (
              "Login to My Account"
            )}
          </Button>
        </motion.form>
      </Form>
      
      <div className="mt-6">
        <SocialLoginButtons showText={true} />
      </div>
      
      <div className="mt-6 text-center text-sm">
        <p>
          Don't have an account?{" "}
          <motion.span whileHover={{ scale: 1.05 }} className="inline-block">
            <Link to="/signup" className="text-primary hover:underline">
              Sign up
            </Link>
          </motion.span>
        </p>
      </div>
    </AuthPageLayout>
  );
};

export default LogIn;
