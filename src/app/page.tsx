import type { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import MusicGrid from '@/components/dashboard/music-grid';

export const metadata: Metadata = {
  title: 'MuseFlow - Dashboard',
  description: 'Discover featured playlists, new releases, and trending music.',
};

// Dummy data for demonstration
const featuredPlaylists = [
  { id: 1, title: "Chill Vibes", description: "Relax and unwind", cover: "https://picsum.photos/300/300?random=1", hint: "playlist chill" },
  { id: 2, title: "Workout Beats", description: "Energize your workout", cover: "https://picsum.photos/300/300?random=2", hint: "playlist workout" },
  { id: 3, title: "Focus Flow", description: "Instrumental tracks for concentration", cover: "https://picsum.photos/300/300?random=3", hint: "playlist focus" },
  { id: 4, title: "Road Trip Anthems", description: "Sing along on the open road", cover: "https://picsum.photos/300/300?random=4", hint: "playlist road trip" },
];

const newReleases = [
  { id: 5, title: "Midnight Drive", artist: "Synthwave Masters", cover: "https://picsum.photos/300/300?random=5", hint: "album synthwave" },
  { id: 6, title: "Acoustic Mornings", artist: "Willow Creek", cover: "https://picsum.photos/300/300?random=6", hint: "album acoustic" },
  { id: 7, title: "Urban Echoes", artist: "DJ Metronome", cover: "https://picsum.photos/300/300?random=7", hint: "album hip hop" },
  { id: 8, title: "Lost in Translation", artist: "The Wanderers", cover: "https://picsum.photos/300/300?random=8", hint: "album indie rock" },
];

const trendingMusic = [
  { id: 9, title: "Summer Haze", artist: "Tropical House Collective", cover: "https://picsum.photos/300/300?random=9", hint: "song summer house" },
  { id: 10, title: "City Lights", artist: "Neon Dreams", cover: "https://picsum.photos/300/300?random=10", hint: "song electronic pop" },
  { id: 11, title: "Mountain Air", artist: "Folklore Ensemble", cover: "https://picsum.photos/300/300?random=11", hint: "song folk" },
  { id: 12, title: "Rhythm & Soul", artist: "The Groove Merchants", cover: "https://picsum.photos/300/300?random=12", hint: "song funk soul" },
];


export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold text-foreground">Welcome to MuseFlow</h1>
        <div className="relative w-full md:w-1/3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            type="search"
            placeholder="Search songs, artists, playlists..."
            className="pl-10 bg-card border-border focus:ring-accent"
          />
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Featured Playlists</h2>
        <MusicGrid items={featuredPlaylists} type="playlist" />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-foreground">New Releases</h2>
        <MusicGrid items={newReleases} type="album" />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-foreground">Trending Music</h2>
        <MusicGrid items={trendingMusic} type="song" />
      </section>
    </div>
  );
}
