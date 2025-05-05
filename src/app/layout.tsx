import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AudioPlayer from '@/components/layout/audio-player';
import SidebarLayout from '@/components/layout/sidebar-layout';

export const metadata: Metadata = {
  title: 'Spotify - Web Player', // Updated title to match Spotify
  description: 'Listen to millions of songs and podcasts for free.',
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
      {/* Apply Spotify font stack directly, ensure h-full for layout */}
      <body
        className={`antialiased flex flex-col h-screen overflow-hidden bg-background`}
        style={{ fontFamily: spotifyFontFamily }}
      >
        <div className="flex flex-1 overflow-hidden"> {/* Outer flex container */}
          <SidebarLayout>
            {children} {/* Main content will be passed here */}
          </SidebarLayout>
        </div>
        {/* AudioPlayer sits below the main content area */}
        <AudioPlayer />
        <Toaster />
      </body>
    </html>
  );
}
