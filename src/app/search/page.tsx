import type { Metadata } from 'next';
import { Input } from '@/components/ui/input';
import { Search as SearchIcon } from 'lucide-react'; // Rename Search icon to avoid conflict

export const metadata: Metadata = {
  title: 'MuseFlow - Search',
  description: 'Search for songs, artists, albums, and playlists.',
};

export default function SearchPage() {
  return (
    <div className="py-6 px-6 md:px-8 h-full">
      <div className="relative mb-8 max-w-md mx-auto">
        <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 pointer-events-none" />
        <Input
          type="search"
          placeholder="What do you want to listen to?"
          className="pl-10 w-full bg-secondary border-border rounded-full h-12 text-base focus:ring-primary focus:border-primary placeholder:text-muted-foreground"
          aria-label="Search music"
        />
      </div>

      {/* Search results area - Placeholder */}
      <div className="mt-6">
        <p className="text-center text-muted-foreground">
          Start typing to search for music.
        </p>
        {/* Add logic to display search results here */}
      </div>
    </div>
  );
}