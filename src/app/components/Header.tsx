import { Link, useLocation } from "react-router";
import { Menu, X, GraduationCap, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "@/assets/logo.png";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Special Education", path: "/special-education" },
    { name: "Our Faculty", path: "/our-faculty" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-10">
            {/* Left: Email */}
            <a href="mailto:sanaolivetree@gmail.com" className="flex items-center gap-2 text-sm hover:text-[#0EA5E9] transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">sanaolivetree@gmail.com</span>
            </a>
            
            {/* Right: Social Media Icons */}
            <div className="flex items-center gap-4">
              <a 
                href="https://www.facebook.com/olivetreemontessoripakistan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0EA5E9] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/olivetreemontessori" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0EA5E9] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@olivetreemontessoriprescho3738" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#0EA5E9] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24 py-2">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-20 h-20 rounded bg-white flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Olive Tree Montessori" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#0F172A]">
                  Olive Tree
                </h1>
                <p className="text-xs text-gray-500">Montessori & School</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-[15px] font-medium transition-colors ${
                    location.pathname === item.path
                      ? "text-[#0EA5E9]"
                      : "text-gray-700 hover:text-[#0EA5E9]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/apply-online"
                className="px-6 py-2.5 bg-[#0F172A] text-white rounded-lg font-medium hover:bg-[#1e293b] transition-colors"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-[#0EA5E9] transition-colors p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden border-t border-gray-200"
              >
                <div className="py-4 space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-3 text-[15px] font-medium transition-colors rounded-lg ${
                        location.pathname === item.path
                          ? "text-[#0EA5E9] bg-[#F0F9FF]"
                          : "text-gray-700 hover:text-[#0EA5E9] hover:bg-[#F0F9FF]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    to="/apply-online"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block mx-4 mt-4 px-6 py-3 bg-[#0F172A] text-white rounded-lg font-medium text-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
}