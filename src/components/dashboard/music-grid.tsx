import MusicCard from './music-card';

interface MusicGridProps {
  items: Array<{
    id: number;
    title: string;
    description?: string;
    artist?: string;
    cover: string;
    hint?: string;
  }>;
  type: 'playlist' | 'album' | 'song';
}

export default function MusicGrid({ items, type }: MusicGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
      {items.map((item) => (
        <MusicCard key={item.id} item={item} type={type} />
      ))}
    </div>
  );
}
