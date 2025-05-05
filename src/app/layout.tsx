import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AudioPlayer from '@/components/layout/audio-player';
import SidebarLayout from '@/components/layout/sidebar-layout'; // Import the new layout component

export const metadata: Metadata = {
  title: 'Spotify', // Change title to Spotify
  description: 'Listen to millions of songs and podcasts for free.', // Update description
};

// Define Spotify font family stack
const spotifyFontFamily = "'Circular Spotify Tx T', 'Circular Spotify Text', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Apply Spotify font stack directly */}
      <body className={`antialiased flex h-screen overflow-hidden`} style={{ fontFamily: spotifyFontFamily }}>
        <SidebarLayout>
            <div className="flex-grow overflow-y-auto scrollbar-thin"> {/* Make main content area scrollable */}
               <main>{children}</main>
            </div>
        </SidebarLayout>
        <AudioPlayer />
        <Toaster />
      </body>
    </html>
  );
}
