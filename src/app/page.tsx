import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import MusicGrid from '@/components/dashboard/music-grid';
// import Greeting from '@/components/dashboard/greeting'; // Removed Greeting component

export const metadata: Metadata = {
  title: 'Spotify - Web Player: Music for everyone', // Updated title
  description: 'Discover featured playlists, new releases, and trending music.',
};

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


export default function Home() {
  return (
    // Adjusted padding for main content area
    <div className="py-6 px-4 md:px-6 lg:px-8"> {/* Consistent padding */}
      {/* Greeting is implicitly handled by context or TopBar, removed explicit h1 */}

      <section className="mb-8"> {/* Reduced bottom margin */}
        <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">Featured Playlists</h2> {/* Bold font */}
        <MusicGrid items={featuredPlaylists} type="playlist" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">New Releases</h2>
        <MusicGrid items={newReleases} type="album" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">Trending Now</h2> {/* Changed title */}
        <MusicGrid items={trendingMusic} type="song" />
      </section>

        {/* Add more sections like Popular Artists, Podcasts etc. */}
         <section>
            <h2 className="text-2xl font-bold mb-4 text-foreground hover:underline cursor-pointer">Popular Artists</h2>
            {/* Replace with ArtistGrid component */}
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
    </div>
  );
}
