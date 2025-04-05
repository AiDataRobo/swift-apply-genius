
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from './pages/Index';
import ResumeBuilder from './pages/ResumeBuilder';
import TemplatesPage from './pages/TemplatesPage';
import Dashboard from './pages/Dashboard';
import AccountSettings from './pages/AccountSettings';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import ForgotPassword from './pages/ForgotPassword';
import Contact from './pages/Contact';
import About from './pages/About';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import ResumeWritingServices from './pages/ResumeWritingServices';
import CoverLetterServices from './pages/CoverLetterServices';
import InterviewGuaranteePackage from './pages/InterviewGuaranteePackage';
import ITCareerPaths from './pages/ITCareerPaths';
import CareerPathDetail from './pages/CareerPathDetail';
import AdminLogin from './pages/AdminLogin';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProtectedAdminRoute from './components/admin/ProtectedAdminRoute';

function App() {
  // Create a client instance
  const queryClient = new QueryClient();
  
  return (
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/templates" element={<TemplatesPage />} />
                  <Route path="/resume-builder" element={<ResumeBuilder />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/account-settings" element={<AccountSettings />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<LogIn />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                  
                  {/* Career Path Pages */}
                  <Route path="/it-career-paths" element={<ITCareerPaths />} />
                  <Route path="/career-path/:pathId" element={<CareerPathDetail />} />
                  
                  {/* Service pages */}
                  <Route path="/resume-writing-services" element={<ResumeWritingServices />} />
                  <Route path="/cover-letter-services" element={<CoverLetterServices />} />
                  <Route path="/interview-guarantee-package" element={<InterviewGuaranteePackage />} />
                  
                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route 
                    path="/admin/dashboard" 
                    element={
                      <ProtectedAdminRoute>
                        <AdminDashboardPage />
                      </ProtectedAdminRoute>
                    } 
                  />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </TooltipProvider>
          </QueryClientProvider>
        </AuthProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
