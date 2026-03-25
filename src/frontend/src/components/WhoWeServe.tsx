import { Briefcase, Building2, Landmark, UtensilsCrossed } from "lucide-react";
import { motion } from "motion/react";

const segments = [
  {
    icon: Building2,
    label: "Hotels & Resorts",
    description:
      "Lobby arrangements, banquet requirements, and suite florals — sourced and delivered without the procurement overhead.",
    tag: "Hospitality",
  },
  {
    icon: UtensilsCrossed,
    label: "Restaurants & Cafes",
    description:
      "Table florals and décor that stay fresh all week. No wilting by Wednesday.",
    tag: "F&B",
  },
  {
    icon: Landmark,
    label: "Temples & Religious Institutions",
    description:
      "Daily puja flowers and garlands from farms that treat sourcing as seriously as the ritual.",
    tag: "Religious",
  },
  {
    icon: Briefcase,
    label: "Corporate Offices & Events",
    description:
      "Reception florals and event installations without last-minute vendor calls or price surprises.",
    tag: "Corporate",
  },
];

export default function WhoWeServe() {
  return (
    <section
      id="who-we-serve"
      className="py-24 px-4 md:px-8"
      style={{ backgroundColor: "#F6F1EA" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Category label pill */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(53,80,42,0.1)",
                color: "#35502A",
              }}
            >
              Who We Serve
            </span>
          </div>

          {/* Headline */}
          <h2
            className="text-3xl md:text-[36px] font-bold leading-snug mb-4 max-w-2xl mx-auto"
            style={{ color: "#1A1A1A" }}
          >
            Built for Businesses That{" "}
            <span
              className="relative inline-block"
              style={{ color: "#35502A" }}
            >
              Can&apos;t Afford Unreliable Flowers
              {/* Decorative pink underline */}
              <span
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] rounded-full"
                style={{ backgroundColor: "#F0839E" }}
              />
            </span>
          </h2>

          <p className="text-base text-gray-500 max-w-xl mx-auto mt-3">
            PhoolStop is purpose-built for institutional buyers with specific,
            recurring needs.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((seg, i) => (
            <motion.div
              key={seg.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-white rounded-2xl flex flex-col p-7 cursor-default overflow-hidden"
              style={{
                border: "1px solid rgba(53,80,42,0.12)",
                boxShadow: "0 2px 12px rgba(53,80,42,0.07)",
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 10px 30px rgba(53,80,42,0.14)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ backgroundColor: "#35502A" }}
              />

              {/* Icon badge */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0"
                style={{ backgroundColor: "#35502A" }}
              >
                <seg.icon size={20} className="text-white" />
              </div>

              {/* Tag pill */}
              <span
                className="text-[10px] font-semibold uppercase tracking-widest mb-3 inline-block"
                style={{ color: "#F0839E" }}
              >
                {seg.tag}
              </span>

              {/* Label */}
              <h3
                className="font-semibold text-[15px] leading-snug mb-3"
                style={{ color: "#1A1A1A" }}
              >
                {seg.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {seg.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
