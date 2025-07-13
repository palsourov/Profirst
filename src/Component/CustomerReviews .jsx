import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    profession: "E-commerce Seller",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Profast Courier has completely changed the way I ship products. Fast, reliable, and affordable!",
  },
  {
    id: 2,
    name: "Emily Smith",
    profession: "Online Boutique Owner",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review:
      "Super impressed with their 24/7 support and safe delivery. I trust them for all my logistics.",
  },
  {
    id: 3,
    name: "Michael Lee",
    profession: "Retail Manager",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "The best courier service in the country. My parcels always arrive on time and in perfect condition.",
  },
  {
    id: 4,
    name: "Sophia Kim",
    profession: "Tech Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    review:
      "Their tracking system and service quality give me peace of mind. Highly recommended!",
  },
  {
    id: 5,
    name: "David Johnson",
    profession: "Marketplace Seller",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    review:
      "I’ve used many courier services, but Profast is the most consistent and customer-focused.",
  },
];

const CustomerReviews = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  let sliderRef = null;

  const settings = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    beforeChange: (_, next) => setActiveSlide(next),
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="text-center mb-10 space-y-5 mx-4">
        <img className="mx-auto " src="/Image/customer-top.png" alt="" />
        <h2 className="text-4xl font-bold text-[#03373D]">What our customers are sayings</h2>
        <p className="text-gray-600 m-auto mt-2 text-lg lg:w-[55%] ">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
      </div>

      <div className="max-w-6xl mx-auto relative px-4">
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {reviews.map((review, index) => (
            <div key={review.id} className="px-4">
              <div
                className={`bg-white rounded-xl p-6 shadow-xl  transition-all duration-300 ease-in-out ${
                  index === activeSlide ? "scale-100 opacity-100" : "scale-95 opacity-40"
                }`}
              >
                <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
                <p className="text-gray-600 italic mb-6 min-h-[100px]">
                  “{review.review}”
                </p>
                <div className="border-t border-dashed border-gray-300 my-4 w-3/4 mx-auto"></div>
                <div className="flex  gap-5 items-center mt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-4 border-[#CAEB66] mb-2"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-[#03373D]">{review.name}</h3>
                  <p className="text-sm text-gray-500">{review.profession}</p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Bottom Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => sliderRef.slickPrev()}
            className="bg-[#CAEB66] hover:bg-[#b3d94d] text-black p-3 rounded-full shadow transition"
          >
            <FaArrowLeft className="text-xl" />
          </button>
          <button
            onClick={() => sliderRef.slickNext()}
            className="bg-[#CAEB66] hover:bg-[#b3d94d] text-black p-3 rounded-full shadow transition"
          >
            <FaArrowRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
