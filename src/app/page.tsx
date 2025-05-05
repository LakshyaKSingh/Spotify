'use client';

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import MusicGrid from '@/components/dashboard/music-grid';
import {SpotifyLogo} from "@/components/icons/spotify-logo";
import {useRouter} from "next/navigation"; // Import useRouter hook
import { Home as HomeIcon } from 'lucide-react'; // Import Home icon
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

// Dummy data for demonstration
const featuredPlaylists = [
  { id: 1, title: "Chill Vibes", description: "Relax and unwind", cover: "https://picsum.photos/300/300?random=1", hint: "playlist chill" },
  { id: 2, title: "Workout Beats", description: "Energize your workout", cover: "https://picsum.photos/300/300?random=2", hint: "playlist workout" },
  { id: 3, title: "Focus Flow", description: "Instrumental tracks for concentration", cover: "https://picsum.photos/300/300?random=3", hint: "playlist focus" },
  { id: 4, title: "Road Trip Anthems", description: "Sing along on the open road", cover: "https://picsum.photos/300/300?random=4", hint: "playlist road trip" },
  { id: 5, title: "Today's Top Hits", description: "The biggest songs of the moment", cover: "https://picsum.photos/300/300?random=13", hint: "playlist pop hits" },
   { id: 14, title: "RapCaviar", description: "The most influential playlist in hip-hop", cover: "https://picsum.photos/300/300?random=14", hint: "playlist rap hip hop" },

];

const newReleases = [
  { id: 6, title: "Midnight Drive", artist: "Synthwave Masters", cover: "https://picsum.photos/300/300?random=5", hint: "album synthwave" },
  { id: 7, title: "Acoustic Mornings", artist: "Willow Creek", cover: "https://picsum.photos/300/300?random=6", hint: "album acoustic" },
  { id: 8, title: "Urban Echoes", artist: "DJ Metronome", cover: "https://picsum.photos/300/300?random=7", hint: "album hip hop" },
  { id: 9, title: "Lost in Translation", artist: "The Wanderers", cover: "https://picsum.photos/300/300?random=8", hint: "album indie rock" },
   { id: 15, title: "Solar Flare", artist: "Cosmic Funk", cover: "https://picsum.photos/300/300?random=15", hint: "album funk electronic" },
   { id: 16, title: "Whispers of the Forest", artist: "Elven Melodies", cover: "https://picsum.photos/300/300?random=16", hint: "album fantasy ambient" },
];

const trendingMusic = [
  { id: 10, title: "Summer Haze", artist: "Tropical House Collective", cover: "https://picsum.photos/300/300?random=9", hint: "song summer house" },
  { id: 11, title: "City Lights", artist: "Neon Dreams", cover: "https://picsum.photos/300/300?random=10", hint: "song electronic pop" },
  { id: 12, title: "Mountain Air", artist: "Folklore Ensemble", cover: "https://picsum.photos/300/300?random=11", hint: "song folk" },
  { id: 13, title: "Rhythm & Soul", artist: "The Groove Merchants", cover: "https://picsum.photos/300/300?random=12", hint: "song funk soul" },
  { id: 17, title: "Ocean Drive", artist: "Lo-Fi Beats", cover: "https://picsum.photos/300/300?random=17", hint: "song lofi hip hop" },
  { id: 18, title: "Starlight", artist: "Future Bass Crew", cover: "https://picsum.photos/300/300?random=18", hint: "song future bass" },

];

// Example browse categories
const browseCategories = [
    { id: 'music', name: 'Music', color: 'bg-red-600', image: 'https://picsum.photos/100/100?random=cat1' },
    { id: 'podcasts', name: 'Podcasts', color: 'bg-blue-600', image: 'https://picsum.photos/100/100?random=cat2' },
    { id: 'live', name: 'Live Events', color: 'bg-green-600', image: 'https://picsum.photos/100/100?random=cat3' },
    { id: 'charts', name: 'Charts', color: 'bg-yellow-600', image: 'https://picsum.photos/100/100?random=cat4' },
    { id: 'releases', name: 'New Releases', color: 'bg-purple-600', image: 'https://picsum.photos/100/100?random=cat5' },
    { id: 'discover', name: 'Discover', color: 'bg-pink-600', image: 'https://picsum.photos/100/100?random=cat6' },
    { id: 'concerts', name: 'Concerts', color: 'bg-orange-600', image: 'https://picsum.photos/100/100?random=cat7' },
    { id: 'mood', name: 'Mood', color: 'bg-teal-600', image: 'https://picsum.photos/100/100?random=cat8' },
     { id: 'pop', name: 'Pop', color: 'bg-rose-500', image: 'https://picsum.photos/100/100?random=cat9' },
    { id: 'hiphop', name: 'Hip Hop', color: 'bg-amber-700', image: 'https://picsum.photos/100/100?random=cat10' },
    { id: 'rock', name: 'Rock', color: 'bg-indigo-500', image: 'https://picsum.photos/100/100?random=cat11' },
    { id: 'country', name: 'Country', color: 'bg-lime-600', image: 'https://picsum.photos/100/100?random=cat12' },

];

function Home() {
    const router = useRouter(); // Initialize useRouter

    // Function to handle search input click and navigate to search page
    const handleSearchClick = () => {
        router.push('/search');
    };


    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

    if (!isMounted) {
        return null; // Or a loading indicator
    }

  return (
    // Adjusted padding for main content area
    <div className="py-6 px-4 md:px-6 lg:px-8"> {/* Consistent padding */}

        {/* Top Bar */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 bg-background/80 backdrop-blur-sm px-4 md:px-6 border-b border-border/60">
            {/* Spotify Logo */}
            <Link href="/" className="flex items-center">
                <SpotifyLogo className="h-8 w-auto text-foreground" />
            </Link>

            {/* Home Icon */}
            <Link href="/" className="flex items-center">
                <Button variant="ghost" size="icon" className="rounded-full w-8 h-8">
                    <HomeIcon size={18} className="text-foreground" />
                </Button>
            </Link>

            {/* Search Bar */}
            <div className="relative flex-1 max-w-xs ml-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
                <Input
                    type="search"
                    placeholder="What do you want to play?" // Updated placeholder
                    className="pl-10 w-full bg-secondary border-transparent rounded-full h-10 text-sm focus:ring-1 focus:ring-ring focus:border-transparent placeholder:text-muted-foreground focus:bg-card cursor-pointer" // Adjusted styles for focus, border, bg
                    aria-label="Search music"
                    onClick={handleSearchClick} // Add onClick handler
                />
                {/* Optional: Add a clear button or other icons inside the input if needed */}
            </div>

             {/* Spacer to push auth buttons to the right */}
            <div className="flex-1"></div>

            {/* Right Side Links & Auth Buttons */}
            <div className="flex items-center gap-2">
               {/* Premium Link */}
               <button className="hidden lg:inline-flex text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2 bg-transparent border-none outline-none cursor-pointer">
                  Premium
               </button>
               {/* Support Link */}
               <button className="hidden lg:inline-flex text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2 bg-transparent border-none outline-none cursor-pointer">
                  Support
               </button>
               {/* Download Link */}
               <button className="hidden sm:inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2 bg-transparent border-none outline-none cursor-pointer">
                  {/*<Download size={18} strokeWidth={2.5} />*/} {/* Thicker icon */}
                  Install App
               </button>
               {/* Separator */}
               <div className="hidden sm:block h-6 w-px bg-muted-foreground/50 mx-2"></div>

               {/* Sign Up */}
               <button className="text-muted-foreground hover:text-foreground hover:scale-105 font-bold text-sm px-4 py-2 rounded-full bg-transparent border-none outline-none cursor-pointer">
                  Sign up
               </button>
               {/* Log In */}
               <button className="bg-white text-black hover:scale-[1.04] font-bold text-sm px-8 py-2 rounded-full shadow-sm hover:bg-gray-100 transition-transform duration-75 border-none outline-none cursor-pointer">
                  Log in
               </button>
               {/* User Avatar (Example for logged in state) */}
               {/* <Button variant="ghost" size="icon" className="bg-muted rounded-full w-8 h-8">
             <User size={18} />
         </Button> */}
            </div>
        </header>

      <section className="mb-8"> {/* Reduced bottom margin */}
        <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">Featured Playlists</h2> {/* Bold font */}
        <MusicGrid items={featuredPlaylists} type="playlist" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">New Releases</h2>
        <MusicGrid items={newReleases} type="album" />
      </section>

       <section className="mb-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">Trending songs</h2>
                <Link href="/trending" className="text-sm text-muted-foreground hover:text-foreground">Show all</Link>
            </div>
            <MusicGrid items={trendingMusic} type="song" />
        </section>


        <section className="mb-8">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">Popular Artists</h2>
                <Link href="/artists" className="text-sm text-muted-foreground hover:text-foreground">Show all</Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                 {/* Placeholder artist cards */}
                 {[19, 20, 21, 22, 23, 24].map(id => (
                    <Card key={id} className="group relative overflow-hidden bg-card border-border hover:bg-secondary transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg p-4 flex flex-col items-center">
                        <Image src={`https://picsum.photos/200/200?random=artist${id}`} alt={`Artist ${id}`} width={160} height={160} className="rounded-full mb-3 object-cover" data-ai-hint="artist profile picture music" />
                        <CardTitle className="text-base font-semibold text-foreground text-center truncate w-full">Artist Name {id}</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground mt-1 text-center">Artist</CardDescription>
                     </Card>
                 ))}
            </div>
         </section>

        {/* Browse Categories */}
        <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 mt-4">Browse all</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {browseCategories.map((category) => (
                    <Card
                        key={category.id}
                        className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer group ${category.color}`}
                    >
                        <CardContent className="p-4 h-full flex flex-col justify-between">
                            <h3 className="text-xl font-bold text-white">{category.name}</h3>
                            <img
                                src={category.image}
                                alt={category.name}
                                width={80}
                                height={80}
                                className="absolute bottom-0 right-0 transform rotate-[25deg] translate-x-[18%] translate-y-[5%] w-[80px] h-[80px] object-cover shadow-xl transition-transform duration-300 group-hover:scale-105"
                                data-ai-hint={`browse category ${category.name}`}
                            />
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

    </div>
  );
}

export default Home;
