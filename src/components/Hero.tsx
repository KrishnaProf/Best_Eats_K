import React from "react";

const Hero = () => {
  return (
    <div className="w-max-[1640px] mx-auto p-4">
      <div className="relative">
        <div className="absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            The <span className="text-orange-500"> Best </span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text7xl font-bold text-orange-500">
            Foods
            <span className="text-white"> Delivered</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
