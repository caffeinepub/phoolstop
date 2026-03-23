import { motion } from "motion/react";

const cards = [
  {
    image: "/assets/generated/phoolstop-farmer-1.dim_600x400.jpg",
    title: "Farmer-First Sourcing",
    description:
      "We pay farmers fair prices before flowers hit any market. Today, we work with growers in Dapoli and Nagpur. That network is growing.",
  },
  {
    image: "/assets/generated/phoolstop-coldchain.dim_600x400.jpg",
    title: "Cold Chain Reduces Waste",
    description:
      "Flowers that arrive fresh don't end up in the bin. Our logistics cut post-harvest loss — good for farmers, good for your costs.",
  },
  {
    image: "/assets/generated/phoolstop-hotel-flowers.dim_600x400.jpg",
    title: "Community Impact",
    description:
      "Every subscription supports smallholder families directly. No aggregator margin sitting between the farm and your invoice.",
  },
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 px-4 md:px-8 bg-white">
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
            Sourcing With <span style={{ color: "#35502A" }}>Intention</span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            We believe the best flowers come from supply chains that treat
            everyone fairly — from farm to front desk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl overflow-hidden shadow-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 bg-white">
                <h3
                  className="text-base font-semibold mb-2"
                  style={{ color: "#35502A" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6B6B6B" }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
