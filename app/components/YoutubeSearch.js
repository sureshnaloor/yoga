'use client';

import { useState } from 'react';

export default function YouTubeSearch() {
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchVideos = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`/api/youtube?q=${encodeURIComponent(query)}`);
      const data = await response.json();
      setVideos(data.items || []);
    } catch (error) {
      console.error('Error searching videos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={searchVideos} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search yoga videos..."
            className="flex-1 p-2 border rounded-lg"
          />
          <button 
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id.videoId} className="border rounded-lg overflow-hidden">
            <a 
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full"
              />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{video.snippet.title}</h3>
                <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
