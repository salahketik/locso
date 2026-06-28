import React from "react";
import { Instagram, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { LocsoLogo } from "./LocsoLogo";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-cream pt-20 pb-10 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
        
        {/* Brand & Narrative */}
        <div className="md:col-span-4 flex flex-col items-start">
          <button onClick={() => onScrollTo("home")} className="flex items-center space-x-3 mb-6 focus:outline-none">
            <div className="w-12 h-9">
              <LocsoLogo strokeWidth={2} />
            </div>
            <div className="flex flex-col items-start leading-none text-left">
              <span className="font-serif text-lg tracking-[0.2em] font-medium text-white">
                LOCSO
              </span>
              <span className="font-sans text-[8.5px] tracking-[0.25em] text-gold font-light mt-0.5">
                COFFEE & EATERY
              </span>
            </div>
          </button>
          <p className="font-sans text-xs md:text-sm text-cream/70 font-light leading-relaxed mb-6 tracking-wide">
            Menggabungkan kehangatan estetika Scandinavian dan kesederhanaan minimalis Japanese Coffee House di tengah keindahan Kota Solok. Tempat terbaik untuk pulang, berbagi rasa, dan berteduh sejenak.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://instagram.com/locsocoffeeandeatery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/6281276484493"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="https://instagram.com/locsocoffeeandeatery"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/10 hover:text-gold flex items-center justify-center transition-colors duration-300"
              aria-label="TikTok"
            >
              <span className="font-sans text-[10px] font-bold tracking-tight">TT</span>
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="md:col-span-3">
          <h4 className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold mb-6">Navigasi</h4>
          <ul className="space-y-3.5">
            {[
              { id: "home", label: "Home" },
              { id: "tentang", label: "Tentang Kami" },
              { id: "galeri", label: "Galeri Foto" },
              { id: "fasilitas", label: "Fasilitas Cafe" },
              { id: "lokasi", label: "Lokasi & Kontak" },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onScrollTo(link.id)}
                  className="font-sans text-xs md:text-sm text-cream/70 hover:text-gold transition-colors duration-300 flex items-center space-x-1.5 focus:outline-none cursor-pointer"
                >
                  <ArrowRight size={10} className="text-gold opacity-50" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Jam Operasional Summary */}
        <div className="md:col-span-3">
          <h4 className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold mb-6">Jam Operasional</h4>
          <ul className="space-y-4 font-sans text-xs md:text-sm text-cream/85 font-light leading-relaxed">
            <li>
              <strong className="block text-white font-medium mb-1">Senin – Sabtu:</strong>
              <span className="text-cream/70">08.30 – 24.00 WIB</span>
            </li>
            <li>
              <strong className="block text-white font-medium mb-1">Minggu:</strong>
              <span className="text-cream/70">08.00 – 24.00 WIB</span>
            </li>
          </ul>
        </div>

        {/* Alamat Singkat */}
        <div className="md:col-span-2">
          <h4 className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold mb-6">Lokasi</h4>
          <p className="font-sans text-xs md:text-sm text-cream/70 font-light leading-relaxed mb-4">
            Jln. Proklamasi No.162<br />
            VI Suku, Kota Solok<br />
            Sumatera Barat
          </p>
          <a
            href="https://maps.google.com/?q=LOCSO+Coffee+And+Eatery+Solok"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gold hover:text-gold-light transition-colors duration-300 font-sans tracking-wider uppercase font-semibold flex items-center space-x-1"
          >
            <span>Rute Navigasi</span>
            <ArrowRight size={12} />
          </a>
        </div>

      </div>

      {/* Copyright block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 text-cream/40 font-sans text-[11px] tracking-widest uppercase">
        <p>© {currentYear} LOCSO Coffee & Eatery. Hak Cipta Dilindungi.</p>
        <p className="font-sans text-[10px] text-cream/40 flex items-center justify-center md:justify-end gap-1.5 flex-wrap">
          <span>Didesain oleh</span>
          <a
            href="https://wa.me/6281276484493?text=Halo%20Randev,%20saya%20tertarik%20untuk%20membuat%20website%20profesional%20seperti%20Locso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light underline font-bold transition-colors cursor-pointer"
          >
            Randev
          </a>
          <span>| Ingin Website Bisnis? Chat WA: 081276484493</span>
        </p>
      </div>
    </footer>
  );
};
