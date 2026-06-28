import React from "react";
import { motion } from "motion/react";
import { STATS, storefront, baristaTeam } from "../data";

export const Tentang: React.FC = () => {
  return (
    <section
      className="py-24 md:py-32 bg-cream relative z-10"
      id="tentang-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Column Left — Interior Photo with scandinavian styling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
            id="tentang-image-container"
          >
            {/* Back Decorative Gold Frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-2xl z-0" />
            
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 aspect-[4/3] bg-primary">
              <img
                src={storefront}
                alt="LOCSO Coffee Storefront"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Info tag containing real Barista Team image! */}
            <div className="absolute -bottom-10 -right-6 bg-primary text-cream p-3 rounded-2xl shadow-2xl z-20 hidden sm:flex items-center space-x-4 border border-white/10 max-w-[280px]">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-secondary shadow-md">
                <img
                  src={baristaTeam}
                  alt="LOCSO Baristas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-serif text-[11px] italic text-gold-light leading-none">Tim Barista</p>
                <h4 className="font-sans text-[9px] tracking-widest uppercase font-bold text-white mt-1 leading-normal">
                  Senyuman & Seduhan Hangat
                </h4>
              </div>
            </div>
          </motion.div>

          {/* Column Right — Philosophy & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-start"
            id="tentang-content"
          >
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold">Filosofi Kami</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6 text-primary leading-tight font-light">
              Sebuah Rumah untuk <span className="italic font-serif font-normal text-gold">Berteduh & Berbagi.</span>
            </h2>

            <div className="space-y-4 text-primary/80 font-sans text-sm md:text-base font-light leading-relaxed mb-8 tracking-wide">
              <p>
                Terletak di Kota Solok, Sumatera Barat, <strong className="font-medium text-primary">LOCSO Coffee & Eatery</strong> lahir dengan visi menyajikan tempat beristirahat yang tenang dari kesibukan harian. Terinspirasi dari penggabungan kehangatan estetika Scandinavian dan kesederhanaan minimalis Japanese Coffee House.
              </p>
              <p>
                Kami meyakini bahwa secangkir kopi berkualitas adalah pembuka cerita yang tulus. Melalui biji kopi arabika pilihan dari pegunungan Solok dan hidangan penuh rasa yang diproses sepenuh hati, kami menyambut Anda bukan sekadar sebagai pelanggan, melainkan sebagai tamu istimewa di rumah kami.
              </p>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 w-full pt-6 border-t border-primary/10">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-serif text-2xl md:text-3xl text-gold font-light tracking-tight">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs tracking-wider text-primary/70 uppercase mt-1 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
