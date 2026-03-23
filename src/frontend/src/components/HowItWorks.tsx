import { RefreshCcw, Sprout, Truck } from "lucide-react";
import { motion } from "motion/react";

const steps = [
  {
    icon: Sprout,
    step: "01",
    title: "Direct Farmer Sourcing",
    description:
      "We work with growers in Dapoli and Nagpur. No mandis, no middlemen, no markups. You get farm-fresh quality at fair prices.",
  },
  {
    icon: Truck,
    step: "02",
    title: "Cold Chain Logistics",
    description:
      "Flowers move in temperature-controlled vehicles from farm to your venue. Freshness isn't a promise — it's infrastructure.",
  },
  {
    icon: RefreshCcw,
    step: "03",
    title: "Subscription Delivery",
    description:
      "Set your requirements once. We deliver consistently, on schedule, without follow-ups or daily calls.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-[34px] font-bold mb-4"
            style={{ color: "#1A1A1A" }}
          >
            From Farm to Your Doorstep —{" "}
            <span style={{ color: "#35502A" }}>Without the Chaos</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Three steps. One subscription. Zero middlemen.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px"
            style={{ background: "rgba(53,80,42,0.15)" }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <step.icon
                  size={30}
                  style={{ color: "#35502A" }}
                  strokeWidth={1.5}
                />
                <span
                  className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center text-white"
                  style={{ backgroundColor: "#F0839E" }}
                >
                  {i + 1}
                </span>
              </div>
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "#1A1A1A" }}
              >
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#6B6B6B" }}
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
