"use client";

import React, { useState, useEffect } from 'react';
import JitsiMeet from '../components/JitsiMeet';

const HomePage = () => {
  const [roomName, setRoomName] = useState('vpaas-magic-cookie-835a165c88fc4fb294e28fc9f2126f6a/Pujaroom'); // Dynamically generated room name
  const [startMeeting, setStartMeeting] = useState(false);
  const [jwtToken, setJwtToken] = useState(null);

  useEffect(() => {
    const fetchJwtToken = async () => {
      const response = await fetch('/api/generate-jwt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roomName, user: { name: 'Sridevi', email: 'sridevi.suresh.menon@gmail.com', avatar: 'https://via.placeholder.com/150' } }),
      });
      const data = await response.json();
      setJwtToken(data.token); // Set the JWT token
    };

    fetchJwtToken();
    setStartMeeting(true);
  }, [roomName]);

  // const handleStartMeeting = () => {
  //   setStartMeeting(true);
  // };

  // console.log(jwtToken);
  // console.log(roomName);
  // console.log(startMeeting);

  return (
    <div className='flex justify-center items-center gap-4 h-screen'>
      <h1 className='text-2xl font-bold'>Join the Yoga session</h1>

      {/* <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={handleStartMeeting}>Start</button> */}

      {startMeeting && jwtToken && (
        <JitsiMeet roomName={roomName} startMeeting={startMeeting} jwt = {jwtToken} />
      )}
    </div>
  );
};

export default HomePage;
