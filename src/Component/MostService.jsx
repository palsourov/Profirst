import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Live Parcel Tracking",
    text: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    image: "/Image/live-tracking.png",
  },
  {
    title: "100% Safe Delivery",
    text: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    image: "/Image/safe-delivery.png",
  },
  {
    title: "24/7 Call Center Support",
    text: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    image: "/Image/safe-delivery.png",
  },
];

const MostService = () => {
  return (
    <section className="p-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 space-y-6">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div
              className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-2xl overflow-hidden p-6 
              hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-in-out"
            >
              {/* Left: Image */}
              <div className="md:w-1/2 flex justify-center">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-60 h-60 object-contain"
                />
              </div>

              {/* Dashed Vertical Divider */}
              <div className="hidden md:block w-[2px] border-r border-dashed border-gray-300 mx-6 h-48"></div>

              {/* Right: Text */}
              <div className="md:w-1/2 mt-6 md:mt-0">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{card.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MostService;
