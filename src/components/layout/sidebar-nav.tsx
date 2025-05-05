
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, PlusSquare, Heart, type LucideIcon } from 'lucide-react'; // Use LucideIcon type
import { SpotifyLogo } from '@/components/icons/spotify-logo'; // Import Spotify logo
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button'; // Import variants
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
];

const libraryNavItem = { href: '/library', label: 'Your Library', icon: Library };

// Updated secondary nav items to match Spotify's Library section actions
const libraryActions = [
  { href: '/playlist/create', label: 'Create Playlist', icon: PlusSquare },
  { href: '/collection/tracks', label: 'Liked Songs', icon: Heart },
  // Removed Radio as it's not typically a primary action here
];

// Example Playlists (replace with dynamic data)
const userPlaylists = [
    { id: 'pl1', name: 'Deep Focus Coding Mix 2024 Lo-fi Hip Hop Chill Beats' },
    { id: 'pl2', name: '80s Rock Anthems' },
    { id: 'pl3', name: 'Workout Mix' },
    { id: 'pl4', name: 'Chill Evening Jazz & Blues Collection' },
    { id: 'pl5', name: 'Indie Gems Discovery Weekly Updated Playlist' },
    { id: 'pl6', name: 'Summer Vibes Pop Hits' },
    { id: 'pl7', name: 'Classical Essentials for Studying' },
    { id: 'pl8', name: 'Road Trip Classics' },
    { id: 'pl9', name: 'Another Long Playlist Title That Might Overflow' },
    { id: 'pl10', name: 'Short Playlist' },
    { id: 'pl11', name: 'Very Very Very Long Playlist Name Indeed Just to Test Wrapping' },
]

// Define type for nav items
interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon; // Use the specific type
}


export default function SidebarNav() {
  const pathname = usePathname();

  const renderNavItem = (item: NavItem, index: number, isLibraryItem: boolean = false) => {
    const Icon = item.icon;
    const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href) && item.href !== '/';

    // Base classes for the link (acting as a button)
    const linkClasses = cn(
      buttonVariants({ variant: 'ghost' }), // Apply button styles
      'w-full justify-start rounded-sm gap-3', // Common layout styles
      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground' // Active/hover states
    );

    // Specific styles based on type (main nav vs library action)
    const specificStyles = isLibraryItem
      ? 'text-sm font-medium h-8 px-2' // Library action styles
      : 'text-base font-bold h-10 px-3 gap-4'; // Main nav styles

    const iconContainerStyles = isLibraryItem
      ? cn(
          "w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0",
          isActive || item.href === '/collection/tracks' // Liked songs specific style
            ? 'bg-gradient-to-br from-purple-700 to-blue-400' // Example gradient
            : 'bg-muted-foreground/80' // Default icon background
        )
      : ''; // No extra container for main nav icons

    const iconStyles = isLibraryItem
      ? 'h-4 w-4 text-foreground' // Library action icon size
      : cn("h-6 w-6 flex-shrink-0", isActive && 'fill-current'); // Main nav icon size and fill


    return (
      <Link
        href={item.href}
        key={index}
        className={cn(linkClasses, specificStyles)}
        aria-current={isActive ? 'page' : undefined}
        title={isLibraryItem ? item.label : undefined} // Tooltip only for library actions
      >
        {isLibraryItem ? (
            <div className={iconContainerStyles}>
                <Icon className={iconStyles} />
            </div>
        ) : (
            <Icon className={iconStyles} />
        )}
        <span className="truncate">{item.label}</span>
      </Link>
    );
  };

   const renderPlaylistLink = (playlist: { id: string; name: string }, index: number) => {
    const href = `/playlist/${playlist.id}`;
    const isActive = pathname === href;
    return (
      <Link
          href={href}
          key={index}
          className={cn(
              'block w-full text-left text-sm font-medium h-8 px-3 rounded-sm truncate transition-colors', // Medium font weight, adjusted padding
              isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground' // No background change on hover/active
          )}
          aria-current={isActive ? 'page' : undefined}
          title={playlist.name}
      >
          {playlist.name}
      </Link>
    );
   }

  return (
    // Use sidebar variables for background/foreground, fixed width, flex column layout
    <div className="w-60 bg-sidebar text-sidebar-foreground flex flex-col h-full overflow-hidden">
      {/* Section 1: Home & Search */}
      <div className="bg-card rounded-lg m-2">
        <div className="p-3 pt-4 mb-2">
            <Link href="/" className="flex items-center gap-2 px-1" aria-label="Spotify Home">
              <SpotifyLogo className="w-auto h-7 text-foreground" />
            </Link>
        </div>
        <nav className="flex flex-col gap-1 px-2 pb-2">
          {mainNavItems.map((item, index) => renderNavItem(item, index))}
        </nav>
      </div>

      {/* Section 2: Library & Playlists */}
      <div className="bg-card rounded-lg m-2 mt-0 flex flex-col flex-grow min-h-0"> {/* flex-grow and min-h-0 for scroll */}
        {/* Library Header */}
        <div className="flex items-center justify-between px-3 pt-3 pb-2">
           {renderNavItem(libraryNavItem, 99)} {/* Render library nav item like others */}
           {/* Add '+' and '->' buttons here if needed */}
        </div>

        {/* Library Action Buttons */}
        <nav className="flex flex-col gap-1 px-2 mb-3">
            {libraryActions.map((item, index) => renderNavItem(item, index + 100, true))}
        </nav>

        <Separator className="my-1 mx-4 bg-muted/40" />

        {/* User Playlists - Scrollable */}
         <ScrollArea className="flex-grow px-1 py-2 scrollbar-thin"> {/* Use scrollbar-thin */}
              <div className="space-y-1 px-2">
                {userPlaylists.map(renderPlaylistLink)}
              </div>
         </ScrollArea>
      </div>

    </div>
  );
}
