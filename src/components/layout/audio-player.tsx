
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat, Heart, Mic2, ListMusic, Laptop2, Volume2, VolumeX, Maximize2 } from 'lucide-react'; // Added more icons
import { Slider } from "@/components/ui/slider";
import { Button, buttonVariants } from "@/components/ui/button"; // Import variants
import { cn } from '@/lib/utils';

// Dummy data for current song (replace with actual state management)
const currentSong = {
  title: "Bohemian Rhapsody",
  artist: "Queen",
  albumArt: "https://picsum.photos/64/64?random=player",
  duration: 355, // seconds
  isLiked: true,
};

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(120); // Start progress somewhere in the middle for demo
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false); // 0: off, 1: repeat playlist, 2: repeat song
  const [isLiked, setIsLiked] = useState(currentSong.isLiked);
  const [volume, setVolume] = useState(70); // Volume percentage
  const [isMuted, setIsMuted] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // State to track client-side mount

  // Set isMounted to true only on the client-side after the component mounts
  useEffect(() => {
      setIsMounted(true);
  }, []);


  // Simulate song progress
  useEffect(() => {
    // Only run interval logic on the client
    if (!isMounted) return;

    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= currentSong.duration) {
            // Handle repeat logic here
            if (isRepeat) { // Loop if repeat is on
                return 0;
            } else {
                setIsPlaying(false); // Stop playing when song ends and no repeat
                return currentSong.duration; // Stay at the end
            }
          }
          return prev + 1;
        });
      }, 1000);
    } else if (!isPlaying && progress !== 0 && interval) {
       clearInterval(interval);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPlaying, currentSong.duration, isRepeat, isMounted]); // Add isMounted dependency

  const togglePlayPause = () => {
    // If song ended and play is pressed, restart
    if (!isPlaying && progress >= currentSong.duration) {
        setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => setIsShuffle(!isShuffle);
  const toggleRepeat = () => setIsRepeat(!isRepeat); // Simple toggle for now
  const toggleLike = () => setIsLiked(!isLiked);
  const toggleMute = () => {
      setIsMuted(!isMuted);
      // If unmuting and volume was 0, set to a default volume
      if (isMuted && volume === 0) setVolume(50);
  };

  const formatTime = (time: number) => {
    // Return placeholder or null if not mounted to avoid hydration mismatch
    if (!isMounted) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleProgressChange = (value: number[]) => {
     setProgress(value[0]);
     // Add logic here to seek the actual audio track
  };

  const handleVolumeChange = (value: number[]) => {
      setVolume(value[0]);
      if (value[0] === 0) setIsMuted(true);
      else setIsMuted(false);
      // Add logic here to set the actual audio volume
  };

  // Determine VolumeIcon only on the client
  const VolumeIcon = isMounted ? (isMuted || volume === 0 ? VolumeX : Volume2) : Volume2; // Default to Volume2 on server

  // Render null or a skeleton during SSR / pre-hydration if client-specific state is needed immediately
  if (!isMounted) {
       return (
            <footer className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border px-4 py-2 z-50 h-[88px]">
                {/* Optional: Add a simple loading skeleton here */}
                <div className="animate-pulse flex items-center justify-between h-full">
                     <div className="flex items-center gap-3 w-[30%]">
                         <div className="w-14 h-14 rounded bg-muted"></div>
                         <div className="space-y-2">
                             <div className="h-4 bg-muted rounded w-24"></div>
                             <div className="h-3 bg-muted rounded w-16"></div>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-muted ml-3"></div>
                     </div>
                     <div className="flex flex-col items-center gap-1 flex-grow w-[40%] max-w-2xl">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-muted"></div>
                            <div className="w-8 h-8 rounded-full bg-muted"></div>
                            <div className="w-9 h-9 rounded-full bg-muted"></div>
                            <div className="w-8 h-8 rounded-full bg-muted"></div>
                            <div className="w-8 h-8 rounded-full bg-muted"></div>
                         </div>
                         <div className="flex items-center gap-2 w-full">
                             <div className="h-2 bg-muted rounded w-10"></div>
                             <div className="h-1 bg-muted rounded flex-grow"></div>
                             <div className="h-2 bg-muted rounded w-10"></div>
                         </div>
                     </div>
                     <div className="flex items-center gap-2 w-[30%] justify-end">
                         <div className="w-8 h-8 rounded-full bg-muted"></div>
                         <div className="w-8 h-8 rounded-full bg-muted"></div>
                         <div className="w-8 h-8 rounded-full bg-muted"></div>
                         <div className="flex items-center gap-1 w-28">
                            <div className="w-8 h-8 rounded-full bg-muted"></div>
                            <div className="h-1 bg-muted rounded flex-grow"></div>
                         </div>
                         <div className="w-8 h-8 rounded-full bg-muted"></div>
                     </div>
                </div>
            </footer>
       );
  }


  return (
    // Updated background, border, padding to match Spotify footer
    <footer className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border px-4 py-2 z-50">
      <div className="flex items-center justify-between gap-4 w-full">
        {/* Song Info & Like Button */}
        <div className="flex items-center gap-3 min-w-0 w-[30%]">
          <Image
            src={currentSong.albumArt}
            alt="Album Art"
            width={56}
            height={56}
            className="rounded shadow-md"
            data-ai-hint="album cover"
          />
          <div className="min-w-0 mr-3">
            <p className="text-sm font-medium text-foreground truncate hover:underline cursor-pointer">{currentSong.title}</p>
            <p className="text-xs text-muted-foreground truncate hover:underline cursor-pointer">{currentSong.artist}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLike}
            className={`w-8 h-8 text-muted-foreground hover:text-foreground hover:scale-110 transition-transform duration-150 ${isLiked ? 'text-primary' : ''}`}
            aria-label={isLiked ? "Unlike Song" : "Like Song"}
          >
             <Heart size={18} className={cn(isLiked && "fill-primary")} />
          </Button>
          {/* Add Picture-in-Picture button if needed */}
        </div>

        {/* Player Controls & Progress */}
        <div className="flex flex-col items-center gap-1 flex-grow w-[40%] max-w-2xl">
          {/* Control Buttons */}
          <div className="flex items-center gap-2">
             <Button
              variant="ghost"
              size="icon"
              onClick={toggleShuffle}
              className={cn(
                "w-8 h-8 text-muted-foreground hover:text-foreground relative",
                isShuffle && 'text-primary'
              )}
              aria-label={isShuffle ? "Disable Shuffle" : "Enable Shuffle"}
            >
              <Shuffle size={18} />
              {isShuffle && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-muted-foreground hover:text-foreground"
              aria-label="Previous Track"
              // onClick={handlePrevious} // Add handler
            >
              <SkipBack size={18} className="fill-current" />
            </Button>
            <Button
              variant="ghost" // Changed from default
              size="icon"
              onClick={togglePlayPause}
              className="w-9 h-9 bg-foreground hover:bg-foreground/90 text-background rounded-full hover:scale-105 transition-transform" // White bg, black icon
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={18} className="fill-current" /> : <Play size={18} className="fill-current ml-0.5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-muted-foreground hover:text-foreground"
              aria-label="Next Track"
               // onClick={handleNext} // Add handler
            >
              <SkipForward size={18} className="fill-current" />
            </Button>
             <Button
              variant="ghost"
              size="icon"
              onClick={toggleRepeat}
              className={cn(
                "w-8 h-8 text-muted-foreground hover:text-foreground relative",
                 isRepeat && 'text-primary' // Add logic for repeat one/all
              )}
              aria-label={isRepeat ? "Disable Repeat" : "Enable Repeat"}
            >
              <Repeat size={18} />
              {isRepeat && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>}
               {/* Add badge for repeat-one if needed */}
            </Button>
          </div>
          {/* Progress Bar */}
          <div className="flex items-center gap-2 w-full text-xs">
             <span className="text-muted-foreground w-10 text-right tabular-nums">{formatTime(progress)}</span>
            <Slider
              value={[progress]}
              max={currentSong.duration}
              step={1}
              onValueChange={handleProgressChange}
              // Custom class names for Spotify style
              className="group flex-grow h-3 cursor-pointer"
              trackClassName="h-1 group-hover:h-[5px] transition-all duration-150 bg-muted/50"
              rangeClassName="bg-foreground group-hover:bg-primary"
              thumbClassName="bg-foreground h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            />
             <span className="text-muted-foreground w-10 text-left tabular-nums">{formatTime(currentSong.duration)}</span>
          </div>
        </div>

        {/* Other Controls (Volume, Lyrics, Queue, etc.) */}
        <div className="flex items-center gap-2 w-[30%] justify-end">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Lyrics">
                <Mic2 size={18} />
            </Button>
             <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Queue">
                <ListMusic size={18} />
            </Button>
             <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Connect to a device">
                <Laptop2 size={18} />
            </Button>
            <div className="flex items-center gap-1 group w-28">
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleMute}
                    className="w-8 h-8 text-muted-foreground hover:text-foreground"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                   <VolumeIcon size={18} />
                </Button>
                <Slider
                  value={isMuted ? [0] : [volume]}
                  max={100}
                  step={1}
                  onValueChange={handleVolumeChange}
                  className="flex-grow h-3 cursor-pointer"
                  trackClassName="h-1 group-hover:h-[5px] transition-all duration-150 bg-muted/50"
                  rangeClassName="bg-foreground group-hover:bg-primary"
                  thumbClassName="bg-foreground h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  aria-label="Volume"
                />
            </div>
             <Button variant="ghost" size="icon" className="w-8 h-8 text-muted-foreground hover:text-foreground" aria-label="Full screen">
                <Maximize2 size={16} />
            </Button>
        </div>
      </div>
    </footer>
  );
}

