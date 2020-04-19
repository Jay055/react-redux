import React from 'react';
import './VideoItem.css';

// Destructure (props) = ({ videos })
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item">
      <img 
      className="ui image" 
      src = {video.snippet.thumbnails.medium.url} 
      alt ={video.snippet.title}
      />
      <div onClick={()=>onVideoSelect(video)} className="content">
        <div className="header">{video.snippet.title} </div>
      </div> 
      </div>
  );
};

export default VideoItem; 