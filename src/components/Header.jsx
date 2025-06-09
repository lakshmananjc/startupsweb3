import React from 'react';
import { Rocket } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-xl font-bold flex items-center">
              <Rocket className="mr-2" /> Startups Web3
            </a>
            <div className="hidden md:flex space-x-6">
              <a href="#about" className="hover:underline">ABOUT US</a>
              <a href="#purpose" className="hover:underline">OUR PURPOSE</a>
              <a href="#services" className="hover:underline">
                What We Do
              </a>
              <a href="#partnerships" className="hover:underline">STRATEGIC PARTNERSHIPS</a>
              <a href="#contact" className="hover:underline">CONTACT</a>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">Powered by Blockbridge</div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;