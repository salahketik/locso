import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { LocsoLogo } from "./LocsoLogo";

interface NavbarProps {
  scrolled: boolean;
  activeSection: string;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollTo: (sectionId: string) => void;
  onOpenReservasi: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  scrolled,
  activeSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
  onOpenReservasi,
}) => {
  const menuItems = [
    { id: "home", label: "Home" },
    { id: "tentang", label: "Tentang" },
    { id: "galeri", label: "Galeri" },
    { id: "fasilitas", label: "Fasilitas" },
    { id: "lokasi", label: "Lokasi" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
      id="navbar-locso"
    >
      {/* Disclaimer / Creator Watermark Banner */}
      <div className="bg-gold text-primary text-[9px] md:text-xs tracking-wider text-center py-2 px-4 flex items-center justify-center flex-wrap gap-x-2 gap-y-1 font-sans border-b border-white/10">
        <span className="font-light opacity-95">⚠️ Situs Konsep Independen & Portofolio didesain oleh <strong className="font-bold">Randev</strong>.</span>
        <a
          href="https://wa.me/6281276484493?text=Halo%20Randev,%20saya%20tertarik%20untuk%20membuat%20website%20profesional%20seperti%20Locso"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold hover:text-white transition-colors flex items-center gap-0.5 cursor-pointer ml-1"
        >
          Ingin website resmi atau kustom? Chat WA: 081276484493
        </a>
      </div>

      <div className={`max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
        {/* Logo Left */}
        <button
          onClick={() => scrollTo("home")}
          className="flex items-center space-x-3 group cursor-pointer focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="w-12 h-9 transition-transform duration-500 group-hover:scale-105">
            <LocsoLogo strokeWidth={2} />
          </div>
          <div className="flex flex-col items-start leading-none text-left">
            <span
              className={`font-serif text-lg tracking-[0.2em] font-medium transition-colors duration-300 ${
                scrolled ? "text-white" : "text-white md:text-white"
              }`}
            >
              LOCSO
            </span>
            <span className="font-sans text-[8.5px] tracking-[0.25em] text-gold font-light mt-0.5">
              COFFEE & EATERY
            </span>
          </div>
        </button>

        {/* Links Center (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`relative font-sans text-[11px] tracking-widest uppercase py-2 cursor-pointer transition-colors duration-300 focus:outline-none ${
                activeSection === item.id
                  ? "text-gold font-medium"
                  : scrolled
                  ? "text-white/80 hover:text-white"
                  : "text-white/85 hover:text-gold"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Visit Us Button Right (Desktop) */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onOpenReservasi}
            className="bg-gold hover:bg-gold-light text-primary font-sans text-[11px] tracking-widest uppercase font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            id="nav-action-btn"
          >
            Kunjungi Kami
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Toggle Menu"
          id="mobile-menu-toggle"
        >
          {mobileMenuOpen ? <X size={20} /> : <MenuIcon size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-white/10 mt-3 shadow-2xl"
            id="mobile-nav-panel"
          >
            <div className="px-6 py-8 flex flex-col space-y-5">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-left font-sans text-xs tracking-widest uppercase py-1 transition-colors ${
                    activeSection === item.id ? "text-gold font-medium" : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservasi();
                  }}
                  className="w-full bg-gold hover:bg-gold-light text-primary font-sans text-xs tracking-widest uppercase font-semibold py-3.5 rounded-full text-center transition-colors shadow-md cursor-pointer"
                >
                  Kunjungi Kami
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
