import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';

// This function can be used to generate metadata dynamically based on the playlist ID
// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   // Fetch playlist data based on params.id
//   // const playlist = await fetchPlaylistData(params.id);
//   const playlistName = `Playlist ${params.id}`; // Placeholder
//   return {
//     title: `MuseFlow - ${playlistName}`,
//     description: `Listen to ${playlistName} on MuseFlow.`,
//   };
// }

export const metadata: Metadata = { // Static metadata as fallback or default
  title: 'MuseFlow - Playlist',
  description: 'Listen to this playlist on MuseFlow.',
};


export default function PlaylistPage({ params }: { params: { id: string } }) {
  // Fetch playlist data based on params.id
  // const playlist = await fetchPlaylistData(params.id);

  // Placeholder data
  const playlist = {
    id: params.id,
    name: `My Awesome Playlist ${params.id}`,
    description: "A collection of amazing tracks.",
    coverArt: `https://picsum.photos/300/300?random=playlist${params.id}`,
    owner: "Your Name",
    songCount: 0,
    songs: [], // Add song data here
  };

  return (
    <div className="h-full">
      {/* Header Section */}
       <div className="bg-gradient-to-b from-purple-800/40 to-background/10 px-6 md:px-8 pt-16 pb-8 flex items-end gap-6">
          <Image
            src={playlist.coverArt}
            alt={`${playlist.name} cover art`}
            width={224} // 56 * 4
            height={224}
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded shadow-lg"
            data-ai-hint="playlist cover music"
            priority // Prioritize loading playlist cover
          />
         <div className="flex flex-col justify-end flex-grow">
             <p className="text-sm font-medium text-foreground uppercase mb-2">Playlist</p>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 line-clamp-2">{playlist.name}</h1>
             <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{playlist.description}</p>
             <div className="flex items-center text-sm text-muted-foreground">
                 <span>{playlist.owner}</span>
                 <span className="mx-1">·</span>
                 <span>{playlist.songCount} songs</span>
             </div>
         </div>
      </div>

       {/* Controls & Song List */}
       <div className="px-6 md:px-8 py-6">
            <div className="mb-6">
                 <Button size="lg" className="bg-primary text-primary-foreground rounded-full w-14 h-14 p-0 hover:scale-105 transition-transform shadow-lg">
                     <Play size={28} className="fill-current ml-1" />
                 </Button>
                 {/* Add more controls like shuffle, like, options (...) here */}
             </div>

            {/* Song list area */}
            {playlist.songCount === 0 ? (
                <p className="text-center text-muted-foreground mt-10">
                    This playlist is empty. Add some songs!
                </p>
            ) : (
                <div>
                     {/* Add table or list of songs here */}
                    <p>Song list for playlist {params.id} goes here...</p>
                 </div>
            )}
       </div>
    </div>
  );
}