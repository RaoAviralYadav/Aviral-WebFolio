"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blogs & Newsletter" },
  {
    label: "Resources",
    dropdown: [
      { href: "/blog", label: "Web Dev" },
      { href: "/blog", label: "Mobile App Dev" },
      { href: "/blog", label: "Python" },
      { href: "/blog", label: "AI/ML" },
      { href: "/blog", label: "Cloud AWS" },
      { href: "/blog", label: "Designing & Editing" },
    ],
  },
  { href: "/case-studies", label: "Case Studies" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-lg 
        ${isScrolled 
          ? "bg-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.2)]" 
          : "bg-white/2"} 
        transition-all duration-300`}
      style={{
        WebkitBackdropFilter: "blur(20px) saturate(180%)",
        backdropFilter: "blur(20px) saturate(180%)",
        backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand Name */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-brandWhite drop-shadow-md">
          Aviral Yadav
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => {
            if (link.dropdown) {
              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 font-medium bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                    <ChevronDown size={16} className="text-cyan-300" />
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute mt-2 w-48 rounded-xl p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                      >
                        {link.dropdown.map((item, idx) => (
                          <Link
                            key={idx}
                            href={item.href}
                            className="block px-4 py-2 rounded-lg text-sm text-white hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-pink-500/30 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-brandWhite hover:text-gray-300 transition-colors ${
                  pathname === link.href ? "text-gray-300" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brandWhite"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-4 space-y-4"
          >
            {navLinks.map((link, index) => {
              if (link.dropdown) {
                return (
                  <div key={index}>
                    <button
                      onClick={() => setMobileDropdownOpen((prev) => !prev)}
                      className="w-full flex justify-between items-center text-left text-white font-medium"
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 mt-2 space-y-2"
                        >
                          {link.dropdown.map((item, idx) => (
                            <Link
                              key={idx}
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block text-gray-300 hover:text-white"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-white font-medium"
                >
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
