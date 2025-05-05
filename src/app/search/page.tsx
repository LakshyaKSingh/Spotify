import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card'; // Import Card components

export const metadata: Metadata = {
  title: 'Spotify - Search', // Updated title
  description: 'Search for songs, artists, albums, playlists, and podcasts.', // Updated description
};

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

export default function SearchPage() {
  return (
    // Use consistent padding
    <div className="py-6 px-4 md:px-6 lg:px-8 h-full">
      {/* Search input is now in the TopBar, conditionally shown for this page */}
      {/* Removed the local search input div */}

      {/* Browse Categories */}
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

      {/* Placeholder for actual search results */}
      {/* <div className="mt-10">
        <p className="text-center text-muted-foreground">
          Search results will appear here.
        </p>
      </div> */}
    </div>
  );
}
