import React from "react";
import { motion } from "motion/react";
import { Clock } from "lucide-react";
import { LocsoLogo } from "./LocsoLogo";

export const JamOperasional: React.FC = () => {
  return (
    <section
      className="py-24 bg-primary text-cream relative overflow-hidden z-10"
      id="jam-operasional-section"
    >
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Logo element for decorative separation */}
        <div className="w-12 h-12 mx-auto mb-6 opacity-85">
          <LocsoLogo strokeWidth={2.5} />
        </div>

        <span className="font-sans text-xs tracking-[0.3em] text-gold-light uppercase font-semibold mb-3 block">
          Waktu Bertamu
        </span>
        <h2 className="font-serif text-3xl md:text-5xl tracking-tight font-light text-white mb-10">
          Jam Operasional <span className="italic font-serif font-normal text-gold-light">Kami.</span>
        </h2>

        {/* Premium Operasional Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto" id="jam-operasional-cards">
          
          {/* Card 1: Mon-Sat */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-secondary/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center relative shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Clock className="text-gold-light" size={20} />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-2 tracking-tight">
              Senin – Sabtu
            </h3>
            <p className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold mb-4">Weekday & Saturday</p>
            <span className="font-serif text-2xl md:text-3xl text-white tracking-wide font-light">
              08.30 – 24.00
            </span>
            <p className="text-[10px] text-cream/50 mt-4 tracking-wider uppercase font-mono">WIB (Waktu Indonesia Barat)</p>
          </motion.div>

          {/* Card 2: Sunday */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-secondary/60 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center relative shadow-xl hover:border-gold/30 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Clock className="text-gold-light" size={20} />
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-2 tracking-tight">
              Minggu
            </h3>
            <p className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold mb-4">Sunday Hangout</p>
            <span className="font-serif text-2xl md:text-3xl text-white tracking-wide font-light">
              08.00 – 24.00
            </span>
            <p className="text-[10px] text-cream/50 mt-4 tracking-wider uppercase font-mono">WIB (Waktu Indonesia Barat)</p>
          </motion.div>

        </div>

        <p className="font-sans text-xs md:text-sm text-cream/60 font-light mt-12 tracking-wide">
          Kami siap menyambut Anda dengan seduhan kopi terbaik kapan saja sepanjang hari.
        </p>
      </div>
    </section>
  );
};
