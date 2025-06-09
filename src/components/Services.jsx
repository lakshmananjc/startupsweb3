"use client"

import { useState } from "react"
import {
  Code,
  Zap,
  Users,
  GraduationCap,
  Brain,
  Shield,
  CheckCircle,
  DollarSign,
  Scale,
  Plane,
  Network,
  FileText,
} from "lucide-react"

const Services = () => {
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)

  return (
    <div id="services" className="bg-gray-100">
      {/* What We Do Overview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-12">What We Do</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-4 rounded-lg">
                    <Code className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Web3 Development</h3>
                    <p className="text-gray-600">Building scalable dApps and smart contracts</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-4 rounded-lg">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Hackathons & Makeathons</h3>
                    <p className="text-gray-600">Driving innovation through collaboration</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-4 rounded-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Startup Support</h3>
                    <p className="text-gray-600">Empowering early-stage Web3 ventures</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-4 rounded-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Web3 Education</h3>
                    <p className="text-gray-600">Training tomorrow's blockchain talent</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-4 rounded-lg">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Blockchain Research</h3>
                    <p className="text-gray-600">Expanding decentralized technology frontiers</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-gray-700 text-lg">Core services powering the Web3 ecosystem.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <img
                  src='assets/images/web3-dev.jpg'
                  alt="Web3 Ecosystem Visualization"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Development Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8">Web3 Development</h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Contract Development</h3>
                  <p className="text-gray-700">Secure Solidity and Vyper solutions</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">dApp Architecture & Frontend</h3>
                  <p className="text-gray-700">Intuitive interfaces with React and Ethers.js</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Multi-Chain Gas Optimization</h3>
                  <p className="text-gray-700">Cost-efficient cross-network solutions</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Specialized Platforms</h3>
                  <p className="text-gray-700">NFT, DeFi, and DAO implementations</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Token Standards Implementation</h3>
                  <p className="text-gray-700">Custom ERC-20, 721, and 1155 tokens</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Wallet Integration</h3>
                  <p className="text-gray-700">Seamless major wallet connectivity</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700">
                  High-performance, optimized dApps built with advanced Web3 tools from concept to launch.
                </p>
                <p className="text-gray-700">Turning ideas into production-ready blockchain solutions.</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 rounded-lg h-96 flex items-center justify-center overflow-hidden">
                <div className="text-6xl font-bold text-white opacity-80">WEB 3.0</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon & Makeathon Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Hackathon & Makeathon</h2>
            <p className="text-xl text-gray-700">
              We organize and power high-impact Web3 hackathons like DevsHouse and Hackhub.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg h-48 mb-6 overflow-hidden">
                <img
                  src="/assets/images/hackathon1.jpg"
                  alt="Developers Working"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">300+ Developers & Innovators</h3>
              <p className="text-gray-600">
                Our events attract hundreds of passionate blockchain enthusiasts working together to build the future of
                Web3.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg h-48 mb-6 overflow-hidden">
                <img
                  src="/assets/images/hackathon2.jpg"
                  alt="Academic Partners"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">3+ Academic Partners</h3>
              <p className="text-gray-600">
                Collaborations with top institutions like VIT, SRM, and leading incubators create powerful innovation
                hubs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg h-48 mb-6 overflow-hidden">
                <img
                  src="/assets/images/hackathon3.jpg"
                  alt="Innovation Tracks"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">4+ Innovation Tracks</h3>
              <p className="text-gray-600">
                Participants explore cutting-edge domains including DeFi, DAOs, NFTs, and emerging Web3 technologies.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg h-48 mb-6 overflow-hidden">
                <img src="/assets/images/hackathon4.jpg" alt="DevsHouse Event" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">DevsHouse & Hackhub</h3>
              <p className="text-gray-600">
                Experience the innovation and energy of our flagship events that drive the future of decentralized
                technology.
              </p>
            </div>
          </div>

          {/* Event Gallery */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">Event Gallery</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "/assets/images/hackathon5.jpg",
                "/assets/images/hackathon6.jpg",
                "/assets/images/hackathon7.jpg",
                "/assets/images/hackathon8.jpg",
                "/assets/images/hackathon9.jpg",
                "/assets/images/hackathon10.jpg",
                "/assets/images/hackathon11.jpg",
                "/assets/images/hackathon12.jpg",
                "/assets/images/hackathon13.jpg",
                "/assets/images/hackathon14.jpg",
                "/assets/images/hackathon15.jpg",
                "/assets/images/hackathon16.jpg",
              ].map((image, index) => (
                <div key={index} className="relative group cursor-pointer">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Hackathon ${index + 5}`}
                    className="w-full h-32 object-cover rounded-lg transition-transform group-hover:scale-105"
                    onClick={() => setSelectedGalleryImage(image)}
                  />
                  <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Startup Support Section */}
      <section className="py-20 bg-cream-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg h-96 overflow-hidden">
                <img
                  src="/assets/images/startup1.jpg"
                  alt="Startup Presentation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-8">Startup Support</h2>
              <p className="text-xl text-gray-700 mb-12">
                We empower Web3 startups from ideation to market through our comprehensive support ecosystem.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Brain className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Incubation & mentorship</h3>
                </div>

                <div className="text-center">
                  <CheckCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Product validation & MVP</h3>
                </div>

                <div className="text-center">
                  <DollarSign className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Fundraising & investor access</h3>
                </div>

                <div className="text-center">
                  <Code className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Smart contract development</h3>
                </div>

                <div className="text-center">
                  <Scale className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Compliance & legal guidance</h3>
                </div>

                <div className="text-center">
                  <Plane className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Go-to-market strategies</h3>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Network className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-800">Partner network access</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web3 Education Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-8">Web3 Education</h2>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Foundational Knowledge</h3>
                <p className="text-gray-600">Blockchain and Smart Contract essentials</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Practical Skills</h3>
                <p className="text-gray-600">Hands-on Solidity and Ethereum training</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Community Building</h3>
                <p className="text-gray-600">Student hackathons and bootcamps</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Certification</h3>
                <p className="text-gray-600">From beginner to advanced levels</p>
              </div>
            </div>

            <p className="text-xl text-gray-700 mb-12">
              Developing blockchain talent through targeted education in academic institutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg h-48 mb-4 overflow-hidden">
                  <img
                    src="/assets/images/web3edu1.jpg"
                    alt="Academic Partners"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Academic Partners</h3>
                <p className="text-gray-600">Programs at Ramakrishna College and SRM</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg h-48 mb-4 overflow-hidden">
                  <img
                    src="/assets/images/web3edu2.jpg"
                    alt="Faculty Training"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Faculty Training</h3>
                <p className="text-gray-600">Web3 curriculum design and development</p>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg h-48 mb-4 overflow-hidden">
                  <img src="/assets/images/web3edu3.jpg" alt="Career Growth" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Career Growth</h3>
                <p className="text-gray-600">Project grants and internship placements</p>
              </div>
            </div>

            {/* Education Gallery */}
            <div className="mt-16">
              <h4 className="text-2xl font-bold text-gray-800 mb-8">Education Gallery</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "/assets/images/web3edu4.jpg",
                  "/assets/images/web3edu5.jpg",
                  "/assets/images/web3edu6.jpg",
                  "/assets/images/web3edu7.jpg",
                ].map((image, index) => (
                  <div key={index} className="relative group cursor-pointer">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Education ${index + 4}`}
                      className="w-full h-32 object-cover rounded-lg transition-transform group-hover:scale-105"
                      onClick={() => setSelectedGalleryImage(image)}
                    />
                    <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-lg"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Lab & Research Section */}
      <section className="py-20 bg-cream-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Blockchain Lab & Research</h2>
            <p className="text-xl text-gray-700">
              Our Blockchain Lab with Kalp Studio explores cutting-edge protocols and decentralized innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/assets/images/research.jpg"
                  alt="Blockchain Research"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Research</h3>
              <p className="text-purple-100">Developing new consensus mechanisms and scalability solutions</p>
            </div>

            <div className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-lg p-6">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/assets/images/design.jpg"
                  alt="Blockchain Research"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Design</h3>
              <p className="text-purple-100">Advancing privacy technologies like zk-SNARKs and secure computation</p>
            </div>

            <div className="bg-gradient-to-br from-purple-700 to-pink-600 rounded-lg p-6">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/assets/images/prototype.jpg"
                  alt="Blockchain Research"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Prototype</h3>
              <p className="text-purple-100">Building decentralized governance models and DAOs for practical use</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg p-6">
              {/* Image Section */}
              <div className="h-48 bg-gradient-to-br from-purple-400 to-blue-500 rounded-lg mb-4 overflow-hidden">
                <img
                  src="/assets/images/whitepaper.jpg"
                  alt="Blockchain Research"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Text Section */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Whitepaper</h3>
                <p className="text-purple-100">Research Publications</p>
              </div>
            </div>


            <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-lg p-6">
              <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                <img
                  src="/assets/images/blockchain2.jpg"
                  alt="Blockchain Research"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Develop</h3>
                <p className="text-purple-100">Developing novel blockchain consensus mechanisms and scalability solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedGalleryImage || "/placeholder.svg"}
              alt="Gallery"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70"
              onClick={() => setSelectedGalleryImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Services
