
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Menu, ChevronDown, FileText, Phone, Award } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose
} from "@/components/ui/sheet";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Get user's name initials for avatar fallback
  const getUserInitials = () => {
    if (!user) return "U";
    
    // Try to get name from user_metadata
    const fullName = user.user_metadata?.full_name;
    if (fullName && typeof fullName === 'string') {
      return fullName.charAt(0).toUpperCase();
    }
    
    // Fallback to email
    return user.email?.charAt(0).toUpperCase() || "U";
  };
  
  // Get avatar URL if available from user metadata
  const getAvatarUrl = () => {
    return user?.user_metadata?.avatar_url || "";
  };
  
  // Get display name from user metadata or email
  const getDisplayName = () => {
    return user?.user_metadata?.full_name || user?.email || "User";
  };

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <FileText className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">EnhanceResume</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/#services" 
            className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive('/#services') ? 'text-primary' : ''}`}
          >
            <span className="relative px-1">
              Services
              {isActive('/#services') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </span>
          </Link>
          
          <Link 
            to="/#pricing" 
            className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive('/#pricing') ? 'text-primary' : ''}`}
          >
            <span className="relative px-1">
              Pricing
              {isActive('/#pricing') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </span>
          </Link>
          
          <Link 
            to="/#testimonials" 
            className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive('/#testimonials') ? 'text-primary' : ''}`}
          >
            <span className="relative px-1">
              Testimonials
              {isActive('/#testimonials') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </span>
          </Link>
          
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive('/about') ? 'text-primary' : ''}`}
          >
            <span className="relative px-1">
              About
              {isActive('/about') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </span>
          </Link>
          
          <Link 
            to="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive('/contact') ? 'text-primary' : ''}`}
          >
            <span className="relative px-1">
              Contact
              {isActive('/contact') && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
              )}
            </span>
          </Link>
          
          {user ? (
            <>
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium transition-colors hover:text-primary relative ${isActive('/dashboard') ? 'text-primary' : ''}`}
              >
                <span className="relative px-1">
                  Dashboard
                  {isActive('/dashboard') && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                  )}
                </span>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0 rounded-full overflow-hidden ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={getAvatarUrl()} alt={getDisplayName()} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{getDisplayName()}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="w-full h-full block cursor-pointer">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 focus:text-red-500">
                    Logout
                    <LogOut className="ml-auto h-4 w-4" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm" className="hidden md:inline-flex transition-all duration-200 hover:bg-primary/10">
                  Login
                </Button>
              </Link>
              <Link to="/resume-writing-services">
                <Button size="sm" className="bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200">
                  <span className="mr-1">Hire a Resume Expert</span>
                  <Phone className="h-4 w-4" />
                </Button>
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:w-full md:w-3/4 lg:w-1/2">
            <SheetHeader className="mb-6">
              <SheetTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                EnhanceResume
              </SheetTitle>
              <SheetDescription>
                Professional resume writing services to help you land your dream job.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/#services" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              
              <Link to="/#pricing" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              
              <Link to="/#testimonials" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonials
              </Link>
              
              <Link to="/about" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              
              <Link to="/contact" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link to="/dashboard" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                    Profile
                  </Link>
                  <Button variant="destructive" size="sm" className="w-full justify-start mt-4" onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="flex items-center text-base font-medium transition-colors hover:text-primary py-2 border-b border-gray-100 dark:border-gray-800" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <div className="mt-4">
                    <Link to="/resume-writing-services" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full justify-center bg-primary shadow-sm">
                        <Phone className="mr-2 h-4 w-4" />
                        Hire a Resume Expert
                      </Button>
                    </Link>
                  </div>
                </>
              )}
              <div className="mt-4 flex justify-center">
                <ModeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
