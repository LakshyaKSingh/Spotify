import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MuseFlow - Create Playlist',
  description: 'Create a new playlist.',
};

// This page might not need UI, it could just trigger an action (e.g., create playlist and redirect)
// Or it could be a modal triggered from the sidebar button.
// For now, a simple placeholder page.

export default function CreatePlaylistPage() {
  return (
    <div className="py-6 px-6 md:px-8 h-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-4">Create Playlist</h1>
        <p className="text-muted-foreground">
          Functionality to create a new playlist will be implemented here.
        </p>
        {/* Potential form or action button */}
      </div>
    </div>
  );
}