'use client';

import { useState } from "react";
import AudioIcon from "./AudioIcon";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/audio/yoga.mp3") : null);

  const toggleAudio = () => {
    setShowControls(true);
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Audio Button */}
      <button 
        onClick={toggleAudio}
        className="relative group text-zinc-100 hover:text-zinc-500 dark:text-zinc-900 dark:hover:text-zinc-100"
      >
        <div className="flex items-center">
          <div className={`w-4 md:w-6 lg:w-8 ${isPlaying ? 'text-green-500' : ''}`}>
            <AudioIcon />
          </div>
          <span className="hidden md:inline ml-2 md:text-xs lg:text-sm">
            {isPlaying ? 'Playing' : 'Play'}
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white p-1 rounded md:hidden">
            {isPlaying ? 'Playing' : 'Play'}
          </span>
        </div>
      </button>

      {/* Audio Controls */}
      {showControls && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50">
          <audio
            controls
            src={audio?.src}
            className="w-full"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </>
  );
} 