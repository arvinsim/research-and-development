import React, { useCallback, useRef, useState } from "react";

function Streaming() {
  const [isPlaying, setIsPlaying] = useState(false);
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

  return (
    <div>
      <div>
        <div onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</div>
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
        <source src="http://localhost:8000/videostream" type="video/mp4" />
        Your browser does not support HTML video.
      </video>
    </div>
  );
}

export default Streaming;
