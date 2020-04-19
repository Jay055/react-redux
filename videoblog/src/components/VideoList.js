import React from 'react';
import VideoItem from './VideoItem';


// Destructure props (props.videos...)
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList =  videos.map(video => { 
    return  <VideoItem  key={video.id.videoId}onVideoSelect={onVideoSelect} video={video} />
    
  }) ;
  return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;