
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Menu, ChevronDown, FileText } from "lucide-react";
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

  return (
    <nav className={`${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center font-semibold">
          <span className="text-xl font-bold">EnhanceResume</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/#services" className="text-sm font-medium transition-colors hover:text-primary">
            Services
          </Link>
          
          <Link to="/#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          
          <Link to="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          
          {user ? (
            <>
              <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
                Dashboard
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={getAvatarUrl()} alt={getDisplayName()} />
                      <AvatarFallback>{getUserInitials()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full h-full block">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                    Logout
                    <LogOut className="ml-auto h-4 w-4" />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium transition-colors hover:text-primary">
                Login
              </Link>
              <Link to="/resume-writing-services">
                <Button size="sm" className="bg-primary">Hire a Resume Expert</Button>
              </Link>
            </>
          )}
          <ModeToggle />
        </div>
        
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden" onClick={toggleMobileMenu}>
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="sm:w-full md:w-3/4 lg:w-1/2">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Explore our professional resume writing services.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/#services" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              
              <Link to="/#pricing" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </Link>
              
              <Link to="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Testimonials
              </Link>
              
              <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              
              <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              
              {user ? (
                <>
                  <Link to="/dashboard" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Dashboard
                  </Link>
                  <Link to="/profile" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Profile
                  </Link>
                  <Button variant="destructive" size="sm" className="w-full justify-start" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    Login
                  </Link>
                  <Link to="/resume-writing-services" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button size="sm" className="w-full justify-center bg-primary">Hire a Resume Expert</Button>
                  </Link>
                </>
              )}
              <ModeToggle />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
