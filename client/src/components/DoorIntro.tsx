import { useState, useEffect, useRef } from "react";

interface DoorIntroProps {
  onComplete: () => void;
}

export function DoorIntro({ onComplete }: DoorIntroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFading, setIsFading] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    // Start fading out at 3.6 seconds (when the white light spreads in your 5s video)
    if (video.currentTime >= 3.6 && !isFading) {
      setIsFading(true);
      // Wait for the CSS transition to complete before unmounting from DOM
      setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 1200); // 1.2 seconds transition duration
    }
  };

  const handleVideoEnded = () => {
    if (!isFading) {
      setIsFading(true);
      setTimeout(() => {
        setShouldRender(false);
        onComplete();
      }, 1200);
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[999999] bg-stone-950 flex items-center justify-center transition-opacity duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/intro.mp4"
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
