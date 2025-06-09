import React from "react";
import {Rocket} from "lucide-react"

export default function Footer() {
  return (
     <footer className="bg-gray-700 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Rocket className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Startups Web3</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 Startups Web3. Powered by BlockBridge.</p>
              <p className="text-sm mt-1">Shaping the Future of Decentralized Innovation</p>
            </div>
          </div>
        </div>
      </footer>
  );
}