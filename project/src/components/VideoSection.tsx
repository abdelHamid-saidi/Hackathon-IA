import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="p-4">
      <div className="relative flex items-center justify-center aspect-video rounded-xl overflow-hidden bg-black">
        {isPlaying ? (
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://cdn.usegalileo.ai/sdxl10/03fd36e4-6aa9-45e8-9c4f-d15c02ca99ad.png")',
              }}
            ></div>
            <button
              onClick={handlePlayClick}
              className="z-10 flex items-center justify-center rounded-full size-16 bg-black/40 text-white transition hover:bg-black/60 hover:scale-110"
              aria-label="Lire la vidéo"
            >
              <Play size={24} fill="currentColor" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoSection;
