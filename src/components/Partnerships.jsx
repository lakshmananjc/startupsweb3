import React from 'react';

const StrategicPartners = () => {
  const partners = [
    {
      name: 'Cardano Foundation',
      description: 'Driving purpose-driven blockchain adoption',
    },
    {
      name: 'India Blockchain Alliance',
      description: 'Promoting blockchain policy and education',
    },
    {
      name: 'David Protocol',
      description: 'Decentralized insurance for digital assets',
    },
    {
      name: 'DailyGurus',
      description: 'Blockchain farm-to-fork supply chain',
    },
    {
      name: 'Outreach Network',
      description: 'Web3 awareness in student communities',
    },
    {
      name: 'Web3 Builders',
      description: 'Global community of investors and founders',
    },
  ];

  return (
    <section id="partnerships" className="relative bg-gray-100 py-20 px-6">
      {/* Optional background image */}
      <div className="absolute inset-0 opacity-10 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('/images/collaboration-bg.jpg')` }}></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Collaborative Ecosystem & Strategic Partners</h2>
        <p className="text-lg mb-12 max-w-2xl mx-auto">
          Collaboration fuels innovation. We partner with key ecosystem players to build scalable Web3 solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, idx) => (
            <div
              key={idx}
              className="bg-amber p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicPartners;
