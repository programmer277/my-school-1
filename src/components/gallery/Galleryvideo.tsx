// app/video-gallery/page.tsx

"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

type VideoItem = {
  src: string;
  thumb: string;
  title: string;
};

const videos: VideoItem[] = [
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", thumb: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-65.png", title: "Maktab bayrami 2025" },
  { src: "https://www.w3schools.com/html/mov_bbb.mp4", thumb: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-61.png", title: "Ochiq dars" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", thumb: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-66.png", title: "Sport musobaqasi" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", thumb: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-59.png", title: "Yangi yil tadbiri" },
  { src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", thumb: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-67.png", title: "Ilmiy loyiha" },
  { src: "https://www.w3schools.com/html/movie.mp4", thumb: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-60.png", title: "Maktab hayoti" },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* BIR XIL YORQIN ORQA FON – XONALAR BILAN 100% MOS */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400 via-teal-500 to-emerald-600 opacity-60 mix-blend-screen" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/30 to-orange-500/30 blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 pt-16 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* SARLAVHA – XONALAR BILAN BIR XIL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-yellow-200 bg-clip-text text-transparent">
                VIDEOLAR
              </span>
            </h1>
            <p className="text-white/90 text-xl sm:text-2xl mt-6 font-medium drop-shadow-lg">
              Maktabimizning eng rang-barang va unutilmas lahzalari
            </p>
          </motion.div>

          {/* GRID – XONALAR BILAN BIR XIL USLUB */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedVideo(video)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
                whileHover={{ y: -12, scale: 1.03 }}
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                  />

                  {/* KATTA PLAY TUGMASI – XONALARDAKI KARTALAR BILAN BIR XIL */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 bg-white/30 backdrop-blur-2xl rounded-full border-4 border-white/50 flex items-center justify-center shadow-2xl 
                      group-hover:scale-125 group-hover:bg-white/50 transition-all duration-500">
                      <Play className="w-16 h-16 text-white ml-3 drop-shadow-2xl" />
                    </div>
                  </div>

                  {/* VIDEO NOMI – HOVERDA HAM, DOIMIY HAM KO‘RINADI */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl">
                      {video.title}
                    </h3>
                  </div>
                </div>

                {/* YORQIN HOVER BORDER – XONALAR BILAN BIR XIL */}
                <div className="absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-cyan-300/80 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX – XONALAR BILAN 100% BIR XIL */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-3xl" />

              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-6xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/80 backdrop-blur-2xl border-2 border-white/30">
                  <video
                    src={selectedVideo.src}
                    controls
                    autoPlay
                    loop
                    className="w-full aspect-video rounded-3xl"
                  />
                  <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_60px_rgba(255,255,255,0.3)]" />
                </div>

                {/* VIDEO NOMI – LIGHTBOXDA HAM */}
                <div className="absolute -bottom-16 sm:-bottom-20 left-0 right-0 text-center">
                  <h3 className="text-4xl sm:text-5xl font-black text-white drop-shadow-2xl">
                    {selectedVideo.title}
                  </h3>
                </div>

                {/* QIZIL YOPISH TUGMASI – XONALAR BILAN BIR XIL */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-16 right-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-red-700 transition-all"
                >
                  <X className="w-10 h-10 text-white" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}