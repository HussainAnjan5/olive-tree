import { Facebook, Instagram, Youtube, Linkedin, ArrowUp, GraduationCap } from "lucide-react";
import { Link } from "react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-md bg-white flex items-center justify-center p-1">
                <img src={logo} alt="Olive Tree Montessori Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Olive Tree Montessori</h3>
                <p className="text-gray-400 text-sm">Best School in Lahore</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Australian and UK-certified Montessori & School in Lahore, Pakistan. Nurturing future leaders through excellence in education.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/100027512473636/videos/pcb.1453679818892420/1118939439324201"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/olivetreemontessori.school?igsh=ZWNhNmlpdmYza3Fx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@olivetreemontessoriprescho3738"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/olive-tree-montessori-school/?originalSubdomain=pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#0EA5E9] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/special-education" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">
                  Special Education
                </Link>
              </li>
              <li>
                <Link to="/our-faculty" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">
                  Our Faculty
                </Link>
              </li>
              <li>
                <Link to="/apply-online" className="text-gray-300 hover:text-[#0EA5E9] transition-colors">
                  Apply Online
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="font-semibold text-white mb-1">Johar Town Lahore</p>
                <p>House 50, D/1 Baig Rd, Block D2, Johar Town, Lahore</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">49-D Baig Rd</p>
                <p>49-D Baig Rd, Block D2, Johar Town, Lahore</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Johar Town Campus - G Block</p>
                <p>Plot 513, Block G1, Johar Town, Lahore</p>
              </div>
              <div className="pt-2 space-y-2">
                <p>
                  <a href="tel:+923028815435" className="hover:text-[#0EA5E9] transition-colors">
                    03028815435
                  </a>
                </p>
                <p>
                  <a href="tel:+923258815444" className="hover:text-[#0EA5E9] transition-colors">
                    03258815444
                  </a>
                </p>
                <p>
                  <a href="mailto:sanaolivetree@gmail.com" className="hover:text-[#0EA5E9] transition-colors">
                    sanaolivetree@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Olive Tree Montessori & School. All rights reserved.
          </p>
          <a
            href="/" 
             className="text-sm text-gray-400 hover:text-[#0EA5E9] transition-colors"
          >
            Powered by <span className="font-semibold text-[#D4AF37]">US DIGITAL PRO</span>
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 left-8 w-12 h-12 bg-[#0EA5E9] hover:bg-[#0284c7] rounded-lg flex items-center justify-center shadow-lg transition-colors z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </footer>
  );
}