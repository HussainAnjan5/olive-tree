import { useState } from "react";
import { Phone, MessageCircle, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = "tel:+923028815435";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/923028815435", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Call Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={handleCall}
              className="absolute bottom-20 right-0 bg-[#0EA5E9] hover:bg-[#0284c7] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
              aria-label="Call Us"
            >
              <Phone className="w-6 h-6" />
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                Call Us
              </span>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              onClick={handleWhatsApp}
              className="absolute bottom-36 right-0 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 group"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                WhatsApp
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#D4AF37] to-[#c4a02d] hover:from-[#c4a02d] hover:to-[#D4AF37] text-white p-5 rounded-full shadow-2xl transition-all hover:scale-110"
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.3 }}
        aria-label="Contact Options"
      >
        {isOpen ? <X className="w-7 h-7" /> : <Plus className="w-7 h-7" />}
      </motion.button>
    </div>
  );
}
