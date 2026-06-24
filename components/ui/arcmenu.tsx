"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone, MessageCircle, Info } from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    icon: <MessageCircle size={24} />,
    href: "https://wa.me/",
    color: "text-green-600",
    x: -20,  // Final horizontal position
    y: -110, // Final vertical position
  },
  {
    icon: <Phone size={22} />,
    href: "tel:+123456789",
    color: "text-blue-600",
    x: -90,
    y: -70,
  },
  {
    icon: <Info size={22} />,
    href: "/contact",
    color: "text-slate-700",
    x: -115,
    y: 10,
  },
];

export function ArcMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // We place this in the bottom right corner
    <div className="absolute bottom-8 right-5 sm:bottom-9 sm:right-8 z-50 flex items-center justify-center">
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop: clicking anywhere else closes the menu */}
            <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />

            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: -180 }}
                animate={{ x: item.x, y: item.y, scale: 1, opacity: 1, rotate: 0 }}
                exit={{ x: 0, y: 0, scale: 0, opacity: 0, rotate: -180 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 250, 
                    damping: 20, 
                    delay: isOpen ? index * 0.05 : 0 
                }}
                className="absolute"
              >
                <Link
                  href={item.href}
                  className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110 active:scale-90 ${item.color}`}
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/40 text-white shadow-2xl transition-colors duration-300 ${
          isOpen ? "bg-[#0f172a]" : "bg-[#17306f]"
        }`}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          // Clockwise rotation (135 degrees makes it an 'X')
          animate={{ rotate: isOpen ? 135 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Plus size={30} strokeWidth={2.5} />
        </motion.div>

      </motion.button>
    </div>
  );
}