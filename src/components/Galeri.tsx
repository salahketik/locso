import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data";

export const Galeri: React.FC = () => {
  const [selectedGalleryCategory, setSelectedGalleryCategory] = useState<string>("All");

  const categories = ["All", "Interior", "Outdoor", "Coffee", "Food", "Pengunjung", "Barista"];

  const filteredGalleryItems = selectedGalleryCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedGalleryCategory);

  return (
    <section
      className="py-24 md:py-32 bg-cream relative z-10"
      id="galeri-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-lg">
            <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold mb-3 block">
              Arsip Visual
            </span>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light">
              Momen di <span className="italic font-serif font-normal text-gold">LOCSO Solok.</span>
            </h2>
          </div>
          
          {/* Gallery filter tags */}
          <div className="flex flex-wrap gap-2 overflow-x-auto pb-1" id="galeri-category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedGalleryCategory(cat)}
                className={`px-4 py-2 rounded-full font-sans text-[9px] tracking-widest uppercase transition-all duration-300 cursor-pointer focus:outline-none ${
                  selectedGalleryCategory === cat
                    ? "bg-primary text-white"
                    : "bg-white/60 text-primary/70 hover:bg-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest-like Masonry Layout Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          id="galeri-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredGalleryItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                key={item.id}
                className={`group relative rounded-2xl overflow-hidden aspect-square sm:aspect-auto sm:h-[350px] md:h-[400px] shadow-md hover:shadow-2xl transition-all duration-500 ease-in-out bg-primary ${item.gridSpan}`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8" />

                {/* Floating category tag */}
                <span className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm text-primary text-[9px] tracking-widest uppercase font-semibold px-3 py-1 rounded-full opacity-90 z-10">
                  {item.category}
                </span>

                {/* Title details shown on hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col z-10 text-white">
                  <span className="font-sans text-[8px] tracking-widest uppercase text-gold mb-1">
                    Kategori {item.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-light tracking-tight text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
