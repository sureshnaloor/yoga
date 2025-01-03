"use client";

import React, { useState, useEffect } from 'react';
import JitsiMeet from '../components/JitsiMeet';

const HomePage = () => {
  const [roomName, setRoomName] = useState('vpaas-magic-cookie-835a165c88fc4fb294e28fc9f2126f6a/Yogaroom');
  const [startMeeting, setStartMeeting] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchJwtToken = async () => {
      try {
        const response = await fetch('/api/generate-jwt', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ roomName, user: { name: 'Sridevi', email: 'sridevi.suresh.menon@gmail.com', avatar: 'https://via.placeholder.com/150' } }),
        });
        const data = await response.json();
        setJwtToken(data.token);
        setStartMeeting(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    fetchJwtToken();
  }, [roomName]);

  return (
    <div className='flex-col justify-center items-center gap-4 h-screen'>
      <h1 className='text-2xl font-bold p-3 tracking-widest'>Yoga session room</h1>

      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        {isLoading && (
          <div className="flex flex-col items-center justify-center space-y-4 p-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            <p className="text-2xl text-gray-600 animate-pulse">
              Setting up your yoga room...
            </p>
            <p className="text-lg text-gray-800">
              This may take a few moments
            </p>
          </div>
        )}
      </div>

      <div className={`transition-opacity duration-500 ${!isLoading ? 'opacity-100' : 'opacity-0'}`}>
        {!isLoading && (startMeeting && jwtToken ? (
          <JitsiMeet roomName={roomName} startMeeting={startMeeting} jwt={jwtToken} />
        ) : (
          <div className="text-red-500 text-center p-4">
            Something wrong. Failed to load the yoga room. Please refresh the page. If issue persists, please check network connection. 
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
