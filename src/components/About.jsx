import { Rocket, Zap, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About us</h2>
            <div className="w-24 h-1 bg-pink-600 mx-auto mb-8"></div>

            <h3 className="text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Startups Web3 | Shaping the Future of Decentralized Innovation
            </h3>

            <div className="max-w-5xl mx-auto text-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                <span className="font-semibold text-gray-800">Startups Web3</span>, an initiative powered by{" "}
                <span className="font-semibold text-gray-800">BlockBridge</span>, is a cutting-edge{" "}
                <span className="font-semibold text-gray-800">Web3 technology and digital marketing company</span>.
              </p>
              <p>
                We are dedicated to building decentralized solutions that solve real-world problems and accelerate
                blockchain adoption.
              </p>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Real-World Blockchain Solutions */}
            <div className="bg-amber rounded-xl shadow-lg p-8 border-l-4 border-purple-600">
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Real-World Blockchain Solutions</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                As a premier Web3 startup accelerator and development partner, we create powerful decentralized
                applications (dApps) and scalable smart contract systems tailored for industries such as finance,
                agriculture, and digital security.
              </p>
            </div>

            {/* Web3 Hackathons & Innovation Labs */}
            <div className="bg-amber rounded-xl shadow-lg p-8 border-l-4 border-pink-600">
              <div className="flex items-center mb-4">
                <Zap className="h-8 w-8 text-pink-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Web3 Hackathons & Innovation Labs</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Through our <span className="font-semibold">hackathons and makathons</span>, we bring together creative
                minds to build the next generation of decentralized applications. These events foster a culture of rapid
                prototyping, collaboration, and disruptive thinking within the Web3 ecosystem.
              </p>
            </div>

            {/* Educating and Empowering Future Innovators */}
            <div className="bg-amber rounded-xl shadow-lg p-8 border-l-4 border-blue-600 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-800">Educating and Empowering Future Innovators</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We are committed to advancing Web3 through comprehensive student innovation programs, blockchain
                training workshops, and startup incubation initiatives that prepare the next generation of decentralized
                technology leaders.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
}