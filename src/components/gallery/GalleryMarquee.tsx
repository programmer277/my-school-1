"use client";

import React from "react";

type Props = {
  topImgs?: string[];
  bottomImgs?: string[];
  duration?: number;
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
  duration = 18,
  repeatSets = 4,
}) => {
  const repeatArray = (arr: string[]) =>
    Array.from({ length: repeatSets }).flatMap(() => arr);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-600 to-blue-600">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-8 animate-marquee"
          style={{ animationDuration: `${duration}s` }}
        >
          {repeatArray(topImgs).map((src, i) => (
            <div key={i} className="flex-none">
              <img
                src={src}
                alt=""
                className="h-64 w-64 md:h-80 md:w-80 rounded-3xl object-cover shadow-2xl border-4 border-white/30"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center py-12">
        <h2 className="text-6xl md:text-9xl font-black drop-shadow-2xl bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
          Maktab Galereyasi
        </h2>
      </div>

      <div className="w-full overflow-hidden relative">
        <div
          className="flex gap-8 animate-marquee-reverse"
          style={{ animationDuration: `${duration}s` }}
        >
          {repeatArray(bottomImgs).map((src, i) => (
            <div key={i} className="flex-none">
              <img
                src={src}
                alt=""
                className="h-64 w-64 md:h-80 md:w-80 rounded-3xl object-cover shadow-2xl border-4 border-white/30"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-horizontal {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee-horizontal linear infinite; }
        .animate-marquee-reverse { animation: marquee-horizontal linear infinite reverse; }
      `}</style>
    </section>
  );
};