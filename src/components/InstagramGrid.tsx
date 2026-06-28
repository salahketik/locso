import React from "react";
import { motion } from "motion/react";
import { Instagram, Star } from "lucide-react";
import { INSTAGRAM_POSTS } from "../data";

export const InstagramGrid: React.FC = () => {
  return (
    <section
      className="py-24 bg-cream relative z-10"
      id="instagram-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 flex flex-col items-center">
          <span className="font-sans text-xs tracking-[0.3em] text-gold uppercase font-semibold mb-3">
            Sosial Media
          </span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-primary font-light mb-4">
            Ikuti Perjalanan <span className="italic font-serif font-normal text-gold">@locsocoffeeandeatery</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold my-2" />
          <p className="font-sans text-xs md:text-sm text-primary/70 font-light tracking-wide leading-relaxed">
            Dapatkan berita terbaru, promo spesial, menu baru, dan momen seru harian langsung di Instagram resmi kami.
          </p>
        </div>

        {/* Instagram Post Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12" id="instagram-grid">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              key={post.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-md bg-primary cursor-pointer block"
            >
              {/* Photo */}
              <img
                src={post.imageUrl}
                alt="LOCSO Instagram Post"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay (Likes & Comments shown on hover) */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 z-10">
                <Instagram className="text-gold mb-3" size={24} />
                
                <div className="flex items-center space-x-3 font-sans text-xs text-cream mb-2 font-medium">
                  <span className="flex items-center space-x-1">
                    <Star size={12} className="fill-gold text-gold" />
                    <span>{post.likes}</span>
                  </span>
                  <span>•</span>
                  <span>{post.comments} Komen</span>
                </div>
                
                <p className="font-sans text-[10px] text-cream/70 text-center line-clamp-2 px-2 italic">
                  "{post.caption}"
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://instagram.com/locsocoffeeandeatery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary hover:bg-secondary text-white font-sans text-xs tracking-widest uppercase font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg active:scale-95 cursor-pointer"
            id="follow-instagram-btn"
          >
            <Instagram size={16} className="text-gold" />
            <span>Ikuti Instagram Kami</span>
          </a>
        </div>

      </div>
    </section>
  );
};
