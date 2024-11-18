'use client';

import { useState, useRef } from "react";
import AudioIcon from "./AudioIcon";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const audioRef = useRef(null);

  // Simplified toggle function
  const toggleAudio = () => {
    setShowControls(true);
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
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
        </div>
      </button>

      {/* Audio Controls */}
      {showControls && (
        <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg z-50 w-96">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium dark:text-white">Audio Controls</span>
            <button 
              onClick={() => setShowControls(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Audio Element */}
          <audio
            ref={audioRef}
            src="/audio/yoga.mp3"
            controls
            className="w-full"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          >
            Your browser does not support the audio element.
          </audio>

          {/* Simple Skip Controls */}
          <div className="grid grid-cols-3 gap-2 mt-4">
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime -= 10;
                }
              }}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              -10s
            </button>
            <button
              onClick={toggleAudio}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <button
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.currentTime += 10;
                }
              }}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              +10s
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 