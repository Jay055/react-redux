import React from 'react'; 

// Destructure props
const VideoDetail = ({ video }) => { 
  if(!video){
    return <div>loading...</div>;
   }

   // Declare Iframe URL
   const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  // Use IFame to display Video
   return ( 
     <div>
       <div className="ui embed">
         <iframe src={videoSrc} />

       </div>
  <div className="ui segment">
	<h4 className="ui header"> <div>{video.snippet.title}</div> </h4>
		<p>{video.snippet.description}</p>
    </div>
    </div>

  )
};




export default VideoDetail; 