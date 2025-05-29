import React from 'react';
import { Eye, Target, CheckCircle } from 'lucide-react';

const Purpose = () => {
  return (
    <section id="purpose" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">Our Purpose</h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our purpose drives everything we do - from our vision for the future to our mission in the present.
          </p>
        </div>

        {/* Vision Subsection */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Eye className="w-8 h-8 text-blue-500 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-blue-600">Our Vision</h3>
            </div>
            <div className="w-12 h-1 bg-blue-500 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">
              <strong>Leading the Web3 Transition</strong> By 2030, our vision is to become a leader in{" "}
              <strong>Web3 development and AI integration</strong>, enabling India and the world to shift toward a
              more <strong>transparent, decentralized internet</strong>.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src="/assets/images/vision-graphic.png"
              alt="Leading the Web3 Transition - Empowering India through Decentralization and AI by 2030"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission Subsection */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-pink-600 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-pink-600">Our Mission</h3>
            </div>
            <div className="w-12 h-1 bg-pink-600 mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">We are on a mission to empower Web3 and AI innovators by:</p>
            <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto">
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Building decentralized platforms with real impact</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Advancing blockchain research through dedicated labs</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Supporting early-stage Web3 startups</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-600">Bridging talent and opportunity through strategic mentorship</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src="/assets/images/mission-infographic.png"
              alt="Mission-Driven Innovation"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purpose;