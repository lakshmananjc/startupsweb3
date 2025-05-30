import { Rocket, Globe, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">About us</h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Startups Web3 | Shaping the Future of Decentralized Innovation
          </h3>

          <p className="text-lg mb-8 text-gray-600 text-center">
            <strong>Startups Web3</strong>, an initiative powered by <strong>BlockBridge</strong>, is a cutting-edge{' '}
            <strong>Web3 technology and digital marketing company</strong>. We are dedicated to building decentralized
            solutions that solve real-world problems and accelerate blockchain adoption.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div>
              <div className="flex items-center mb-4">
                <Rocket className="w-6 h-6 text-pink-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Real-World Blockchain Solutions</h4>
              </div>
              <p className="text-gray-600">
                As a premier Web3 startup accelerator and development partner, we create powerful decentralized
                applications (dApps) and scalable smart contract systems tailored for industries such as finance,
                agriculture, and digital security.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-pink-600 mr-3" />
                <h4 className="text-xl font-semibold text-gray-800">Web3 Hackathons & Innovation Labs</h4>
              </div>
              <p className="text-gray-600">
                Through our <strong>hackathons and makathons</strong>, we bring together creative minds to build the
                next generation of decentralized applications. These events foster a culture of rapid prototyping,
                collaboration, and disruptive thinking within the Web3 ecosystem.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center mb-4">
              <Users className="w-6 h-6 text-pink-600 mr-3" />
              <h4 className="text-xl font-semibold text-gray-800">Educating and Empowering Future Innovators</h4>
            </div>
            <p className="text-gray-600">
              We believe the future of Web3 starts with education. That's why we support{' '}
              <strong>student innovation</strong> through comprehensive blockchain training, hands-on workshops, and
              startup incubation programs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}