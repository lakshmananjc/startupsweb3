import React from 'react';
import { Users } from 'lucide-react';

const Partnerships = () => {
  return (
    <section id="partnerships" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-yellow-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600">
              Collaborative Ecosystem & Strategic Partners
            </h2>
          </div>
          <div className="w-16 h-1 bg-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 mb-8 text-center">
            We believe <strong>collaboration fuels innovation</strong>. That's why we work closely with ecosystem
            partners to build scalable, impactful Web3 solutions.
          </p>

          <h3 className="text-xl font-semibold mb-6 text-gray-700">Trusted Collaborations:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">Cardano Foundation</h4>
                <p className="text-gray-600">– Advancing purpose-driven blockchain adoption</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">India Blockchain Alliance</h4>
                <p className="text-gray-600">– Advocating blockchain policy and education</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">David Protocol</h4>
                <p className="text-gray-600">– Decentralized insurance for digital assets</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800">DailyGurus</h4>
                <p className="text-gray-600">– Blockchain-powered farm-to-fork supply chain</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Outreach Network</h4>
                <p className="text-gray-600">– Driving Web3 awareness in student communities</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Web3 Builders</h4>
                <p className="text-gray-600">– A global community of investors and founders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;