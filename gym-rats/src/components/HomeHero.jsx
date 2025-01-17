import React from 'react';

const HomeHero = () => {
  return (
    <div
      className="relative w-full h-[600px] bg-cover lg:bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600)" }} // Set your background image URL here
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to darken the background image */}
      
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
        {/* Hero Content */}
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Transform Your Body with FitLife Gym
        </h1>
        <p className="text-xl mb-8 max-w-lg mx-auto">
          Join us and experience world-class fitness training and state-of-the-art equipment to help you achieve your fitness goals.
        </p>
        <a href="/signup">
          <button className="bg-primary text-white px-6 py-3 rounded-full text-xl hover:bg-secondary-dark transition duration-300">
            Join Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeHero;
