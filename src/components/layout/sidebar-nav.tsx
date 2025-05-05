
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, Plus, Heart, ArrowRight, type LucideIcon, BookText, Podcast, Globe } from 'lucide-react';
import { SpotifyLogo } from '@/components/icons/spotify-logo';
import { cn } from '@/lib/utils';
import { buttonVariants, Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; // Import Tooltip components


const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
];

const libraryNavItem = { href: '/library', label: 'Your Library', icon: Library };

// Actions within the library section
const libraryActions = [
  // { href: '/playlist/create', label: 'Create Playlist', icon: Plus }, // Create button moved to header
  { href: '/collection/tracks', label: 'Liked Songs', icon: Heart },
  // { href: '/collection/episodes', label: 'Your Episodes', icon: Podcast }, // Example if needed
];

// Example Playlists/Albums/Artists (replace with dynamic data)
const libraryItems = [
    { id: 'pl1', name: 'Deep Focus Coding Mix', type: 'Playlist', owner: 'You' },
    { id: 'liked', name: 'Liked Songs', type: 'Playlist', owner: 'You', songCount: 120 }, // Add Liked Songs entry if filter is applied
    { id: 'artist1', name: 'Queen', type: 'Artist' },
    { id: 'album1', name: 'Bohemian Rhapsody (The Original Soundtrack)', type: 'Album', artist: 'Queen' },
    { id: 'pl2', name: '80s Rock Anthems', type: 'Playlist', owner: 'Spotify' },
    { id: 'artist2', name: 'AC/DC', type: 'Artist' },
    { id: 'pl3', name: 'Workout Mix', type: 'Playlist', owner: 'You' },
    { id: 'album2', name: 'Back in Black', type: 'Album', artist: 'AC/DC' },
    { id: 'podcast1', name: 'The Daily', type: 'Podcast & Show', publisher: 'The New York Times' },
    { id: 'podcast2', name: 'Stuff You Should Know', type: 'Podcast & Show', publisher: 'iHeartPodcasts' },
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
      isActive ? 'text-foreground bg-transparent' : 'text-muted-foreground hover:text-foreground' // Active/hover states - Spotify active isn't highlighted in this section
    );

    // Fill active Home icon like Spotify
    const iconStyles = cn("h-6 w-6 flex-shrink-0", isActive && item.href === '/' && 'fill-current');

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
           'flex-1 justify-start rounded-md gap-4 h-10 px-3', // Use flex-1 to take available space
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

   // Render Library Action Buttons (Liked Songs, etc.) - Combined with Library items list styling
   const renderLibraryActionItem = (item: NavItem, index: number) => {
       const Icon = item.icon;
       // Special active check for Liked Songs
       const isActive = item.href === '/collection/tracks' && pathname === item.href;

        // Example data structure for display
        const displayItem = {
            id: item.href, // Use href as ID for simplicity
            name: item.label,
            type: 'Playlist', // Assuming Liked Songs is treated like a playlist visually
            owner: 'You', // Placeholder owner
            coverArt: '', // No cover art, use icon container
            isAction: true, // Flag to use icon instead of image
        };

        return renderLibraryItem(displayItem, index, true); // Pass flag to use icon
   }

   // Render individual playlist/album/artist/podcast item in the library list
   const renderLibraryItem = (
        item: { id: string; name: string; type: string; owner?: string; artist?: string; publisher?: string; songCount?: number; coverArt?: string, isAction?: boolean },
        index: number,
        isActionItem: boolean = false // Flag to differentiate action items like Liked Songs
    ) => {
       const href = isActionItem ? item.id : `/${item.type.toLowerCase().split(' ')[0]}/${item.id}`; // Adjust href generation
       const isActive = pathname === href;

       // Use placeholder or gradient for cover art/icon
       let coverArtElement: React.ReactNode;
       if (isActionItem && item.name === 'Liked Songs') {
            coverArtElement = (
                <div className={cn(
                    "w-12 h-12 rounded flex items-center justify-center flex-shrink-0",
                    isActive
                        ? 'bg-gradient-to-br from-indigo-600 to-purple-400' // Active gradient
                        : 'bg-muted-foreground/70 group-hover/libitem:bg-muted-foreground/90 transition-colors' // Default/Hover background
                )}>
                    <Heart className="h-6 w-6 text-white" fill="currentColor" />
                </div>
            );
       } else {
            const coverArtSrc = item.coverArt || `https://picsum.photos/48/48?random=${item.type}${item.id}`;
            coverArtElement = (
                <img
                   src={coverArtSrc}
                   alt={`${item.name} cover`}
                   width={48}
                   height={48}
                   className={cn(
                       "flex-shrink-0 object-cover w-12 h-12", // Standard 48x48 size
                       item.type === 'Artist' ? 'rounded-full' : 'rounded' // Round artist images
                   )}
                   data-ai-hint={`${item.type} cover art sidebar`}
                   loading="lazy" // Lazy load library items
               />
           );
       }

       const descriptionText = [
           item.type === 'Playlist' && 'Playlist',
           item.type === 'Album' && 'Album',
           item.type === 'Artist' && 'Artist',
           item.type === 'Podcast & Show' && 'Podcast', // Simplified type
           item.owner || item.artist || item.publisher,
           item.songCount ? `• ${item.songCount} songs` : null
       ].filter(Boolean).join(' • '); // Join with dots like Spotify


       return (
           <Link
               href={href}
               key={index}
               className={cn(
                   'group/libitem flex items-center gap-3 w-full text-left h-[62px] px-2 rounded-md transition-colors', // Increased height, padding, added gap
                   isActive ? 'bg-secondary' : 'hover:bg-secondary/70' // Subtle hover/active background
               )}
               aria-current={isActive ? 'page' : undefined}
               title={`${item.name}\n${descriptionText}`} // Tooltip showing full info
           >
               {coverArtElement}
               <div className="overflow-hidden flex-1">
                   <p className={cn(
                       "text-base font-medium truncate", // Spotify uses slightly larger font here (16px)
                       isActive ? 'text-primary' : 'text-foreground' // Active uses primary color
                   )}>
                       {item.name}
                   </p>
                   <p className="text-sm text-muted-foreground truncate mt-1"> {/* Smaller muted text */}
                       {descriptionText}
                   </p>
               </div>
           </Link>
       );
   }


  return (
    // Full height, overflow hidden needed for scrollarea
    // Adjusted width to be closer to Spotify's default (approx 330px on larger screens)
    // Using w-full as it's constrained by parent in layout
    <div className="w-full bg-sidebar text-sidebar-foreground flex flex-col h-full overflow-hidden border-r border-sidebar-border">
      {/* Section 1: Home & Search */}
      <div className="bg-card m-2 mb-0 rounded-lg">
        {/* Spotify logo link */}
         <Link href="/" className="block px-4 pt-4 pb-2">
             <SpotifyLogo className="h-8 w-auto text-foreground" /> {/* Adjusted size */}
         </Link>
        <nav className="flex flex-col gap-1 p-2 pt-0"> {/* Adjusted padding */}
          {mainNavItems.map((item, index) => renderNavItem(item, index))}
        </nav>
      </div>

      {/* Section 2: Library */}
      <div className="bg-card rounded-lg m-2 flex flex-col flex-grow min-h-0"> {/* flex-grow and min-h-0 for scroll */}
        {/* Library Header */}
        <div className="flex items-center justify-between px-1 pt-1"> {/* Reduced padding */}
           {renderLibraryHeaderItem(libraryNavItem)}
           {/* Library Action Buttons: '+' and '->' */}
           <div className="flex items-center gap-1 pr-2">
               <TooltipProvider delayDuration={150}>
                   <Tooltip>
                       <TooltipTrigger asChild>
                           {/* Link to create playlist page */}
                           <Link href="/playlist/create">
                             <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Create playlist or folder">
                                 <Plus size={18} strokeWidth={2}/>
                             </Button>
                            </Link>
                       </TooltipTrigger>
                       <TooltipContent side="bottom">Create playlist or folder</TooltipContent>
                   </Tooltip>
                   {/* Removed unnecessary arrow button for now */}
                   {/* <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Show more options">
                                <ArrowRight size={18} />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">Show more</TooltipContent>
                    </Tooltip> */}
               </TooltipProvider>
           </div>
        </div>

        {/* Filter Chips (Optional - Add if implementing filtering) */}
        {/* <div className="px-2 pb-2 flex gap-2 overflow-x-auto scrollbar-none">
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Playlists</Button>
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Artists</Button>
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Albums</Button>
            <Button variant="secondary" size="sm" className="rounded-full h-7 px-3 text-xs bg-secondary/60 hover:bg-secondary">Podcasts & Shows</Button>

        </div> */}

        {/* Library Content - Scrollable */}
         <ScrollArea className="flex-grow px-2 pb-2 scrollbar-thin">
            {/* Search/Filter for Library (Optional) */}
             {/* <div className="px-2 pb-2 sticky top-0 bg-card z-10">
                 <Input placeholder="Search in Your Library" className="h-8 text-xs" />
             </div> */}

             {/* Library Items Grid/List */}
             <div className="space-y-1 mt-2"> {/* Add margin top */}
                {/* Render Liked Songs action first */}
                {libraryActions.map((item, index) => renderLibraryActionItem(item, index))}
                {/* Then render the rest of the library items */}
                {libraryItems
                    .filter(item => item.name !== 'Liked Songs') // Avoid duplicate render if included in main list
                    .map((item, index) => renderLibraryItem(item, index + libraryActions.length))}
             </div>

             {/* Example empty state */}
             {libraryItems.length === 0 && libraryActions.length === 0 && (
                  <div className="text-center p-4 text-muted-foreground text-sm">
                     Your library is empty.
                  </div>
             )}
         </ScrollArea>

         {/* Sidebar Footer Links */}
         <div className="px-4 py-3 border-t border-border/50 mt-auto text-xs text-muted-foreground space-y-2 flex flex-col items-start">
             <div className="flex flex-wrap gap-x-4 gap-y-1">
                 <Link href="#" className="hover:text-foreground hover:underline">Legal</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Safety & Privacy Center</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Privacy Policy</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Cookies</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">About Ads</Link>
                 <Link href="#" className="hover:text-foreground hover:underline">Accessibility</Link>
             </div>
             {/* Removed redundant Cookies link */}
             {/* <Link href="#" className="block hover:text-foreground hover:underline">Cookies</Link> */}

             {/* Language Button */}
             <Button variant="outline" size="sm" className="mt-4 h-8 px-3 border-muted-foreground hover:border-foreground text-foreground hover:scale-105 font-semibold">
                 <Globe size={16} className="mr-2" />
                 English
             </Button>
         </div>

      </div>
    </div>
  );
}
