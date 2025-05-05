'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Library, PlusSquare, Heart, RadioTower } from 'lucide-react'; // Added RadioTower icon
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area'; // Import ScrollArea

const mainNavItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/library', label: 'Your Library', icon: Library },
];

const secondaryNavItems = [
  { href: '/playlist/create', label: 'Create Playlist', icon: PlusSquare },
  { href: '/collection/tracks', label: 'Liked Songs', icon: Heart },
  { href: '/radio', label: 'Radio', icon: RadioTower }, // Added Radio
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
]

export default function SidebarNav() {
  const pathname = usePathname();

  const renderNavItem = (item: { href: string; label: string; icon: React.ElementType }, index: number) => {
    const Icon = item.icon;
    // More specific active check (e.g., '/' should only match home)
    const isActive = item.href === '/' ? pathname === item.href : pathname.startsWith(item.href) && item.href !== '/';
    return (
      <Link href={item.href} key={index} legacyBehavior passHref>
        <Button
          variant="ghost"
          className={cn(
            'w-full justify-start text-md font-medium h-10 px-4 rounded-md gap-4', // Added gap
            isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50' // Adjusted hover
          )}
          aria-current={isActive ? 'page' : undefined}
        >
          <Icon className="h-6 w-6 flex-shrink-0" /> {/* Increased icon size */}
          <span>{item.label}</span>
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
                'block w-full text-left text-sm font-normal h-8 px-4 rounded-md truncate transition-colors', // Use <a> tag for better semantics
                isActive ? 'text-foreground bg-secondary/50' : 'text-muted-foreground hover:text-foreground hover:bg-secondary/30'
            )}
             aria-current={isActive ? 'page' : undefined}
             title={playlist.name} // Add title for long names
        >
            {playlist.name}
        </a>
      </Link>
    );
   }

  return (
    // Changed bg to background for full consistency, adjusted width
    <aside className="fixed left-0 top-0 h-full w-64 bg-background border-r border-border flex flex-col z-40">
      <div className="p-4 pt-6 mb-2">
        <Link href="/" className="flex items-center gap-2" aria-label="MuseFlow Home">
          {/* Replace with actual SVG logo if available */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v6h-2zm0 8h2v2h-2z"/>
           </svg>
          <span className="text-2xl font-bold text-foreground">MuseFlow</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <nav className="flex flex-col gap-1 px-3 mb-3">
        {mainNavItems.map(renderNavItem)}
      </nav>

       {/* Secondary Navigation */}
      <nav className="flex flex-col gap-1 px-3 mb-3">
        {secondaryNavItems.map(renderNavItem)}
      </nav>

      <Separator className="my-1 mx-4 bg-border/60" />

      {/* User Playlists - Scrollable */}
      {/* Use ScrollArea component for consistent styling */}
       <ScrollArea className="flex-grow px-1 py-2">
            <div className="space-y-1 px-3">
              {userPlaylists.map(renderPlaylistLink)}
            </div>
       </ScrollArea>

      {/* Optional: Footer element like Download App */}
      {/* <div className="p-4 mt-auto border-t border-border">
        <Button variant="outline" className="w-full">Download App</Button>
      </div> */}
    </aside>
  );
}