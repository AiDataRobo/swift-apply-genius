
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Menu, ChevronDown } from "lucide-react";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

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

  return (
    <nav className={`${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'} fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center font-semibold">
          <span className="text-xl font-bold">JobOnboard</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                    <Link to="/resume-builder" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                      <div className="font-medium">Resume Builder</div>
                      <div className="text-xs text-muted-foreground">Build your resume with AI tools</div>
                    </Link>
                    <Link to="/cover-letter-services" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                      <div className="font-medium">Cover Letter Services</div>
                      <div className="text-xs text-muted-foreground">Professional cover letters</div>
                    </Link>
                    <Link to="/resume-writing-services" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                      <div className="font-medium">Professional Writing</div>
                      <div className="text-xs text-muted-foreground">Expert resume writing services</div>
                    </Link>
                    <Link to="/interview-guarantee-package" className="block p-3 space-y-1 rounded-md hover:bg-slate-100">
                      <div className="font-medium">Interview Guarantee</div>
                      <div className="text-xs text-muted-foreground">Get interviews or money back</div>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link to="/templates" className="text-sm font-medium transition-colors hover:text-primary">
            Templates
          </Link>
          
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
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
                      <AvatarImage src={user.photoURL || ""} alt={user.displayName || "User Avatar"} />
                      <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
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
              <Link to="/signup">
                <Button size="sm">Sign Up</Button>
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
                Explore our services and options.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <Link to="/" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              
              <div className="space-y-2">
                <p className="text-sm font-medium py-2">Services</p>
                <div className="pl-4 border-l space-y-2">
                  <Link to="/resume-builder" className="text-sm text-muted-foreground hover:text-primary block py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Resume Builder
                  </Link>
                  <Link to="/cover-letter-services" className="text-sm text-muted-foreground hover:text-primary block py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Cover Letter Services
                  </Link>
                  <Link to="/resume-writing-services" className="text-sm text-muted-foreground hover:text-primary block py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Professional Writing
                  </Link>
                  <Link to="/interview-guarantee-package" className="text-sm text-muted-foreground hover:text-primary block py-1" onClick={() => setIsMobileMenuOpen(false)}>
                    Interview Guarantee
                  </Link>
                </div>
              </div>
              
              <Link to="/templates" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                Templates
              </Link>
              
              <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                About
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
                  <Link to="/signup" className="block py-2">
                    <Button size="sm" className="w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Button>
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
