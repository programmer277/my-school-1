// components/RoomsGallery.tsx  yoki  app/rooms/page.tsx

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
        {/* 70% XIRALASHTIRILGAN + CHIROYLİ YORQIN ORQA FON */}
        <div className="fixed inset-0 -z-10">
          {/* Asosiy gradient – 70% xira */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400/70 via-purple-500/70 to-indigo-600/70" />
          
          {/* Qo'shimcha layer – xira va blur bilan */}
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/50 via-teal-500/50 to-emerald-600/50 mix-blend-screen blur-xl" />
          
          {/* Yorqin nur effekti – sekin puls */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 blur-3xl animate-pulse opacity-70" />
          
          {/* Qora xira qatlam – matn va kartalar yaxshi o‘qilishi uchun */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 pt-16 pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* SARLAVHA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-yellow-100 bg-clip-text text-transparent">
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
                className="group relative cursor-pointer rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/30"
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

                  <div className="absolute inset-0 rounded-3xl ring-4 ring-transparent group-hover:ring-cyan-300/80 transition-all duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LIGHTBOX */}
        <AnimatePresence>
          {selectedRoom && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedRoom(null)}
            >
              <div className="absolute inset-0 bg-black/70 backdrop-blur-3xl" />

              <motion.div
                initial={{ scale: 0.85 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.85 }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="relative w-full max-w-5xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black/80 backdrop-blur-2xl border-2 border-white/30">
                  <img
                    src={selectedRoom.image}
                    alt={selectedRoom.title}
                    className="w-full max-h-[85vh] object-contain rounded-3xl"
                  />
                  <div className="absolute inset-0 rounded-3xl pointer-events-none shadow-[inset_0_0_60px_rgba(255,255,255,0.3)]" />
                </div>

                <div className="absolute -bottom-16 sm:-bottom-20 left-0 right-0 text-center">
                  <h3 className="text-4xl sm:text-5xl font-black text-white drop-shadow-2xl mb-3">
                    {selectedRoom.title}
                  </h3>
                  <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
                    {selectedRoom.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedRoom(null)}
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