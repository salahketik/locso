import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, Clock, Users, MessageCircle, Check, Send } from "lucide-react";

interface ReservasiModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservasiModal: React.FC<ReservasiModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("2");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !date || !time) return;

    // Construct WhatsApp Message Template
    const templateText = `Halo LOCSO Coffee & Eatery! Saya ingin melakukan reservasi meja di LOCSO Solok atas nama:

• *Nama*: ${name}
• *Tanggal*: ${date}
• *Jam*: ${time} WIB
• *Jumlah Tamu*: ${guests} Orang
• *Catatan Tambahan*: ${notes || "-"}

Terima kasih. Mohon info ketersediaan mejanya. ✨`;

    const encodedText = encodeURIComponent(templateText);
    const whatsappUrl = `https://wa.me/6281276484493?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);

    // Reset and close smoothly after 2 seconds
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setName("");
      setDate("");
      setTime("");
      setGuests("2");
      setNotes("");
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/70 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-cream w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-gold/20 z-10 p-6 md:p-8 text-primary"
          >
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-primary/5 text-primary/70 hover:text-primary transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Modal Heading */}
            <div className="text-center mb-8 pr-6">
              <span className="font-sans text-[10px] tracking-widest text-gold uppercase font-bold mb-1.5 block">
                Reservasi Meja
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-primary font-light">
                Kunjungi <span className="italic font-serif font-normal text-gold">LOCSO Solok</span>
              </h3>
              <p className="font-sans text-[11px] text-primary/60 mt-1 max-w-sm mx-auto leading-relaxed">
                Silakan isi detail kunjungan Anda. Sistem kami akan meneruskan data langsung ke WhatsApp tim pelayanan LOCSO.
              </p>
            </div>

            {submitted ? (
              /* Success State animation */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-gold mb-4 border border-gold/30">
                  <Check size={32} />
                </div>
                <h4 className="font-serif text-xl text-primary font-medium mb-1">Membuka WhatsApp...</h4>
                <p className="font-sans text-xs text-primary/70 max-w-xs leading-relaxed">
                  Harap selesaikan pengiriman pesan di aplikasi WhatsApp untuk menyelesaikan reservasi meja Anda. Terima kasih!
                </p>
              </motion.div>
            ) : (
              /* Form input fields */
              <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
                
                {/* Name */}
                <div>
                  <label className="block text-[11px] tracking-wider text-primary/70 font-semibold uppercase mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors font-sans"
                  />
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] tracking-wider text-primary/70 font-semibold uppercase mb-1.5">
                      Tanggal Kunjungan
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-white border border-primary/10 rounded-xl pl-10 pr-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors font-sans"
                      />
                      <Calendar size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold opacity-80" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-wider text-primary/70 font-semibold uppercase mb-1.5">
                      Waktu (Jam)
                    </label>
                    <div className="relative">
                      <input
                        type="time"
                        required
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full bg-white border border-primary/10 rounded-xl pl-10 pr-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors font-sans"
                      />
                      <Clock size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold opacity-80" />
                    </div>
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label className="block text-[11px] tracking-wider text-primary/70 font-semibold uppercase mb-1.5">
                    Jumlah Tamu
                  </label>
                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-white border border-primary/10 rounded-xl pl-10 pr-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors font-sans appearance-none"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4 Orang</option>
                      <option value="5-8">5 - 8 Orang</option>
                      <option value="9+">Lebih dari 8 Orang</option>
                    </select>
                    <Users size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gold opacity-80" />
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                      ▼
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-[11px] tracking-wider text-primary/70 font-semibold uppercase mb-1.5">
                    Catatan Khusus (Opsional)
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Contoh: Meja dekat jendela, perayaan ulang tahun, kursi bayi."
                    rows={2}
                    className="w-full bg-white border border-primary/10 rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-gold transition-colors font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-sans text-xs tracking-widest uppercase font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/20 flex items-center justify-center space-x-2 cursor-pointer mt-6"
                >
                  <MessageCircle size={16} className="text-gold" />
                  <span>Kirim via WhatsApp</span>
                  <Send size={12} className="opacity-70" />
                </button>
              </form>
            )}

            {/* Hint details */}
            <div className="text-center mt-6 text-[10px] text-primary/45 tracking-wide leading-relaxed uppercase">
              * Tanpa biaya pemesanan meja • Batal kapan saja secara bebas
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
