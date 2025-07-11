import React from "react";
import { Briefcase, BookOpen, Users, Layers, Calendar, Star } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: '/Image/service.png',
      title: "Express  & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.  Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    },
    {
      icon: '/Image/service.png',
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    },
    {
      icon: '/Image/service.png',
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    },
    {
      icon: '/Image/service.png',
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    },
    {
      icon: '/Image/service.png',
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
    },
    {
      icon: '/Image/service.png',
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    },
  ];

  return (
    <section className="py-16 bg-[#03373D]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-12">
          We offer a range of services designed to support student growth, foster innovation,
          and create lasting impact through organized club activities.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white text-center hover:bg-[#CAEB66] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 "
            >
              <div className="flex justify-center    mb-4">
               <img className="bg-gray-100 p-3 rounded-full " src={service.icon} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
