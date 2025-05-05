'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react'; // Removed RadioTower
import { SpotifyLogo } from '@/components/icons/spotify-logo'; // Import Spotify logo
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
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

export default function SidebarNav() {
  const pathname = usePathname();

  const renderNavItem = (item: { href: string; label: string; icon: React.ElementType }, index: number, isLibraryItem: boolean = false) => {
    const Icon = item.icon;
    const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href) && item.href !== '/';

    // Special handling for Library item actions
    if (isLibraryItem) {
        return (
            <Link href={item.href} key={index} legacyBehavior passHref>
                <Button
                    variant="ghost"
                    className={cn(
                        'w-full justify-start text-sm font-medium h-8 px-2 rounded-sm gap-3', // Smaller height, padding, gap
                        isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                    title={item.label} // Tooltip for action item
                >
                    <div className={cn( // Container for icon with background
                        "w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0",
                         isActive || item.href === '/collection/tracks' // Liked songs has gradient bg
                            ? 'bg-gradient-to-br from-purple-700 to-blue-400' // Example gradient
                            : 'bg-muted-foreground/80' // Default background for icon
                    )}>
                       <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <span className="truncate">{item.label}</span>
                </Button>
            </Link>
        )
    }


    return (
      <Link href={item.href} key={index} legacyBehavior passHref>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-base font-bold h-10 px-3 rounded-sm gap-4', // Spotify uses bolder font, adjusted padding/gap
            isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground' // Removed background change on active, only text color
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon className={cn("h-6 w-6 flex-shrink-0", isActive && 'fill-current')} /> {/* Fill icon if active */}
          <span className="truncate">{item.label}</span>
        </Button>
      </Link>
    );
  };

   const renderPlaylistLink = (playlist: { id: string; name: string }, index: number) => {
    const href = `/playlist/${playlist.id}`;
    const isActive = pathname === href;
    return (
      <Link href={href} key={index} legacyBehavior passHref>
        <a
            className={cn(
                'block w-full text-left text-sm font-medium h-8 px-3 rounded-sm truncate transition-colors', // Medium font weight, adjusted padding
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground' // No background change on hover/active
            )}
             aria-current={isActive ? 'page' : undefined}
             title={playlist.name}
        >
            {playlist.name}
        </a>
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
