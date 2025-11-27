"use client";

import  { useState } from "react";
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
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500/60 via-emerald-500/40 to-teal-600/60 mix-blend-screen blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/30 to-cyan-500/30 blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />
        </div>

        <div className="relative z-10 pt-16 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent">
                VIDEOLAR
              </span>
            </h1>
            <p className="text-white/90 text-xl sm:text-2xl mt-6 font-medium drop-shadow-lg">
              Maktabimizning eng rang-barang va unutilmas lahzalari
            </p>
          </motion.div>

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

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-28 h-28 bg-emerald-500/40 backdrop-blur-2xl rounded-full border-4 border-white/60 flex items-center justify-center shadow-2xl 
                      group-hover:scale-125 group-hover:bg-emerald-400/60 transition-all duration-500">
                      <Play className="w-16 h-16 text-white ml-3 drop-shadow-2xl" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl">
                      {video.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-emerald-400/80 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

         <AnimatePresence>
           {selectedVideo && (
             <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-50 flex items-center justify-center"
               onClick={() => setSelectedVideo(null)}
             >
               <div className="absolute inset-0 bg-black/70 backdrop-blur-3xl" />
         
               <motion.div
                 initial={{ scale: 0.85, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.85 }}
                 transition={{ type: "spring", damping: 28, stiffness: 300 }}
                 className="relative mx-4 sm:mx-8 max-w-5xl w-full"
                 onClick={(e) => e.stopPropagation()}
               >
                 <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/60 backdrop-blur-2xl">
                   <div className="absolute inset-0 rounded-3xl border-8 border-emerald-500/60 pointer-events-none z-10" />
         
                   <video
                     src={selectedVideo.src}
                     controls
                     autoPlay
                     loop
                     className="w-full max-h-[85vh] object-cover rounded-3xl"
                   />
         
                   <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_120px_rgba(34,197,94,0.4)] z-20" />
         
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-30">
                     <h3 className="text-2xl sm:text-4xl font-black text-white drop-shadow-2xl bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
                       {selectedVideo.title}
                     </h3>
                   </div>
         
                   <button
                     onClick={() => setSelectedVideo(null)}
                     className="absolute 
                                top-4 right-4 
                                sm:top-6 sm:right-6 
                                md:top-8 md:right-8 
                                w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 
                                bg-emerald-600/95 backdrop-blur-md rounded-full 
                                flex items-center justify-center shadow-2xl 
                                hover:scale-110 hover:bg-emerald-500 
                                transition-all duration-300 
                                border-4 border-white/30 z-50"
                   >
                     <X className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white font-bold" />
                   </button>
                 </div>
               </motion.div>
             </motion.div>
           )}
         </AnimatePresence>
      </div>
    </>
  );
}