// app/gallery/page.tsx yoki components/GalleryCarousel.tsx

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-59.png",
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-60.png",
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-61.png",
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-64.png",
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-65.png",
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-66.png",
  "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-67.png",
];

export default function GalleryCarousel() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [emblaThumbRef, emblaThumbApi] = useEmblaCarousel(
    { loop: true, dragFree: true, containScroll: "trimSnaps" },
    [Autoplay({ delay: 3000, direction: "reverse", stopOnInteraction: false })]
  );

  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* 70% XIRALASHTIRILGAN ORQA FON */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/70 via-purple-500/70 to-indigo-600/70" />
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/50 via-teal-500/50 to-emerald-600/50 mix-blend-screen blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl animate-pulse opacity-70" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 pt-16 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-yellow-100 bg-clip-text text-transparent">
                GALEREYA
              </span>
            </h1>
            <p className="text-white/90 text-xl sm:text-2xl mt-6 font-medium drop-shadow-lg">
              Maktabimizning eng yorqin va unutilmas lahzalari
            </p>
          </motion.div>

          {/* ASOSIY CAROUSEL */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-2xl border-2 border-white/30">
            <button
              onClick={() => emblaMainApi?.scrollPrev()}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-50 w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-10 h-10 text-white" />
            </button>
            <button
              onClick={() => emblaMainApi?.scrollNext()}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-50 w-16 h-16 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all"
            >
              <ChevronRight className="w-10 h-10 text-white" />
            </button>

            <div className="overflow-hidden rounded-3xl" ref={emblaMainRef}>
              <div className="flex">
                {images.map((src, i) => (
                  <div key={i} className="flex-none w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative cursor-pointer"
                      onClick={() => setSelectedImage(src)}
                    >
                      <img
                        src={src}
                        alt={`Rasm ${i + 1}`}
                        className="w-full h-96 sm:h-[520px] md:h-[680px] lg:h-[760px] object-cover"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* THUMBNAIL */}
          <div className="mt-12 relative rounded-3xl overflow-hidden bg-white/10 backdrop-blur-xl border-2 border-white/30 shadow-2xl">
            <button
              onClick={() => emblaThumbApi?.scrollPrev()}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button
              onClick={() => emblaThumbApi?.scrollNext()}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            <div className="overflow-hidden py-8" ref={emblaThumbRef}>
              <div className="flex gap-6 px-8">
                {images.map((src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="flex-none w-64 cursor-pointer"
                    onClick={() => setSelectedImage(src)}
                  >
                    <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white/30">
                      <img
                        src={src}
                        alt=""
                        className="w-full h-48 object-cover transition-all duration-500 hover:scale-110"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LIGHTBOX – X ICHIDA, RASM TO‘LIQ BORDERDA */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* TO‘LIQ BORDERLI + X ICHIDA */}
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl">
                  <img
                    src={selectedImage}
                    alt="Kattalashtirilgan"
                    className="w-full max-h-[90vh] object-contain block"
                  />

                  {/* Ichki yorqin nur */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl shadow-[inset_0_0_80px_rgba(255,255,255,0.4)]" />

                  {/* X TUGMASI – RASMNING ICHIDA, O‘NG YUQORI BURCHAKDA */}
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 w-14 h-14 bg-red-600/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-red-700 transition-all z-10"
                  >
                    <X className="w-8 h-8 text-white" />
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