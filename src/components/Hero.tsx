import React from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { LocsoLogo } from "./LocsoLogo";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollTo }) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-primary z-10"
      id="hero-section"
    >
      {/* Background Image of high-quality Scandinavian / Japanese style wooden interior */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop"
          alt="LOCSO Coffee Interior"
          className="w-full h-full object-cover object-center filter brightness-[0.45]"
          referrerPolicy="no-referrer"
        />
        {/* Subtle vignette/gradient overlay for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center z-10 flex flex-col items-center">
        
        {/* Hero Line Art Ornament Intro */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-64 h-32 md:w-80 md:h-40 mb-8"
        >
          <LocsoLogo strokeWidth={2} />
        </motion.div>

        {/* Subtitle Accent */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center space-x-3 mb-4"
        >
          <span className="h-[1px] w-8 bg-gold-light opacity-60" />
          <span className="font-sans text-[11px] md:text-xs tracking-[0.4em] text-gold uppercase font-light">
            Kota Solok, Sumatera Barat
          </span>
          <span className="h-[1px] w-8 bg-gold-light opacity-60" />
        </motion.div>

        {/* Massive Display Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-5xl md:text-8xl tracking-tight text-white mb-6 font-light leading-none"
          id="hero-headline"
        >
          Datang & <span className="italic font-normal font-serif text-gold-light">Bertamu.</span>
        </motion.h1>

        {/* Narrative Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-sans text-xs md:text-base text-cream/90 max-w-2xl font-light leading-relaxed mb-10 tracking-widest uppercase"
          id="hero-subheadline"
        >
          Lebih dari sekadar coffee shop. Tempat menikmati kopi berkualitas, hidangan terbaik, dan menciptakan momen bersama orang-orang terdekat.
        </motion.p>

        {/* Dual Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full"
          id="hero-actions"
        >
          <button
            onClick={() => onScrollTo("menu")}
            className="w-full sm:w-auto bg-gold hover:bg-gold-light text-primary font-sans text-[11px] tracking-[0.2em] uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-gold/20 active:scale-95 cursor-pointer"
          >
            Lihat Menu
          </button>
          <button
            onClick={() => onScrollTo("lokasi")}
            className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white border border-white/30 font-sans text-[11px] tracking-[0.2em] uppercase font-medium px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm active:scale-95 cursor-pointer"
          >
            Lihat Lokasi
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer z-10"
        onClick={() => onScrollTo("tentang")}
        id="scroll-indicator"
      >
        <span className="font-sans text-[9px] tracking-[0.3em] text-cream/70 uppercase mb-2">
          Scroll Ke Bawah
        </span>
        <ChevronDown size={16} className="text-gold-light" />
      </motion.div>
    </section>
  );
};
