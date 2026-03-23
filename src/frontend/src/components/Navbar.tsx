import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Why Us", href: "#why-us" },
  { label: "Pricing", href: "#pricing" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 shrink-0">
            <img
              src="/assets/phoolstop logo.svg"
              alt="PhoolStop"
              className="h-8 md:h-10 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a href="#contact">
              <Button
                data-ocid="nav.get_quote.button"
                className="hidden md:inline-flex bg-brand-pink hover:bg-brand-pink/90 text-white font-semibold rounded-full px-5 text-sm"
                style={{ backgroundColor: "#F0839E" }}
              >
                Get a Quote
              </Button>
            </a>
            <button
              type="button"
              className="lg:hidden p-2 text-gray-600 hover:text-brand-green"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-brand-green py-2"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <Button
              onClick={() => setMenuOpen(false)}
              className="w-full mt-2 rounded-full font-semibold text-white"
              style={{ backgroundColor: "#F0839E" }}
            >
              Get a Quote
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
