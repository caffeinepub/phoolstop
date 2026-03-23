import { Briefcase, Building2, Landmark, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

const segments = [
  {
    icon: Building2,
    label: "Hotels & Resorts",
    description:
      "Lobby arrangements, banquet requirements, and suite florals — sourced and delivered without the procurement overhead.",
    bg: "from-emerald-700 to-emerald-900",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Cafes",
    description:
      "Table florals and décor that stay fresh all week. No wilting by Wednesday.",
    bg: "from-rose-400 to-rose-600",
  },
  {
    icon: Landmark,
    label: "Temples & Religious Institutions",
    description:
      "Daily puja flowers and garlands from farms that treat sourcing as seriously as the ritual.",
    bg: "from-amber-500 to-orange-600",
  },
  {
    icon: Briefcase,
    label: "Corporate Offices & Events",
    description:
      "Reception florals and event installations without last-minute vendor calls or price surprises.",
    bg: "from-slate-600 to-slate-800",
  },
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="py-20 px-4 md:px-8"
      style={{ backgroundColor: "#F6F1EA" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-[34px] font-bold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            Built for Businesses That{" "}
            <span style={{ color: "#35502A" }}>
              Can't Afford Unreliable Flowers
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            PhoolStop is purpose-built for institutional buyers with specific,
            recurring needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-shadow duration-300 min-h-[260px] flex flex-col"
            >
              {/* Photo-style gradient background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${seg.bg} opacity-90`}
              />
              {/* Decorative pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-auto"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                >
                  <seg.icon size={24} className="text-white" />
                </div>
                <div className="mt-16">
                  <h3 className="text-white font-semibold text-base mb-2">
                    {seg.label}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {seg.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
