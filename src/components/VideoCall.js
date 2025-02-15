import React, { useRef, useEffect } from "react";

const VideoCall = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => console.error("Error accessing media devices:", error));
  }, []);

  return (
    <div className="mt-3 border rounded shadow-sm p-3 bg-dark">
      <video ref={videoRef} autoPlay playsInline className="w-100 border rounded"></video>
    </div>
  );
};

export default VideoCall;
