
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight, Search as SearchIcon, Download, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import SidebarNav from './sidebar-nav'; // Import SidebarNav for mobile sheet
import { SpotifyLogo } from '@/components/icons/spotify-logo'; // Import logo for mobile sheet

export default function TopBar() {
  const pathname = usePathname();
  const router = useRouter();
  const isSearchPage = pathname === '/search';

  // Basic history navigation (replace with actual router logic if needed)
  const handleBack = () => router.back();
  const handleForward = () => router.forward();

  return (
    // Sticky top bar with padding and background, z-index to stay above content
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 bg-card/80 backdrop-blur-sm px-4 md:px-6 border-b border-border/60">
       {/* Mobile Sidebar Trigger */}
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-muted-foreground hover:text-foreground"
                    aria-label="Open sidebar menu"
                >
                    <SpotifyLogo className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 w-64 bg-sidebar text-sidebar-foreground border-r-0">
                {/* Render SidebarNav inside the sheet for mobile */}
                <SidebarNav />
            </SheetContent>
        </Sheet>


      {/* Navigation Arrows */}
      <div className="hidden md:flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/40 text-muted-foreground hover:text-foreground rounded-full w-8 h-8"
          onClick={handleBack}
          aria-label="Go back"
        >
          <ChevronLeft size={20} />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="bg-black/40 text-muted-foreground hover:text-foreground rounded-full w-8 h-8"
          onClick={handleForward}
          aria-label="Go forward"
        >
          <ChevronRight size={20} />
        </Button>
      </div>

      {/* Conditional Search Bar */}
      {isSearchPage && (
        <div className="relative flex-1 max-w-xs ml-4"> {/* Adjusted width and margin */}
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
          <Input
            type="search"
            placeholder="What do you want to play?" // Updated placeholder
            className="pl-10 w-full bg-secondary border-transparent rounded-full h-10 text-sm focus:ring-primary focus:border-primary placeholder:text-muted-foreground focus:bg-card" // Adjusted styles
            aria-label="Search music"
          />
        </div>
      )}

      {/* Spacer to push auth buttons to the right */}
      <div className="flex-1"></div>

      {/* Auth/Account Buttons */}
      <div className="flex items-center gap-2">
          {/* Premium Link (Optional) */}
         {/* <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2">
             Premium
         </Button> */}
         {/* Support Link (Optional) */}
         {/* <Button variant="ghost" className="hidden sm:inline-flex text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2">
             Support
         </Button> */}
         {/* Download Link (Optional) */}
         <Button variant="ghost" className="hidden sm:inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2">
             <Download size={18} />
             Install App
         </Button>
         {/* Separator (Optional) */}
         <div className="hidden sm:block h-6 w-px bg-muted-foreground/50 mx-2"></div>

         {/* Sign Up */}
         <Button variant="ghost" className="text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2 rounded-full">
             Sign up
         </Button>
         {/* Log In */}
         <Button className="bg-white text-black hover:scale-105 font-bold text-sm px-8 py-2 rounded-full shadow-sm hover:bg-gray-100">
             Log in
         </Button>
         {/* User Avatar (if logged in) */}
         {/* <Button variant="ghost" size="icon" className="bg-black/40 rounded-full w-8 h-8">
             <User size={18} />
         </Button> */}
      </div>
    </header>
  );
}
