import { useState, useEffect } from "react";

interface DoorIntroProps {
  onComplete: () => void;
}

export function DoorIntro({ onComplete }: DoorIntroProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Start the opening animation after a small delay
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1200);

    // Remove the component from DOM after the transition finishes (1.5s animation duration + delay)
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
      onComplete();
    }, 2800);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(removeTimer);
    };
  }, [onComplete]);

  if (!shouldRender) return null;

  // Gold Islamic Mandala SVG components
  const MandalaHalfLeft = () => (
    <svg className="w-48 h-96 text-amber-400 opacity-80" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Outer arches */}
      <path d="M 100 10 A 90 90 0 0 0 100 190" strokeDasharray="3 3" />
      <path d="M 100 20 A 80 80 0 0 0 100 180" />
      <path d="M 100 30 A 70 70 0 0 0 100 170" strokeWidth="1.5" />
      {/* Geometric lines */}
      <path d="M 100 100 L 30 100 L 50 70 L 100 100 L 50 130 Z" />
      <path d="M 100 100 L 40 60 L 70 40 L 100 100 L 70 160 L 40 140 Z" />
      {/* Decorative curves */}
      <path d="M 100 50 C 70 50, 60 70, 100 100 C 60 130, 70 150, 100 150" />
      <path d="M 100 70 C 80 70, 80 90, 100 100 C 80 110, 80 130, 100 130" />
      {/* Inner circle */}
      <path d="M 100 85 A 15 15 0 0 0 100 115" fill="currentColor" className="opacity-20" />
    </svg>
  );

  const MandalaHalfRight = () => (
    <svg className="w-48 h-96 text-amber-400 opacity-80" viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Outer arches */}
      <path d="M 0 10 A 90 90 0 0 1 0 190" strokeDasharray="3 3" />
      <path d="M 0 20 A 80 80 0 0 1 0 180" />
      <path d="M 0 30 A 70 70 0 0 1 0 170" strokeWidth="1.5" />
      {/* Geometric lines */}
      <path d="M 0 100 L 70 100 L 50 70 L 0 100 L 50 130 Z" />
      <path d="M 0 100 L 60 60 L 30 40 L 0 100 L 30 160 L 60 140 Z" />
      {/* Decorative curves */}
      <path d="M 0 50 C 30 50, 40 70, 0 100 C 40 130, 30 150, 0 150" />
      <path d="M 0 70 C 20 70, 20 90, 0 100 C 20 110, 20 130, 0 130" />
      {/* Inner circle */}
      <path d="M 0 85 A 15 15 0 0 1 0 115" fill="currentColor" className="opacity-20" />
    </svg>
  );

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex overflow-hidden bg-stone-950 transition-opacity duration-500 ${
        isOpen ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {/* Left Door */}
      <div
        className="w-1/2 h-full bg-[#2c1a11] border-r border-[#1a0f0a] shadow-[inset_-25px_0_40px_rgba(0,0,0,0.8)] relative flex items-center justify-end transition-transform duration-[1600ms] cubic-bezier(0.85, 0, 0.15, 1)"
        style={{
          transform: isOpen ? "translateX(-100%)" : "translateX(0)",
          backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.15), rgba(255,255,255,0.03))"
        }}
      >
        {/* Door Panel Frame */}
        <div className="absolute inset-y-8 left-8 right-6 border-[6px] border-[#3e2518] rounded-lg bg-[#24150e] shadow-inner flex flex-col justify-between py-12 px-6">
          <div className="w-full h-1/3 border border-[#3e2518] rounded bg-[#1c0f0a] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
          <div className="w-full h-1/3 border border-[#3e2518] rounded mt-4 bg-[#1c0f0a] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
        </div>

        {/* Ornament Split Center */}
        <div className="absolute right-0 flex items-center translate-x-[1px]">
          <MandalaHalfLeft />
          
          {/* Gold Handle */}
          <div className="absolute right-2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 border-2 border-amber-200 flex items-center justify-center shadow-lg transform translate-y-[20px]">
            <div className="w-6 h-6 rounded-full border border-amber-200/50 bg-[#1c0f0a]/80 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Door */}
      <div
        className="w-1/2 h-full bg-[#2c1a11] border-l border-[#1a0f0a] shadow-[inset_25px_0_40px_rgba(0,0,0,0.8)] relative flex items-center justify-start transition-transform duration-[1600ms] cubic-bezier(0.85, 0, 0.15, 1)"
        style={{
          transform: isOpen ? "translateX(100%)" : "translateX(0)",
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.15), rgba(255,255,255,0.03))"
        }}
      >
        {/* Door Panel Frame */}
        <div className="absolute inset-y-8 right-8 left-6 border-[6px] border-[#3e2518] rounded-lg bg-[#24150e] shadow-inner flex flex-col justify-between py-12 px-6">
          <div className="w-full h-1/3 border border-[#3e2518] rounded bg-[#1c0f0a] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
          <div className="w-full h-1/3 border border-[#3e2518] rounded mt-4 bg-[#1c0f0a] shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"></div>
        </div>

        {/* Ornament Split Center */}
        <div className="absolute left-0 flex items-center translate-x-[-1px]">
          <MandalaHalfRight />

          {/* Gold Handle */}
          <div className="absolute left-2 w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 border-2 border-amber-200 flex items-center justify-center shadow-lg transform translate-y-[20px]">
            <div className="w-6 h-6 rounded-full border border-amber-200/50 bg-[#1c0f0a]/80 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
