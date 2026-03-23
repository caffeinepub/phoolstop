import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-16 md:pt-20 min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/phoolstop-hero-farm.dim_1200x800.jpg"
          alt="Flower farm"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: stronger on left for text, lighter on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(246,241,234,0.97) 0%, rgba(246,241,234,0.92) 45%, rgba(246,241,234,0.4) 70%, rgba(246,241,234,0.1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 py-20 w-full">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: "#F0839E20", color: "#35502A" }}
            >
              Farm-to-Business Floriculture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.15] text-gray-900 mb-6"
            style={{ color: "#1A1A1A" }}
          >
            Mumbai's Businesses Deserve Flowers That{" "}
            <span style={{ color: "#35502A" }}>Actually Show Up.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-base md:text-lg leading-relaxed mb-8"
            style={{ color: "#4A4A4A" }}
          >
            PhoolStop sources directly from farms in Dapoli and Nagpur — no
            middlemen, cold chain logistics, and subscription plans that
            eliminate daily ordering chaos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact">
              <Button
                data-ocid="hero.get_quote.button"
                size="lg"
                className="rounded-full font-semibold text-white px-8"
                style={{ backgroundColor: "#35502A" }}
              >
                Get a Quote
              </Button>
            </a>
            <a href="#contact">
              <Button
                data-ocid="hero.free_trial.button"
                size="lg"
                variant="outline"
                className="rounded-full font-semibold px-8 border-2"
                style={{ borderColor: "#F0839E", color: "#F0839E" }}
              >
                Book a Free Trial
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-6 mt-10 pt-8 border-t"
            style={{ borderColor: "rgba(53,80,42,0.15)" }}
          >
            {[
              { value: "2", label: "Farm Partners" },
              { value: "₹0", label: "Middleman Fee" },
              { value: "24h", label: "Response Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-2xl font-bold"
                  style={{ color: "#35502A" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
