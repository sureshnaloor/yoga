"use client";

import React, { useEffect, useRef } from 'react';

const JitsiMeet = ({ roomName, startMeeting,jwt }) => {
    const jitsiContainerRef = useRef(null);
  const jitsiApiRef = useRef(null);

  useEffect(() => {
    if (startMeeting) {
      const loadJitsiScript = () => {
        const existingScript = document.getElementById('jitsi-script');
        if (!existingScript) {
          const script = document.createElement('script');
          script.src = 'https://8x8.vc/vpaas-magic-cookie-835a165c88fc4fb294e28fc9f2126f6a/external_api.js'; // JaaS API
          script.id = 'jitsi-script';
         script.async = true;

          script.onload = () => {
            initializeJitsiMeet();
          };
          document.body.appendChild(script);
        } else {
          initializeJitsiMeet();
        }
      };

      const initializeJitsiMeet = () => {
        if (!window.JitsiMeetExternalAPI) {
            console.error('JitsiMeetExternalAPI is not available');
            return;
          }

          if (jitsiApiRef.current) return;
        const domain = '8x8.vc'; // JaaS domain
        const options = {
          roomName: roomName || 'DefaultRoom',
          width: '100%',
          height: 600,
          parentNode: document.getElementById('jitsi-container'),
          jwt: jwt, // Pass the JWT token here
        };
        jitsiApiRef.current =new window.JitsiMeetExternalAPI(domain, options);
        jitsiApiRef.current.addEventListener('videoConferenceJoined', () => {
            console.log('Local User Joined');
          });
    
          jitsiApiRef.current.addEventListener('videoConferenceLeft', () => {
            console.log('Local User Left');
          });
    
    
    };

      loadJitsiScript();

      return () => {
        if (jitsiApiRef.current) {
          jitsiApiRef.current.dispose();
          jitsiApiRef.current = null;
        }
      };
    }
  }, [startMeeting, roomName, jwt]);

  return <div id="jitsi-container" ref={jitsiContainerRef} style={{ height: '600px', width: '100%' }}></div>;
};

export default JitsiMeet;
