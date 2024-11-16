import { NextResponse } from 'next/server';

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    // Create an array of fitness terms to search with
    const fitnessTerms = ['yoga', 'exercise', 'gym', 'pilates'];
    
    // Make parallel requests for each fitness term
    const promises = fitnessTerms.map(term => 
      fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}+${term}&type=video&key=${YOUTUBE_API_KEY}`
      ).then(res => res.json())
    );

    // Wait for all requests to complete
    const results = await Promise.all(promises);
    
    // Combine and shuffle the video results
    const allVideos = results.flatMap(data => data.items || []);
    const shuffledVideos = allVideos.sort(() => Math.random() - 0.5);
    
    // Return the first 10 videos from the shuffled results
    return NextResponse.json({
      items: shuffledVideos.slice(0, 10),
      pageInfo: { totalResults: shuffledVideos.length }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch videos' }, { status: 500 });
  }
} 