"use client";

import { useState, useRef } from "react";

interface ComparisonSliderProps {
  beforeImg: string;
  afterImg: string;
}

export default function ComparisonSlider({
  beforeImg,
  afterImg,
}: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDragging.current = true;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.cursor = "default";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[400px] lg:min-h-[600px] overflow-hidden select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (background) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImg})` }}
      >
        <span className="absolute bottom-6 right-6 font-sans font-light text-background text-[16px] lg:text-[20px] tracking-wider">
          AFTER
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${beforeImg})`,
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <span className="absolute bottom-6 left-6 font-sans font-light text-background text-[16px] lg:text-[20px] tracking-wider">
          BEFORE
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-background pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-background rounded-full flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing pointer-events-auto"
        >
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className="pointer-events-none">
            <path d="M9 1L2 8L9 15" stroke="#062025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="w-3" />
          <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className="pointer-events-none">
            <path d="M1 1L8 8L1 15" stroke="#062025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}