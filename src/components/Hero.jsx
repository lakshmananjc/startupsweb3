import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Startups Web3</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">Shaping the Future of Decentralized Innovation</p>
        <Button size="lg" variant="secondary" className="text-purple-600">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default Hero;