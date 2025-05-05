'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, SkipForward, SkipBack, Shuffle, Repeat } from 'lucide-react';
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

// Dummy data for current song (replace with actual state management)
const currentSong = {
  title: "Placeholder Track",
  artist: "Unknown Artist",
  albumArt: "https://picsum.photos/64/64?random=player",
  duration: 240, // seconds
};

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // Progress in seconds
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);

  // Simulate song progress
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= currentSong.duration) {
            setIsPlaying(false); // Stop playing when song ends
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (!isPlaying && progress !== 0 && interval) {
       clearInterval(interval);
    }
     // Cleanup interval on component unmount or when isPlaying changes
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentSong.duration]); // Only re-run if isPlaying or duration changes

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleSliderChange = (value: number[]) => {
     setProgress(value[0]);
     // Add logic here to seek the actual audio track if implemented
  };


  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Song Info */}
        <div className="flex items-center gap-3 min-w-0 w-1/4">
          <Image
            src={currentSong.albumArt}
            alt="Album Art"
            width={56}
            height={56}
            className="rounded"
            data-ai-hint="album cover"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium text-foreground truncate">{currentSong.title}</p>
            <p className="text-xs text-muted-foreground truncate">{currentSong.artist}</p>
          </div>
        </div>

        {/* Player Controls & Progress */}
        <div className="flex flex-col items-center gap-2 flex-grow w-1/2">
          <div className="flex items-center gap-4">
             <Button
              variant="ghost"
              size="icon"
              onClick={toggleShuffle}
              className={`w-8 h-8 ${isShuffle ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label={isShuffle ? "Disable Shuffle" : "Enable Shuffle"}
            >
              <Shuffle size={18} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-muted-foreground hover:text-foreground"
              aria-label="Previous Track"
            >
              <SkipBack size={18} />
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={togglePlayPause}
              className="w-10 h-10 bg-primary hover:bg-primary/90 rounded-full"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause size={20} className="text-primary-foreground" /> : <Play size={20} className="text-primary-foreground fill-primary-foreground" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-8 h-8 text-muted-foreground hover:text-foreground"
              aria-label="Next Track"
            >
              <SkipForward size={18} />
            </Button>
             <Button
              variant="ghost"
              size="icon"
              onClick={toggleRepeat}
              className={`w-8 h-8 ${isRepeat ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
              aria-label={isRepeat ? "Disable Repeat" : "Enable Repeat"}
            >
              <Repeat size={18} />
            </Button>
          </div>
          <div className="flex items-center gap-2 w-full max-w-md">
             <span className="text-xs text-muted-foreground w-10 text-right">{formatTime(progress)}</span>
            <Slider
              value={[progress]}
              max={currentSong.duration}
              step={1}
              onValueChange={handleSliderChange}
              className="flex-grow [&>span:first-child]:h-1 [&>span>span]:h-1 [&>span>span]:bg-primary [&>a]:h-3 [&>a]:w-3 [&>a]:bg-foreground [&>a]:border-0 [&>a:hover]:scale-110 [&>a:focus-visible]:ring-1"
            />
             <span className="text-xs text-muted-foreground w-10 text-left">{formatTime(currentSong.duration)}</span>
          </div>
        </div>

        {/* Volume/Other Controls - Placeholder */}
        <div className="flex items-center gap-2 w-1/4 justify-end">
          {/* Add Volume control, queue button etc. here */}
           <span className="text-xs text-muted-foreground">Vol</span>
        </div>
      </div>
    </footer>
  );
}
