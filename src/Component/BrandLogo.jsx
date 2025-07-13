import React from 'react';
import Marquee from 'react-fast-marquee';

const BrandLogo = () => {
  const logos = [
    {
       img: '/Image/brands/amazon_vector.png', 
    },
    {
       img: '/Image/brands/amazon.png', 
    },
    {
       img: '/Image/brands/casio.png', 
    },
    {
       img: '/Image/brands/moonstar.png', 
    },
    {
       img: '/Image/brands/randstad.png', 
    },
    {
       img: '/Image/brands/start-people 1.png', 
    },
    {
       img: '/Image/brands/start.png', 
    },
    
  ];

  return (
    <div className="bg-white mt-5 py-10 overflow-hidden">
      <h2 className="text-3xl text-gray-600 font-bold text-center mb-6">We've helped thousands of sales teams</h2>
      <Marquee direction="right" className='mt-10' speed={40} gradient={false}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.img}
            alt={`Brand ${index + 1}`}
            className="h-10 mx-[80px] object-contain"
          />
        ))}
      </Marquee>
    </div>
  );
};

export default BrandLogo;
