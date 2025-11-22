"use client";
import React from "react";

type Props = {
  topImgs?: string[];
  bottomImgs?: string[];
  duration?: number; // sekundlarda
  repeatSets?: number;
};

export const GalleryMarquee: React.FC<Props> = ({
  topImgs = [
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-58.png",
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-59.png",
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-60.png",
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-61.png",
  ],
  bottomImgs = [
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-64.png",
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-65.png",
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-66.png",
    "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-67.png",
  ],
  duration = 20,
  repeatSets = 3,
}) => {
  const repeatArray = (arr: string[]) =>
    Array.from({ length: repeatSets }).flatMap(() => arr);

  return (
    <section className="relative py-12 sm:py-16 lg:py-24 flex flex-col items-center space-y-12">
      {/* TOP MARQUEE */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee hover:pause"
          style={{ animationDuration: `${duration}s` }}
        >
          {repeatArray(topImgs).map((src, i) => (
            <div key={i} className="flex-none">
              <img
                src={src}
                alt={`top-${i}`}
                className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent"></div>
      </div>

      {/* CENTER TEXT */}
      <div className="relative z-10 flex items-center justify-center w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black">
          Maktab Galereyasi
        </h2>
      </div>

      {/* BOTTOM MARQUEE */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-4 sm:gap-6 md:gap-8 animate-marquee-reverse hover:pause"
          style={{ animationDuration: `${duration}s` }}
        >
          {repeatArray(bottomImgs).map((src, i) => (
            <div key={i} className="flex-none">
              <img
                src={src}
                alt={`bottom-${i}`}
                className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-64 lg:w-64 xl:h-72 xl:w-72 rounded-lg object-cover"
              />
            </div>
          ))}
        </div>
        {/* Gradient overlay */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-white to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation-name: marquee-horizontal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .animate-marquee-reverse {
          animation-name: marquee-horizontal;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          animation-direction: reverse;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default GalleryMarquee;
