import { Eye, Target, Zap, Brain, Users, Network, Rocket, Code, Shield } from 'lucide-react';

const Purpose = () => {
  return (
    <section id="purpose" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Purpose</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Our purpose drives everything we do - from our vision for the future to our mission in the present.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-400 p-8 rounded-xl h-64 flex flex-col items-center justify-center text-center shadow-lg">
              <Rocket className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Purpose</h3>
              <p className="text-purple-100">Guiding principles</p>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-purple-500 hidden md:block">
              <div className="w-8 h-8 border-t-4 border-r-4 border-purple-500 transform rotate-45"></div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-400 p-8 rounded-xl h-64 flex flex-col items-center justify-center text-center shadow-lg">
              <Eye className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Vision</h3>
              <p className="text-purple-100">Future aspirations</p>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-purple-500 hidden md:block">
              <div className="w-8 h-8 border-t-4 border-r-4 border-purple-500 transform rotate-45"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-400 p-8 rounded-xl h-64 flex flex-col items-center justify-center text-center shadow-lg">
            <Target className="h-12 w-12 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Mission</h3>
            <p className="text-purple-100">Present actions</p>
          </div>
        </div>
      </div>
      {/* Our Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600">We empower Web3 and AI innovators by:</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
              <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/impact-platform.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Building impactful platforms</h3>
              <p className="text-gray-600">Creating solutions that address real-world problems</p>
            </div>

            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
             <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/blockchain.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Advancing blockchain research</h3>
              <p className="text-gray-600">Expanding blockchain technology possibilities</p>
            </div>

            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
               <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/startup1.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Supporting Web3 startups</h3>
              <p className="text-gray-600">Providing resources, mentorship, and infrastructure</p>
            </div>

            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
              <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/connect.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Connecting talent with opportunity</h3>
              <p className="text-gray-600">Linking developers to projects and career paths</p>
            </div>
          </div>
        </div>
      </section>
      {/* Our Vision Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Vision</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
               <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/web.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Leading the Web3 Transition</h3>
              <p className="text-gray-600">
                By 2030, we aim to lead the global shift to Web3, setting new benchmarks for decentralized applications.
              </p>
            </div>

            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
              <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/ai.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Web3 Development & AI Integration</h3>
              <p className="text-gray-600">
                We pursue technical innovation by combining AI with blockchain to create powerful next-gen solutions.
              </p>
            </div>

            <div className="text-center bg-amber rounded-xl p-8 shadow-lg">
              <div className="rounded-xl h-32 mb-6 flex items-center justify-center overflow-hidden bg-gray-100">
                <img
                  src="/assets/images/TECHNOLOGY.jpg" 
                  alt="Impact Icon"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Transparent, Decentralized Internet</h3>
              <p className="text-gray-600">
                We envision global transformation through an open internet ecosystem built on decentralized technologies
                accessible to all.
              </p>
            </div>
          </div>
          <div className="text-center bg-amber rounded-xl p-8 shadow-lg max-w-6xl mx-auto">
            <p className="text-xl text-gray-700 font-medium">
              By 2030, we'll spearhead the Web3 transition through AI-blockchain integration, accelerating global
              adoption of a transparent, decentralized internet.
            </p>
          </div>
        </div>
      </section>
    </section>

  );
};

export default Purpose;