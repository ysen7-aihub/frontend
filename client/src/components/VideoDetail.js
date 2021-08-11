import React from "react";

// src = {url}
const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-container">
      <iframe
        className="responsive-iframe"
        src="https://www.youtube.com/embed/tgbNymZ7vqY"
      ></iframe>
      <div className="details">
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
