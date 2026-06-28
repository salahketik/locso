import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Tentang } from "./components/Tentang";
import { Galeri } from "./components/Galeri";
import { Fasilitas } from "./components/Fasilitas";
import { JamOperasional } from "./components/JamOperasional";
import { Lokasi } from "./components/Lokasi";
import { InstagramGrid } from "./components/InstagramGrid";
import { Footer } from "./components/Footer";
import { ReservasiModal } from "./components/ReservasiModal";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isReservasiOpen, setIsReservasiOpen] = useState(false);

  // References for section scroll monitoring
  const sectionsRef = {
    home: useRef<HTMLElement>(null),
    tentang: useRef<HTMLElement>(null),
    galeri: useRef<HTMLElement>(null),
    fasilitas: useRef<HTMLElement>(null),
    lokasi: useRef<HTMLElement>(null),
  };

  // Handle scroll events for navbar transformations and active highlights
  useEffect(() => {
    const handleScroll = () => {
      // Navbar bg changes on scrolling down
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in viewport
      const scrollPosition = window.scrollY + 160; // Offset for navbar height

      for (const [sectionId, ref] of Object.entries(sectionsRef)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to element helper
  const scrollTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    const element = sectionsRef[sectionId as keyof typeof sectionsRef]?.current;
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-cream text-primary overflow-hidden selection:bg-gold selection:text-white">
      
      {/* Decorative One-Line Curve Background Ornaments */}
      <div className="absolute top-[110vh] left-0 w-full pointer-events-none opacity-25 z-0">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M -100,200 C 300,50 600,350 900,100 C 1100,-50 1300,150 1600,80"
            stroke="#B68B4C"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="absolute top-[280vh] right-0 w-full pointer-events-none opacity-15 z-0">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M -50,150 C 400,300 800,50 1100,250 C 1300,350 1400,200 1550,180"
            stroke="#123B17"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="absolute top-[480vh] left-0 w-full pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M 1500,300 C 1100,150 900,380 600,200 C 300,50 100,250 -100,180"
            stroke="#B68B4C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Header / Navbar */}
      <Navbar
        scrolled={scrolled}
        activeSection={activeSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollTo={scrollTo}
        onOpenReservasi={() => setIsReservasiOpen(true)}
      />

      {/* Sections layout with references attached */}
      <main>
        <section ref={sectionsRef.home}>
          <Hero onScrollTo={scrollTo} />
        </section>

        <section ref={sectionsRef.tentang}>
          <Tentang />
        </section>

        <section ref={sectionsRef.galeri}>
          <Galeri />
        </section>

        <section ref={sectionsRef.fasilitas}>
          <Fasilitas />
        </section>

        {/* Hour Timetable Details (Static relative anchor block) */}
        <JamOperasional />

        <section ref={sectionsRef.lokasi}>
          <Lokasi onOpenReservasi={() => setIsReservasiOpen(true)} />
        </section>

        {/* Social Feed section */}
        <InstagramGrid />
      </main>

      {/* Footer Element */}
      <Footer onScrollTo={scrollTo} />

      {/* Booking Dialog Modal overlay */}
      <ReservasiModal
        isOpen={isReservasiOpen}
        onClose={() => setIsReservasiOpen(false)}
      />

    </div>
  );
}
