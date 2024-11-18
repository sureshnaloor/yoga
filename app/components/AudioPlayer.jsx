'use client';

import { useState, useEffect } from "react";
import AudioIcon from "./AudioIcon";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/audio/yoga.mp3") : null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  // Format time in MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle time updates
  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  // Handle loading metadata (duration)
  const handleLoadedMetadata = (e) => {
    setDuration(e.target.duration);
  };

  // Skip forward/backward
  const skip = (seconds) => {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.currentTime += seconds;
    }
  };

  const toggleAudio = () => {
    setShowControls(true);
    console.log('Controls visibility:', showControls);
    
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (audio) {
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
    return () => {
      if (audio) {
        audio.removeEventListener('ended', () => {
          setIsPlaying(false);
        });
      }
    };
  }, [audio]);

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
          <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity text-xs bg-gray-700 text-white p-1 rounded md:hidden">
            {isPlaying ? 'Playing' : 'Play'}
          </span>
        </div>
      </button>

      {/* Enhanced Audio Controls */}
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

          {/* Time Display */}
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-2 flex justify-between">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Main Audio Controls */}
          <audio
            controls
            src="/audio/yoga.mp3"
            className="w-full mb-4"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          >
            Your browser does not support the audio element.
          </audio>

          {/* Additional Controls */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <button
              onClick={() => skip(-10)}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              -10s
            </button>
            <button
              onClick={() => skip(-5)}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              -5s
            </button>
            <button
              onClick={() => skip(5)}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              +5s
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <span className="text-sm dark:text-white">Volume</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={(e) => {
                const newVolume = parseFloat(e.target.value);
                setVolume(newVolume);
                const audioElement = document.querySelector('audio');
                if (audioElement) {
                  audioElement.volume = newVolume;
                }
              }}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>

          {/* Playback Speed */}
          <div className="mt-4">
            <label className="text-sm dark:text-white mb-1 block">Playback Speed</label>
            <select 
              onChange={(e) => {
                const audioElement = document.querySelector('audio');
                if (audioElement) {
                  audioElement.playbackRate = parseFloat(e.target.value);
                }
              }}
              className="w-full p-2 bg-gray-100 dark:bg-gray-700 rounded"
            >
              <option value="0.5">0.5x</option>
              <option value="0.75">0.75x</option>
              <option value="1" selected>1x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
              <option value="2">2x</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
} 