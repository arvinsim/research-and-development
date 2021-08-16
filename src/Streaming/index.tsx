import React, { useCallback, useRef, useState } from "react";

function Streaming() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoId, setVideoId] = useState<number>();
  const videoPlayer = useRef(null);

  // This is a PoC for custom playback
  const handleClick = () => {
    if (videoPlayer.current === null) {
      return;
    }

    if (isPlaying) {
      videoPlayer.current.pause();
      setIsPlaying(false);
    } else {
      videoPlayer.current.play();
      setIsPlaying(true);
    }
  };

  const handleShowOmoVideo = () => {
    setVideoId(undefined);
    videoPlayer.current.load();
  };

  const handleShowWorldVideo = () => {
    setVideoId(2);
    videoPlayer.current.load();
  };

  const queryParams = videoId ? `?v=${videoId}` : "";

  return (
    <div>
      <div>
        <div onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</div>
        <div onClick={handleShowOmoVideo}>Show OMO video</div>
        <div onClick={handleShowWorldVideo}>Show world video</div>
      </div>
      <video
        id="video1"
        width="1280px"
        height="720px"
        ref={videoPlayer}
        playsInline
        muted
        controls
      >
        <source
          src={`http://localhost:8000/watch${queryParams}`}
          type="video/mp4"
        />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}

export default Streaming;
