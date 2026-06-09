import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "Studio", "Services", "Contact", "FAQs"];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled ? "border-b border-gray-100 shadow-xs py-4" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a id="logo-link" href="#home" className="font-serif font-bold text-2xl text-navy tracking-tight">
          Elementum
        </a>

        {/* Desktop Navigation Links */}
        <div id="desktop-nav" className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              id={`nav-link-${link.toLowerCase()}`}
              key={link}
              href={`#${link.toLowerCase()}`}
              className="relative text-gray-600 hover:text-navy text-sm font-medium tracking-wide group py-1"
            >
              {link}
              {/* Sliding Coral Underline */}
              <span
                id={`underline-${link.toLowerCase()}`}
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-coral transition-all duration-300 ease-out group-hover:w-full"
              ></span>
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          id="hamburger-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-navy focus:outline-hidden hover:text-coral transition-colors"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  id={`mobile-nav-link-${link.toLowerCase()}`}
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-coral font-medium text-lg py-2 border-b border-gray-50 last:border-b-0 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
