import {
  CalendarCheck,
  Heart,
  Leaf,
  ShoppingBag,
  ThermometerSnowflake,
} from "lucide-react";
import { motion } from "motion/react";

const differentiators = [
  {
    icon: ShoppingBag,
    title: "Direct Farmer Sourcing",
    description:
      "No mandis. We buy directly from growers and pass those savings to you. Fresher product, lower cost.",
  },
  {
    icon: ThermometerSnowflake,
    title: "Cold Chain Logistics",
    description:
      "Temperature-controlled movement from harvest to handoff. Not every florist can say that.",
  },
  {
    icon: CalendarCheck,
    title: "Subscription Model",
    description:
      "Predictable delivery, predictable billing. One contract, no daily ordering. Your ops team will thank you.",
  },
  {
    icon: Leaf,
    title: "Seasonal Flexibility",
    description:
      "We plan around harvest cycles and suggest substitutions before supply disrupts your orders.",
  },
  {
    icon: Heart,
    title: "Farmer Livelihoods",
    description:
      "Our sourcing directly supports smallholder farmers. Better prices for them, better quality for you.",
  },
];

export default function WhyPhoolStop() {
  return (
    <section id="why-us" className="py-20 px-4 md:px-8 bg-white">
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
            Why Procurement Teams{" "}
            <span style={{ color: "#35502A" }}>Choose PhoolStop</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Five things that make the difference when you need flowers every
            day, not just occasionally.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border hover:shadow-card transition-shadow duration-300"
              style={{ borderColor: "rgba(53,80,42,0.12)" }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F6F1EA" }}
              >
                <item.icon size={20} style={{ color: "#35502A" }} />
              </div>
              <h3
                className="text-sm font-semibold mb-2"
                style={{ color: "#1A1A1A" }}
              >
                {item.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#6B6B6B" }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
