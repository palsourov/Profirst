import React from 'react';

const Merchant = () => {
  return (
    <section data-aos="zoom-in"
      
      className="lg:mx-35 bg-[#03373D] rounded-xl bg-[url('/Image/march.png')] bg-top  bg-no-repeat "
    >
      <div className="hero p-8  md:p-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* Right Image */}
          <img
            src="/Image/Layer_1.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Merchant"
          />

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl text-white font-bold">
              Customer Satisfaction is Our First Priority
            </h1>
            <p className="py-6 text-white w-[90%] md:w-[80%]">
              We offer the lowest delivery charge with the highest value along with 100% safety of your product. Profast courier delivers your parcels in every corner of Bangladesh right on time.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn rounded-full py-3 px-6 text-[16px] md:text-[18px]  hover:bg-transparent hover:border-2 border-[#CAEB66]  hover:text-[#CAEB66]  text-black bg-[#CAEB66]">
                Become a Merchant
              </button>
              <button className="btn text-[#CAEB66] py-3 px-6 text-[16px] md:text-[18px] border-2 hover:bg-[#CAEB66] hover:text-black border-[#CAEB66] rounded-full bg-transparent">
                Earn with Profast Courier
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
