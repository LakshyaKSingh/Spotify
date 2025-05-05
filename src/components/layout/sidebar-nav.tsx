
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, Plus, Heart, ArrowRight, type LucideIcon, BookText, Podcast } from 'lucide-react';
import { SpotifyLogo } from '@/components/icons/spotify-logo';
import { cn } from '@/lib/utils';
import { buttonVariants, Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; // Import Tooltip components
import { Globe } from 'lucide-react'; // For language button


const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
];

const libraryNavItem = { href: '/library', label: 'Your Library', icon: Library };

// Actions within the library section
const libraryActions = [
  { href: '/playlist/create', label: 'Create Playlist', icon: Plus },
  { href: '/collection/tracks', label: 'Liked Songs', icon: Heart },
  // { href: '/collection/episodes', label: 'Your Episodes', icon: Podcast }, // Example if needed
];

// Example Playlists/Albums/Artists (replace with dynamic data)
const libraryItems = [
    { id: 'pl1', name: 'Deep Focus Coding Mix', type: 'Playlist' },
    { id: 'liked', name: 'Liked Songs', type: 'Playlist' }, // Add Liked Songs entry if filter is applied
    { id: 'artist1', name: 'Queen', type: 'Artist' },
    { id: 'album1', name: 'Bohemian Rhapsody (The Original Soundtrack)', type: 'Album' },
    { id: 'pl2', name: '80s Rock Anthems', type: 'Playlist' },
    { id: 'artist2', name: 'AC/DC', type: 'Artist' },
    { id: 'pl3', name: 'Workout Mix', type: 'Playlist' },
    { id: 'album2', name: 'Back in Black', type: 'Album' },
    // Add more items...
];

// Define type for nav items
interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}


export default function SidebarNav() {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem, index: number) => {
    const Icon = item.icon;
    const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href) && item.href !== '/';

    // Base classes for the link (acting as a button)
    const linkClasses = cn(
      buttonVariants({ variant: 'ghost' }),
      'w-full justify-start rounded-md gap-4 h-10 px-3', // Adjusted styles: rounded-md, gap-4
      isActive ? 'text-foreground bg-secondary' : 'text-muted-foreground hover:text-foreground' // Active/hover states
    );

    const iconStyles = cn("h-6 w-6 flex-shrink-0", isActive && 'fill-current'); // Use fill for active home/search

    return (
       <TooltipProvider delayDuration={150}>
           <Tooltip>
               <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    key={index}
                    className={linkClasses}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <Icon className={iconStyles} />
                    <span className="truncate font-bold">{item.label}</span> {/* Bold text */}
                  </Link>
                </TooltipTrigger>
               {/* Tooltip only makes sense when collapsed, but let's add it anyway */}
               <TooltipContent side="right" className="md:hidden">
                    {item.label}
                </TooltipContent>
           </Tooltip>
       </TooltipProvider>
    );
  };

   // Render Library Header Item
   const renderLibraryHeaderItem = (item: NavItem) => {
       const Icon = item.icon;
       const isActive = pathname.startsWith(item.href); // Check if path starts with /library

       const linkClasses = cn(
           buttonVariants({ variant: 'ghost' }),
           'w-full justify-start rounded-md gap-4 h-10 px-3', // Same style as Home/Search
           isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
       );

       const iconStyles = cn("h-6 w-6 flex-shrink-0"); // No fill for library icon

       return (
         <TooltipProvider delayDuration={150}>
           <Tooltip>
               <TooltipTrigger asChild>
                   <Link
                       href={item.href}
                       className={linkClasses}
                       aria-current={isActive ? 'page' : undefined}
                   >
                       <Icon className={iconStyles} />
                       <span className="truncate font-bold">{item.label}</span>
                   </Link>
               </TooltipTrigger>
               <TooltipContent side="right" className="md:hidden">
                   {item.label}
               </TooltipContent>
           </Tooltip>
         </TooltipProvider>
       );
   }

   // Render Library Action Buttons (Create Playlist, Liked Songs)
   const renderLibraryAction = (item: NavItem, index: number) => {
       const Icon = item.icon;
       // Special active check for Liked Songs
       const isActive = item.href === '/collection/tracks' && pathname === item.href;

       const buttonClasses = cn(
           buttonVariants({ variant: 'ghost', size: 'sm' }), // Use size 'sm'
           'w-full justify-start rounded-md gap-3 h-8 px-2', // Adjusted styles
           isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
       );

       // Style for the icon container (e.g., the '+' or heart background)
       const iconContainerStyles = cn(
           "w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0",
           item.href === '/collection/tracks' // Specific style for Liked Songs
               ? 'bg-gradient-to-br from-indigo-600 to-purple-400' // Spotify's Liked Songs gradient
               : 'bg-muted-foreground/70 hover:bg-muted-foreground/90', // Default for '+'
           isActive && 'bg-gradient-to-br from-indigo-600 to-purple-400' // Ensure active Liked Songs keeps gradient
       );

       const iconStyles = 'h-4 w-4 text-background'; // Icon color inside container

       return (
         <TooltipProvider delayDuration={150}>
           <Tooltip>
               <TooltipTrigger asChild>
                   <Link
                       href={item.href}
                       key={index}
                       className={buttonClasses}
                       aria-current={isActive ? 'page' : undefined}
                       aria-label={item.label}
                   >
                       <div className={iconContainerStyles}>
                           <Icon className={iconStyles} strokeWidth={item.href === '/playlist/create' ? 3 : 2} /> {/* Thicker stroke for Plus */}
                       </div>
                       <span className="truncate font-semibold">{item.label}</span> {/* Semibold */}
                   </Link>
               </TooltipTrigger>
               <TooltipContent side="right" className="md:hidden">
                   {item.label}
               </TooltipContent>
           </Tooltip>
          </TooltipProvider>
       );
   }

   // Render individual playlist/album/artist item in the library list
   const renderLibraryItem = (item: { id: string; name: string, type: string }, index: number) => {
       const href = `/${item.type.toLowerCase()}/${item.id}`; // Example route structure
       const isActive = pathname === href;
       // Placeholder image logic
       const coverArt = `https://picsum.photos/40/40?random=${item.type}${item.id}`;
       const altText = `${item.name} ${item.type} cover`;

       return (
           <Link
               href={href}
               key={index}
               className={cn(
                   'flex items-center gap-3 w-full text-left h-14 px-2 rounded-md transition-colors', // Increased height, padding, added gap
                   isActive ? 'bg-secondary' : 'hover:bg-secondary/70' // Subtle hover/active background
               )}
               aria-current={isActive ? 'page' : undefined}
               title={item.name}
           >
               <img
                   src={coverArt}
                   alt={altText}
                   width={40}
                   height={40}
                   className={cn(
                       "flex-shrink-0 object-cover",
                       item.type === 'Artist' ? 'rounded-full' : 'rounded' // Round artist images
                   )}
                   data-ai-hint={`${item.type} cover art`}
                   loading="lazy" // Lazy load library items
               />
               <div className="overflow-hidden">
                   <p className={cn(
                       "text-sm font-medium truncate", // Medium weight
                       isActive ? 'text-foreground' : 'text-foreground' // Keep text white
                   )}>
                       {item.name}
                   </p>
                   <p className="text-xs text-muted-foreground truncate">
                       {item.type} {/* Add more info like artist/owner if available */}
                   </p>
               </div>
           </Link>
       );
   }


  return (
    // Full height, overflow hidden needed for scrollarea
    <div className="w-full md:w-72 lg:w-80 bg-sidebar text-sidebar-foreground flex flex-col h-full overflow-hidden border-r border-sidebar-border"> {/* Adjusted width */}
      {/* Section 1: Home & Search */}
      <div className="bg-card m-2 mb-0 rounded-lg">
        {/* Spotify logo link removed, handled in mobile sheet trigger now */}
        <nav className="flex flex-col gap-1 p-2"> {/* Adjusted padding */}
          {mainNavItems.map((item, index) => renderNavItem(item, index))}
        </nav>
      </div>

      {/* Section 2: Library */}
      <div className="bg-card rounded-lg m-2 flex flex-col flex-grow min-h-0"> {/* flex-grow and min-h-0 for scroll */}
        {/* Library Header */}
        <div className="flex items-center justify-between px-1 pt-1 pb-2"> {/* Reduced padding */}
           {renderLibraryHeaderItem(libraryNavItem)}
           {/* Library Action Buttons: '+' and '->' */}
           <div className="flex items-center gap-1 pr-2">
               <TooltipProvider delayDuration={150}>
                   <Tooltip>
                       <TooltipTrigger asChild>
                           <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Create playlist or folder">
                               <Plus size={18} />
                           </Button>
                       </TooltipTrigger>
                       <TooltipContent side="bottom">Create playlist or folder</TooltipContent>
                   </Tooltip>
                   <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Show more options">
                                <ArrowRight size={18} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">Show more</TooltipContent>
                    </Tooltip>
               </TooltipProvider>
           </div>
        </div>

        {/* Filter Chips (Optional - Add if implementing filtering) */}
        {/* <div className="px-2 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Playlists</Button>
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Artists</Button>
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Albums</Button>
        </div> */}

        {/* Library Content - Scrollable */}
         <ScrollArea className="flex-grow px-2 pb-2 scrollbar-thin">
            {/* Search/Filter for Library (Optional) */}
             {/* <div className="px-2 pb-2 sticky top-0 bg-card z-10">
                 <Input placeholder="Search in Your Library" className="h-8 text-xs" />
             </div> */}

             {/* Library Actions (Create Playlist, Liked Songs) moved here */}
              <nav className="flex flex-col gap-2 mb-4 px-0">
                {libraryActions.map((item, index) => renderLibraryAction(item, index + 100))}
              </nav>

             {/* Library Items Grid/List */}
             <div className="space-y-1"> {/* Vertical list */}
                {libraryItems.map(renderLibraryItem)}
             </div>

             {/* Example empty state */}
             {libraryItems.length === 0 && (
                  <div className="text-center p-4 text-muted-foreground text-sm">
                     Your library is empty.
                  </div>
             )}
         </ScrollArea>

         {/* Sidebar Footer Links */}
         <div className="px-4 py-3 border-t border-border/50 mt-auto text-xs text-muted-foreground space-y-2">
             <div className="flex flex-wrap gap-x-4 gap-y-1">
                 <Link href="#" className="hover:text-foreground hover:underline">Legal</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Safety & Privacy Center</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Privacy Policy</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Cookies</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">About Ads</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Accessibility</Link>
             </div>
             <Link href="#" className="block hover:text-foreground hover:underline">Cookies</Link>

             {/* Language Button */}
             <Button variant="outline" size="sm" className="mt-4 h-8 px-3 border-muted-foreground hover:border-foreground text-foreground hover:scale-105">
                 <Globe size={16} className="mr-2" />
                 English
             </Button>
         </div>

      </div>
    </div>
  );
}
