import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'MuseFlow - Liked Songs',
  description: 'Your collection of liked songs.',
};

export default function LikedSongsPage() {
  // Placeholder data
  const likedSongsCount = 0;
  const totalDuration = "0 min";

  return (
    <div className="h-full">
      {/* Header Section */}
      <div className="bg-gradient-to-b from-primary/40 to-background/10 px-6 md:px-8 pt-16 pb-8 flex items-end gap-6">
         <div className="w-48 h-48 md:w-56 md:h-56 bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center rounded shadow-lg">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20 text-white">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
             </svg>
         </div>
         <div className="flex flex-col justify-end flex-grow">
             <p className="text-sm font-medium text-foreground uppercase mb-2">Playlist</p>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">Liked Songs</h1>
             <div className="flex items-center text-sm text-muted-foreground">
                 {/* User name placeholder */}
                 <span>Your Name</span>
                 <span className="mx-1">·</span>
                 <span>{likedSongsCount} songs</span>
                 {/* <span className="mx-1">,</span>
                 <span>{totalDuration}</span> */}
             </div>
         </div>
      </div>

       {/* Controls & Song List */}
       <div className="px-6 md:px-8 py-6">
            <div className="mb-6">
                 <Button size="lg" className="bg-primary text-primary-foreground rounded-full w-14 h-14 p-0 hover:scale-105 transition-transform shadow-lg">
                     <Play size={28} className="fill-current ml-1" />
                 </Button>
             </div>

            {/* Song list area */}
            {likedSongsCount === 0 ? (
                <p className="text-center text-muted-foreground mt-10">
                    Songs you like will appear here.
                </p>
            ) : (
                <div>
                     {/* Add table or list of liked songs here */}
                    <p>Song list goes here...</p>
                 </div>
            )}
       </div>
    </div>
  );
}