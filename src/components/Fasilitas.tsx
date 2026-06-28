import React from "react";
import { motion } from "motion/react";
import {
  Wifi,
  Wind,
  Trees,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Zap,
  Smile,
} from "lucide-react";
import { FASILITAS_LIST } from "../data";

export const Fasilitas: React.FC = () => {
  // Helper to render appropriate Lucide icons matching data file values
  const renderIcon = (name: string) => {
    const props = { className: "text-gold", strokeWidth: 1.2, size: 28 };
    switch (name) {
      case "Wifi":
        return <Wifi {...props} />;
      case "Wind":
        return <Wind {...props} />;
      case "Trees":
        return <Trees {...props} />;
      case "Compass":
        return <Compass {...props} />;
      case "HeartHandshake":
        return <HeartHandshake {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Zap":
        return <Zap {...props} />;
      default:
        return <Smile {...props} />;
    }
  };

  return (
    <section
      className="py-24 md:py-32 bg-white relative z-10"
      id="fasilitas-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-20 flex flex-col items-center">
          <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold mb-3">
            Kenyamanan Menyeluruh
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-4">
            Fasilitas <span className="italic font-serif font-normal text-gold">Kami.</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold my-2" />
          <p className="font-sans text-xs md:text-sm text-primary/70 font-light tracking-wide leading-relaxed">
            Kami merancang ruang agar ideal bagi semua orang—tempat bekerja, bersantai, berkumpul, dan beribadah secara tenang.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10" id="fasilitas-grid">
          {FASILITAS_LIST.map((fac, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={fac.id}
              className="p-8 rounded-2xl bg-cream/20 border border-primary/5 hover:border-gold/30 hover:bg-cream/10 hover:shadow-xl transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors duration-500 shadow-sm border border-primary/5">
                  {renderIcon(fac.iconName)}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-primary font-medium tracking-tight mb-3">
                  {fac.name}
                </h3>
                <p className="font-sans text-[13px] text-primary/70 font-light leading-relaxed">
                  {fac.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
