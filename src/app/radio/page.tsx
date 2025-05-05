import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MuseFlow - Radio',
  description: 'Listen to stations based on your favorite artists, songs, or genres.',
};

export default function RadioPage() {
  return (
    <div className="py-6 px-6 md:px-8 h-full">
      <h1 className="text-3xl font-bold text-foreground mb-8">Radio</h1>

      {/* Radio content area - Placeholder */}
      <div className="mt-6">
        <p className="text-center text-muted-foreground">
          Radio stations based on your music taste will appear here.
        </p>
        {/* Add logic to display radio stations or genres */}
      </div>
    </div>
  );
}