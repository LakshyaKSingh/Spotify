'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search as SearchIcon, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SidebarNav from './sidebar-nav'; // Import SidebarNav for mobile sheet
import { SpotifyLogo } from '@/components/icons/spotify-logo'; // Import logo for mobile sheet
import Link from 'next/link';

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isSearchPage = pathname === '/search';
  const isHomePage = pathname === '/';

  // Basic history navigation (replace with actual router logic if needed)
  const handleBack = () => router.back();
  const handleForward = () => router.forward();

  return (
    // Sticky top bar with padding and background, z-index to stay above content
    // Adjusted background to be slightly transparent like Spotify's header when scrolling
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 bg-background/80 backdrop-blur-sm px-4 md:px-6 border-b border-border/60">
       {/* Mobile Sidebar Trigger */}
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-muted-foreground hover:text-foreground"
                    aria-label="Open sidebar menu"
                >
                    <SpotifyLogo className="h-6 w-6 text-foreground" /> {/* Ensure logo uses foreground color */}
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-72 bg-sidebar text-sidebar-foreground border-r-0"> {/* Slightly wider mobile sidebar */}
                {/* Render SidebarNav inside the sheet for mobile */}
                <SidebarNav />
            </SheetContent>
        </Sheet>


      {/* Navigation Arrows */}
      <div className={cn("hidden md:flex items-center gap-2", isHomePage && "hidden")}>
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/40 text-muted-foreground hover:text-foreground rounded-full w-8 h-8 disabled:opacity-50" // Added disabled state
          onClick={handleBack}
          aria-label="Go back"
          // disabled={!router.canGoBack()} // Add logic if using a router with history tracking
        >
          <ChevronLeft size={22} /> {/* Slightly larger icon */}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/40 text-muted-foreground hover:text-foreground rounded-full w-8 h-8 disabled:opacity-50" // Added disabled state
          onClick={handleForward}
          aria-label="Go forward"
           // disabled={!router.canGoForward()} // Add logic if using a router with history tracking
        >
          <ChevronRight size={22} /> {/* Slightly larger icon */}
        </Button>
      </div>

      {/* Conditional Search Bar */}
      {isSearchPage && (
        <div className="relative flex-1 max-w-xs ml-4"> {/* Adjusted width and margin */}
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
          <Input
            type="search"
            placeholder="What do you want to play?" // Updated placeholder
            className="pl-10 w-full bg-secondary border-transparent rounded-full h-10 text-sm focus:ring-1 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground focus:bg-card" // Adjusted styles for focus, border, bg
            aria-label="Search music"
          />
           {/* Optional: Add a clear button or other icons inside the input if needed */}
        </div>
      )}

      {/* Spacer to push auth buttons to the right */}
      <div className="flex-1"></div>

      {/* Right Side Links & Auth Buttons */}
      {isHomePage ? (
        <div className="flex items-center gap-2">
          {/* Premium Link */}
          <Button variant="ghost" className="hidden lg:inline-flex text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2">
            Premium
          </Button>
          {/* Support Link */}
          <Button variant="ghost" className="hidden lg:inline-flex text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2">
            Support
          </Button>
          {/* Download Link */}
          <Button variant="ghost" className="hidden sm:inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2">
            <Download size={18} strokeWidth={2.5} /> {/* Thicker icon */}
            Install App
          </Button>
          {/* Separator */}
          <div className="hidden sm:block h-6 w-px bg-muted-foreground/50 mx-2"></div>

          {/* Sign Up */}
          <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2 rounded-full">
            Sign up
          </Button>
          {/* Log In */}
          <Button className="bg-white text-black hover:scale-[1.04] font-bold text-sm px-8 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-transform duration-75">
            Log in
          </Button>
          {/* User Avatar (Example for logged in state) */}
          {/* <Button variant="ghost" size="icon" className="bg-muted rounded-full w-8 h-8">
             <User size={18} />
         </Button> */}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          {/* Placeholder for user-related actions (e.g., profile, settings) when not on the home page */}
          <Button variant="ghost" size="icon" className="bg-muted rounded-full w-8 h-8">
            <User size={18} />
          </Button>
        </div>
      )}
    </header>
  );
}

