import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "motion/react";

const plans = [
  {
    name: "Starter",
    price: "₹5,000 – ₹7,000",
    period: "/month",
    tagline: "Best for temples, small hotels, and standalone restaurants.",
    features: [
      "Fixed weekly delivery schedule",
      "Seasonal flower variety",
      "Standard packaging",
      "Email support",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Growth",
    price: "₹15,000 – ₹20,000",
    period: "/month",
    tagline: "Corporates, mid-size hotels, and multi-outlet cafes.",
    badge: "Most Popular",
    features: [
      "Priority sourcing guarantee",
      "Dedicated account manager",
      "Flexible delivery frequency",
      "Substitution planning",
      "Monthly quality review",
    ],
    highlighted: true,
    cta: "Get Started",
  },
  {
    name: "Enterprise",
    price: "₹2,00,000 – ₹4,00,000",
    period: "/month",
    tagline: "Large hotel groups, banquet venues, and event companies.",
    features: [
      "Custom sourcing & volumes",
      "White-glove delivery service",
      "On-site arrangement support",
      "Event-based surge capacity",
      "Dedicated ops team",
    ],
    highlighted: false,
    cta: "Custom Quote",
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
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
            Indicative Plans —{" "}
            <span style={{ color: "#35502A" }}>Tailored to Your Scale</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            All plans include cold chain logistics and direct farm sourcing.
            Pricing is indicative — every business is different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`rounded-2xl overflow-hidden ${
                plan.highlighted
                  ? "shadow-xl ring-2 ring-[#35502A]"
                  : "shadow-card border"
              }`}
              style={{
                borderColor: plan.highlighted
                  ? "#35502A"
                  : "rgba(53,80,42,0.12)",
              }}
            >
              {/* Card Header */}
              <div
                className="p-6"
                style={{
                  backgroundColor: plan.highlighted ? "#35502A" : "white",
                  color: plan.highlighted ? "white" : "#1A1A1A",
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: plan.highlighted ? "white" : "#1A1A1A" }}
                  >
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: "#F0839E", color: "white" }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-2xl font-extrabold"
                    style={{ color: plan.highlighted ? "white" : "#35502A" }}
                  >
                    {plan.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{
                      color: plan.highlighted
                        ? "rgba(255,255,255,0.7)"
                        : "#6B6B6B",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{
                    color: plan.highlighted
                      ? "rgba(255,255,255,0.8)"
                      : "#6B6B6B",
                  }}
                >
                  {plan.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6 bg-white flex flex-col gap-4">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        size={16}
                        className="mt-0.5 shrink-0"
                        style={{ color: "#35502A" }}
                      />
                      <span className="text-sm" style={{ color: "#4A4A4A" }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="mt-2">
                  <Button
                    data-ocid={`pricing.${plan.name.toLowerCase()}.button`}
                    className="w-full rounded-full font-semibold"
                    style={{
                      backgroundColor: plan.highlighted
                        ? "#35502A"
                        : "transparent",
                      color: plan.highlighted ? "white" : "#35502A",
                      border: plan.highlighted ? "none" : "2px solid #35502A",
                    }}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          These are indicative ranges. Every business is different.{" "}
          <a
            href="#contact"
            className="font-semibold underline underline-offset-2"
            style={{ color: "#35502A" }}
          >
            Get a Custom Quote →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
