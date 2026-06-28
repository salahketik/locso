import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone } from "lucide-react";

interface LokasiProps {
  onOpenReservasi: () => void;
}

export const Lokasi: React.FC<LokasiProps> = ({ onOpenReservasi }) => {
  return (
    <section
      className="py-24 md:py-32 bg-primary relative z-10"
      id="lokasi-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Alamat Details (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between"
            id="lokasi-details"
          >
            <div>
              <span className="font-sans text-xs tracking-[0.3em] text-gold-light uppercase font-semibold mb-3 block">
                Letak Geografis
              </span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white font-light mb-6">
                Kunjungi Rumah <span className="italic font-serif font-normal text-gold-light">LOCSO.</span>
              </h2>
              
              {/* White elegant contact card */}
              <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl text-primary border border-primary/5">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] tracking-widest text-primary/50 uppercase font-bold mb-1">Alamat</h4>
                    <p className="font-sans text-sm md:text-base text-primary/80 leading-relaxed font-light">
                      Jln. Proklamasi No.162<br />
                      VI Suku, Kecamatan Lubuk Sikarah<br />
                      Kota Solok, Sumatera Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gold" size={18} />
                  </div>
                  <div>
                    <h4 className="font-sans text-[10px] tracking-widest text-primary/50 uppercase font-bold mb-1">Kontak & Reservasi</h4>
                    <a
                      href="https://wa.me/6281276484493?text=Halo%20LOCSO%20Coffee%20%26%20Eatery,%20saya%20ingin%20bertanya%20mengenai..."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-serif text-base md:text-lg font-bold text-gold hover:text-gold-light underline transition-colors cursor-pointer"
                    >
                      Hubungi Layanan Pelanggan (Chat WhatsApp)
                    </a>
                    <p className="font-sans text-[11px] text-primary/60 mt-1.5">
                      Hubungi kami secara langsung untuk info acara, sewa tempat, reservasi meja, atau kolaborasi.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-3 pt-4 border-t border-primary/10">
                  <a
                    href="https://maps.google.com/?q=LOCSO+Coffee+And+Eatery+Solok"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gold hover:bg-gold-light text-primary font-sans text-xs tracking-widest uppercase font-semibold py-4 rounded-xl text-center transition-all duration-300 block shadow-lg hover:shadow-gold/20 cursor-pointer"
                  >
                    Buka di Google Maps
                  </a>
                  
                  <button
                    onClick={onOpenReservasi}
                    className="w-full bg-cream hover:bg-cream/80 text-primary font-sans text-xs tracking-widest uppercase font-semibold py-4 rounded-xl text-center transition-all duration-300 block cursor-pointer"
                  >
                    Reservasi Meja
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 text-cream/50 font-sans text-xs font-light leading-relaxed tracking-wider uppercase">
              * Lokasi strategis di tengah Kota Solok. Mudah diakses dari berbagai wilayah sekitar dan memiliki lahan parkir yang aman.
            </div>
          </motion.div>

          {/* Google Maps Preview (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative min-h-[350px] lg:min-h-full bg-secondary/30"
            id="lokasi-map-container"
          >
            {/* Google Map iframe */}
            <iframe
              title="Google Maps LOCSO Coffee Solok"
              src="https://maps.google.com/maps?q=LOCSO%20Coffee%20%26%20Eatery%20Solok&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0 filter grayscale-[10%] contrast-[110%] saturate-[90%]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            
            {/* Floating map coordinates tag */}
            <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm border border-white/10 px-4 py-2.5 rounded-lg shadow-lg z-10 pointer-events-none hidden sm:block">
              <span className="font-sans text-[8px] tracking-widest uppercase text-gold">Solok Coordinates</span>
              <p className="font-mono text-[9px] text-white">0°47'22"S, 100°39'19"E</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
