"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Room = {
  image: string;
  title: string;
  description: string;
};

const rooms: Room[] = [
  { image: "https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/428955499f202332eb25f281af288378.jpg", title: "Informatika xonasi", description: "Zamonaviy kompyuterlar bilan jihozlangan, tezkor internet" },
  { image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=900&fit=crop", title: "Matematika xonasi", description: "Interaktiv doska va rang-barang o‘quv materiallari" },
  { image: "https://i.ytimg.com/vi/kpuwF6Vw9Pk/maxresdefault.jpg", title: "Rus tili xonasi", description: "Rus adabiyoti va til o‘rganish uchun maxsus jihozlangan" },
  { image: "https://storage.kun.uz/source/8/1MFb0Oqpc2MKDHPu_EijmWwDkAVWlaGT.jpg", title: "Tarix xonasi", description: "Dunyo xaritasi, tarixiy plakatlar va muzey burchagi" },
  { image: "https://uzreport.news/fotobank/content/7rK7kW2L3Kc9T3hRVUvAleS61NiiPeI21cwUnhbF.jpeg", title: "Fizika laboratoriyasi", description: "Ilmiy tajribalar uchun barcha jihozlar mavjud" },
  { image: "https://www.gazeta.uz/media/img/2020/03/UNBmaM15832209878099_b.jpg", title: "Kimyo xonasi", description: "Xavfsizlik qoidalari bilan to‘liq jihozlangan laboratoriya" },
  { image: "https://i.pinimg.com/736x/d8/a5/a6/d8a5a627e7ff5cd2f829451df003c6a4.jpg", title: "Biologiya xonasi", description: "Mikroskoplar, skelet modeli va o‘simlik kolleksiyasi" },
  { image: "https://m.media-amazon.com/images/I/61iqso5SefL._AC_SL1044_.jpg", title: "Adabiyot xonasi", description: "Kitoblar bilan to‘la kutubxona va o‘qish burchagi" },
  { image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=900&fit=crop", title: "Ingliz tili xonasi", description: "Interaktiv doska va audio tizim bilan jihozlangan" },
  { image: "https://agmk.uz/uploads/pages/sk1.jpg", title: "Sport zali", description: "Professional sport jihozlari va xavfsiz qoplama" },
];

export default function RoomsGallery() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

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
                BIZNING XONALAR
              </span>
            </h1>
            <p className="text-white/90 text-xl sm:text-2xl mt-6 font-medium drop-shadow-lg">
              Har bir xona — o‘quvchilar uchun qulay va zamonaviy muhit
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {rooms.map((room, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setSelectedRoom(room)}
                className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20"
                whileHover={{ y: -12, scale: 1.03 }}
              >
                <div className="aspect-[4/5] relative">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                  />

                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-2xl">
                      {room.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-emerald-400/80 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedRoom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center"
              onClick={() => setSelectedRoom(null)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-3xl" />
        
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ type: "spring", damping: 28, stiffness: 300 }}
                className="relative w-full max-w-5xl mx-4 sm:mx-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/60 backdrop-blur-2xl">
                  <div className="absolute inset-0 rounded-3xl border-8 border-emerald-500/60 pointer-events-none z-10" />
        
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.title}
                    className="w-full max-h-[78vh] object-cover rounded-3xl"
                  />
        
                  <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_120px_rgba(34,197,94,0.4)] z-20" />
                </div>
        
                <div className="mt-6 sm:mt-8 text-center px-4">
                  <h3 className="text-4xl sm:text-6xl md:text-7xl font-black 
                                 bg-gradient-to-r from-emerald-300 via-cyan-300 to-white 
                                 bg-clip-text text-transparent drop-shadow-2xl leading-tight">
                    {selectedRoom.title}
                  </h3>
        
                  <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/95 font-medium 
                                max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                    {selectedRoom.description}
                  </p>
                </div>
        
                <button
                  onClick={() => setSelectedRoom(null)}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}