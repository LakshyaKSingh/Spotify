import Image from 'next/image';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { PlayCircle } from 'lucide-react';

interface MusicCardProps {
  item: {
    id: number;
    title: string;
    description?: string; // For playlists
    artist?: string;      // For albums/songs
    cover: string;
    hint?: string; // AI hint for image search
  };
  type: 'playlist' | 'album' | 'song';
}

export default function MusicCard({ item, type }: MusicCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-card border-border hover:bg-secondary transition-colors duration-200 cursor-pointer shadow-md hover:shadow-lg">
      <CardContent className="p-0">
        <div className="aspect-square relative">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={item.hint || type}
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <PlayCircle
                className="absolute bottom-3 right-3 h-12 w-12 text-primary bg-background rounded-full p-1 opacity-0 group-hover:opacity-100 group-hover:scale-105 transform group-hover:translate-y-0 translate-y-2 transition-all duration-300 ease-out"
                strokeWidth={1.5}
            />
        </div>
        <div className="p-4">
          <CardTitle className="text-base font-semibold text-foreground truncate">{item.title}</CardTitle>
          <CardDescription className="text-sm text-muted-foreground mt-1 truncate">
            {type === 'playlist' ? item.description : item.artist}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
}
