import React from "react";
import { Lightbulb, Users, Settings, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: '/Image/bookingIcon.png',
      title: "Booking Pick & Drop",
      description: "From personal packages to business shipments — we deliver on time, every time..",
    },
    {
      icon: '/Image/bookingIcon.png',
      title: "Cash On Delivery",
      description: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: '/Image/bookingIcon.png',
      title: "Delivery Hub",
      description: "From personal packages to business shipments — we deliver on time, every time..",
    },
    {
      icon: '/Image/bookingIcon.png',
      title: "Booking SME & Corporate",
      description: "From personal packages to business shipments — we deliver on time, every time..",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold  text-gray-800 mb-14">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 "
            >
              <div className="flex  mb-4">
                <div className=" p-4 rounded-full">
                   <img src={step.icon} alt="" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
