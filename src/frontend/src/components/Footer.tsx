const footerLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Pricing", href: "#pricing" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="pt-14 pb-8 px-4 md:px-8"
      style={{ backgroundColor: "#35502A" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img
                src="/assets/phoolstop logo.svg"
                alt="PhoolStop"
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Direct from farms. Delivered to your business.
            </p>
            <p className="text-white/50 text-xs mt-4">
              Sourcing from Dapoli & Nagpur farms.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-ocid={`footer.${link.label.toLowerCase().replace(/\s+/g, "_")}.link`}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-2">
              <a
                href="mailto:reachphoolstopofficial@gmail.com"
                className="block text-white/70 hover:text-white text-sm transition-colors"
              >
                reachphoolstopofficial@gmail.com
              </a>
              <a
                href="https://wa.me/919607317878"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-white text-sm transition-colors"
              >
                +91 9607317878
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-center">
          <p className="text-white/50 text-xs">
            © {year} PhoolStop. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
