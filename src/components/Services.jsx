import React, { useState } from 'react';

const tabs = [
  {
    key: 'web3-dev',
    label: 'Web3 Development',
    image: '/assets/images/web3-dev.jpg',
    description: (
      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          We build scalable, secure, and cost-effective decentralized applications (dApps) with a focus on low gas fees and high performance. From idea to launch, our team handles full-stack blockchain development using modern Web3 tools.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Smart contract development (Solidity, Vyper)</li>
          <li>dApp architecture and frontend integration (React, Next.js, Ethers.js)</li>
          <li>Gas optimization on Ethereum, Polygon, Arbitrum, and BNB Chain</li>
          <li>NFT marketplaces, DeFi protocols, and DAOs</li>
          <li>Token launches (ERC-20, ERC-721, ERC-1155 standards)</li>
          <li>Wallet integrations (MetaMask, WalletConnect, Coinbase Wallet)</li>
          <li>Security audits and testnet deployment</li>
        </ul>
        <p>
          Whether you're launching a DeFi protocol, NFT platform, or utility token, we turn your Web3 vision into a production-ready product.
        </p>
      </div>
    ),
  },
  {
    key: 'hackathon',
    label: 'Hackathon & Makeathon',
    image: '/assets/images/hackathon.jpg',
    description: (
      <div className="text-gray-700 space-y-4 text-lg">
        <p>We organize and power high-impact Web3 hackathons like DevsHouse and Hackhub.</p>
        <ul className="list-disc list-inside space-y-2">
          <li>300+ developers & innovators at each event</li>
          <li>Partnerships with VIT, SRM, and leading incubators</li>
          <li>Tracks across DeFi, DAOs, NFTs, and more</li>
          <li>Industry mentors, workshops, and prize pools</li>
          <li>Live deployment & judging on GitHub and Web3 platforms</li>
        </ul>
        <p>Experience the innovation at Hackhub VIT and DevsHouse — photos below showcase the energy.</p>
      </div>
    ), 
    gallery: [
      '/assets/images/hackathon1.jpg',
      '/assets/images/hackathon2.jpg',
      '/assets/images/hackathon3.jpg',
      '/assets/images/hackathon4.jpg',
      '/assets/images/hackathon5.jpg',
      '/assets/images/hackathon6.jpg',
      '/assets/images/hackathon7.jpg',
      '/assets/images/hackathon8.jpg',
      '/assets/images/hackathon9.jpg',
      '/assets/images/hackathon10.jpg',
      '/assets/images/hackathon11.jpg',
      '/assets/images/hackathon12.jpg',
      '/assets/images/hackathon13.jpg',
      '/assets/images/hackathon14.jpg',
      '/assets/images/hackathon15.jpg',
      '/assets/images/hackathon16.jpg',
      '/assets/images/hackathon17.mp4',
      '/assets/images/hackathon18.jpg',
    ]
  },
  {
  key: 'startup-support',
  label: 'Startup Support',
  image: '/assets/images/startup.jpg',
  description: (
    <div className="space-y-4 text-gray-700 text-lg">
      <p>
        We empower early-stage Web3 startups through a comprehensive support system — from ideation and MVP development to go-to-market strategy.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <li>Incubation & mentorship with experienced Web3 founders</li>
        <li>Product validation, user interviews, and iterative MVP building</li>
        <li>Fundraising support (pitch decks, investor matchmaking)</li>
        <li>Smart contract and dApp development assistance</li>
        <li>Compliance and legal guidance tailored to Web3 regulations</li>
        <li>Go-to-market (GTM) planning and growth hacking support</li>
        <li>Access to our partner network of VCs, accelerators, and tech labs</li>
      </ul>
    </div>
  )
}
,
  {key: 'education',
    label: 'Web3 Education',
    image: 'assets/images/education.jpg',
    description: (
      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          We lead impactful Web3 education initiatives in academic institutions and communities to build the next generation of blockchain innovators.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Workshops and seminars at Ramakrishna College and SRM University</li>
          <li>Intro to Blockchain, Smart Contracts, and dApps</li>
          <li>Hands-on sessions with Solidity, Ethereum, and IPFS</li>
          <li>Hackathons and bootcamps for university students</li>
          <li>Web3 curriculum development and faculty onboarding</li>
          <li>Access to project grants and internship pathways</li>
          <li>Certification programs for beginner to advanced learners</li>
        </ul>
      </div>
    ),
     gallery: [
      '/assets/images/web3edu1.jpg',
      '/assets/images/web3edu2.jpg',
      '/assets/images/web3edu3.jpg',
      '/assets/images/web3edu4.jpg',
      '/assets/images/web3edu5.jpg',
      '/assets/images/web3edu6.jpg',
      '/assets/images/web3edu7.jpg'
     ]
  },
  {
    key: 'lab-research',
    label: 'Blockchain Lab & Research',
    image: '/assets/images/blockchain2.jpg',
    description: (
      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          In collaboration with Kalp Studio, we run an advanced Blockchain Lab focused on cutting-edge research, protocol design, and decentralized innovation.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Developing novel blockchain consensus mechanisms and scalability solutions</li>
          <li>Researching interoperability between public and private blockchains</li>
          <li>Exploring privacy-preserving technologies like zk-SNARKs and secure multi-party computation</li>
          <li>Prototyping decentralized governance models and DAOs for real-world applications</li>
          <li>Publishing whitepapers and open-source toolkits for developer communities</li>
          <li>Hosting collaborative workshops, hackathons, and ideation sessions with industry leaders</li>
          <li>Supporting startups with technical research and feasibility assessments</li>
        </ul>
        <p>
          Our partnership with Kalp Studio accelerates the advancement of blockchain technology through rigorous experimentation and community-driven innovation.
        </p>
      </div>
    )
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('web3-dev');

  return (
    <section className="py-20 bg-cream" id="why-work-with-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600">What We Do</h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto my-4"></div>
          <p className="text-gray-600">Explore our core offerings designed to empower the Web3 ecosystem.</p>
        </div>

        {/* Tab Headers */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full border transition-all ${activeTab === tab.key
                ? 'bg-pink-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {tabs.map(tab => (
          activeTab === tab.key && (
            <div key={tab.key}>
              {/* Main content grid */}
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full h-auto rounded-xl shadow-md"
                />
                <div>
                  <h3 className="text-2xl font-semibold text-pink-600 mb-4">{tab.label}</h3>
                  {typeof tab.description === 'string' ? (
                    <p className="text-gray-700 text-lg whitespace-pre-line">{tab.description}</p>
                  ) : (
                    tab.description
                  )}
                </div>
              </div>

              {/* Media Gallery */}
              {tab.gallery && (
                <div className="mt-10">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Event Gallery</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {tab.gallery.map((media, index) => {
                      const isVideo = media.endsWith('.mp4');
                      return isVideo ? (
                        <video
                          key={index}
                          src={media}
                          controls
                          className="w-full h-48 object-cover rounded shadow"
                        />
                      ) : (
                        <img
                          key={index}
                          src={media}
                          alt={`Gallery item ${index + 1}`}
                          className="w-full h-48 object-cover rounded shadow"
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        ))}

      </div>
    </section>
  );
};

export default Services;
