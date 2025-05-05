import type { Metadata } from 'next';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: 'MuseFlow - Your Library',
  description: 'Your collection of playlists, liked songs, albums, and artists.',
};

export default function LibraryPage() {
  return (
    <div className="py-6 px-6 md:px-8 h-full">
      <h1 className="text-3xl font-bold text-foreground mb-6">Your Library</h1>

       <Tabs defaultValue="playlists" className="w-full">
        <TabsList className="mb-6 bg-transparent p-0 gap-4 border-b-0">
          <TabsTrigger value="playlists" className="data-[state=active]:bg-secondary data-[state=active]:text-foreground text-muted-foreground rounded-full px-4 py-2 text-sm">Playlists</TabsTrigger>
          <TabsTrigger value="artists" className="data-[state=active]:bg-secondary data-[state=active]:text-foreground text-muted-foreground rounded-full px-4 py-2 text-sm">Artists</TabsTrigger>
          <TabsTrigger value="albums" className="data-[state=active]:bg-secondary data-[state=active]:text-foreground text-muted-foreground rounded-full px-4 py-2 text-sm">Albums</TabsTrigger>
          <TabsTrigger value="podcasts" className="data-[state=active]:bg-secondary data-[state=active]:text-foreground text-muted-foreground rounded-full px-4 py-2 text-sm">Podcasts & Shows</TabsTrigger>
        </TabsList>
        <TabsContent value="playlists">
            <p className="text-center text-muted-foreground mt-10">You haven't created or saved any playlists yet.</p>
            {/* Add Playlist grid here */}
        </TabsContent>
        <TabsContent value="artists">
            <p className="text-center text-muted-foreground mt-10">You haven't followed any artists yet.</p>
            {/* Add Artist grid here */}
        </TabsContent>
        <TabsContent value="albums">
            <p className="text-center text-muted-foreground mt-10">You haven't saved any albums yet.</p>
            {/* Add Album grid here */}
        </TabsContent>
        <TabsContent value="podcasts">
            <p className="text-center text-muted-foreground mt-10">You haven't saved any podcasts or shows yet.</p>
            {/* Add Podcast grid here */}
        </TabsContent>
      </Tabs>

    </div>
  );
}