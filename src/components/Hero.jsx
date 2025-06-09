import React from 'react';

const Hero = () => {
  return (
    <section
      className="pt-24 pb-16 bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/assets/images/hero2.jpg')", 
      }}
    >
      <div className="container mx-auto px-4 text-center py-16 rounded-xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Startups Web3</h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
          Shaping the Future of Decentralized Innovation
        </p>
      </div>
    </section>
  );
};

export default Hero;
