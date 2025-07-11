import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
  const banners = [
    {
      id: 1,
      image: '/Image/banner/banner1.png',
 
    },
    {
      id: 2,
      image:  '/Image/banner/banner2.png',
 
    },
    
    {
      id: 4,
      image:  '/Image/banner/banner3.png',
 // 
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="rounded-xl mx-auto   px-4">
      <Slider {...settings}>
        {banners.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-screen object-cover rounded-lg"
            />
            
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
