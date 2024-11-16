import React from 'react'
import YouTubeSearch from '@/app/components/YoutubeSearch'
import Header from '@/app/components/Header'

function Youtubesearchpage() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <Header />
      <div className="flex-1">
        <YouTubeSearch />
      </div>
    </div>
  )
}

export default Youtubesearchpage