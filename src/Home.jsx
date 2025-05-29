
const HomePage = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="/web3-pattern.png" 
            alt="Web3 pattern background"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Empowering Web3 Innovation</h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8">
            Building decentralized solutions that solve real-world problems and accelerate blockchain adoption.
          </p>
          <button className="bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition duration-200">
            Explore Our Solutions
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* About Us Section */}
        <section id="about-us" className="space-y-6">
          <div className="flex items-center mb-8">
            <div className="h-1 bg-blue-600 w-16 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">About Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Startups Web3, powered by BlockBridge, is a cutting-edge Web3 technology and digital marketing company. 
                We are dedicated to building decentralized solutions that solve real-world problems and accelerate blockchain adoption.
              </p>
              <p className="text-lg mb-6">
                As a premier Web3 startup accelerator and development partner, we create powerful decentralized applications (dApps) 
                and scalable smart contract systems tailored for industries such as finance, agriculture, and digital security.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
              <img
                src="/about-us-image.jpg" 
                alt="Team working on blockchain technology"
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative h-80 rounded-xl overflow-hidden shadow-lg order-last md:order-first">
              <img
                src="/hackathon-image.jpg" 
                alt="Hackathon participants collaborating"
                layout="fill"
                objectFit="cover"
                className="transition duration-500 hover:scale-105"
              />
            </div>
            <div>
              <p className="text-lg mb-6">
                Through our hackathons and makathons, we bring together creative minds to build the next generation of decentralized applications. 
                These events foster a culture of rapid prototyping, collaboration, and disruptive thinking within the Web3 ecosystem.
              </p>
              <p className="text-lg">
                We believe the future of Web3 starts with education. That's why we support student innovation through comprehensive blockchain training, 
                hands-on workshops, and startup incubation programs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Vision Section */}
        <section id="our-vision" className="relative bg-blue-900 text-white p-12 rounded-xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/vision-pattern.png" 
              alt="Vision pattern background"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center mb-6">
              <div className="h-1 bg-white w-16 mr-4"></div>
              <h2 className="text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-xl max-w-3xl">
              By 2030, our vision is to become a leader in Web3 development and AI integration, 
              enabling India and the world to shift toward a more transparent, decentralized internet.
            </p>
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Decentralized Future</h3>
                <p>Empowering individuals through blockchain technology</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                <p>Creating solutions that transcend borders</p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
                <p>Leading Web3 research and development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section id="our-mission" className="space-y-6">
          <div className="flex items-center mb-8">
            <div className="h-1 bg-blue-600 w-16 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <img 
                    src="/build-icon.svg" 
                    alt="Build icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-700">Build</h3>
              </div>
              <p className="text-lg">
                Robust decentralized applications that solve real-world problems across industries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <img
                    src="/foster-icon.svg" 
                    alt="Foster icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-700">Foster</h3>
              </div>
              <p className="text-lg">
                Web3 adoption by bridging traditional platforms with decentralized technologies.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <img 
                    src="/enable-icon.svg" 
                    alt="Enable icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-700">Enable</h3>
              </div>
              <p className="text-lg">
                Deep blockchain research through dedicated labs and innovation centers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-600 hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <img 
                    src="/support-icon.svg" 
                    alt="Support icon"
                    width={24}
                    height={24}
                  />
                </div>
                <h3 className="text-xl font-semibold text-blue-700">Support</h3>
              </div>
              <p className="text-lg">
                Startups scaling in Web3 and AI with strategic guidance and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section id="why-work-with-us" className="space-y-6">
          <div className="flex items-center mb-8">
            <div className="h-1 bg-blue-600 w-16 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Why Work With Us</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <img 
                    src="/strategy-icon.svg" 
                    alt="Strategy icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Strategic Planning</h3>
                  <p className="text-gray-600">Web solutions aligned with your vision and business goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <img
                    src="/delivery-icon.svg" 
                    alt="Delivery icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">Agile execution for fast time-to-market without compromising quality</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <img 
                    src="/security-icon.svg" 
                    alt="Security icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Architecture</h3>
                  <p className="text-gray-600">Future-ready platforms with built-in scalability and security</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4 flex-shrink-0">
                  <img 
                    src="/testing-icon.svg" 
                    alt="Testing icon"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rigorous Testing</h3>
                  <p className="text-gray-600">Performance-focused development to minimize bugs and vulnerabilities</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gray-50 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-4">Our Technology Stack</h3>
                <p className="text-lg mb-6">
                  We leverage a powerful combination of traditional and Web3 technologies to build secure, 
                  scalable, and future-ready digital solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <img 
                      src="/ethereum-logo.svg" 
                      alt="Ethereum"
                      width={80}
                      height={30}
                    />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <img 
                      src="/polygon-logo.svg" 
                      alt="Polygon"
                      width={80}
                      height={30}
                    />
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <img 
                      src="/solidity-logo.svg" 
                      alt="Solidity"
                      width={80}
                      height={30}
                    />
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <img
                  src="/tech-stack-image.jpg" 
                  alt="Technology stack"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnerships Section */}
        <section id="strategic-partnerships" className="space-y-6">
          <div className="flex items-center mb-8">
            <div className="h-1 bg-blue-600 w-16 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Strategic Partnerships</h2>
          </div>
          
          <div className="bg-blue-50 p-12 rounded-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <img
                src="/partnerships-pattern.svg" 
                alt="Partnerships pattern"
                width={300}
                height={300}
              />
            </div>
            <div className="relative z-10">
              <p className="text-xl mb-8 max-w-3xl">
                We believe that collaboration is the key to meaningful innovation. We co-create ecosystems 
                with partners who share our vision for a decentralized future.
              </p>
              <p className="text-xl mb-10 max-w-3xl">
                Whether you're a blockchain protocol, digital product studio, or tech enterprise — 
                we're ready to build, together.
              </p>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-6 text-gray-700">Our Partners</h4>
                <div className="flex flex-wrap gap-8 items-center">
                  <img
                    src="/partner1-logo.svg" 
                    alt="Partner 1"
                    width={120}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                  <img 
                    src="/partner2-logo.svg" 
                    alt="Partner 2"
                    width={120}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                  <img 
                    src="/partner3-logo.svg" 
                    alt="Partner 3"
                    width={120}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                  <img 
                    src="/partner4-logo.svg" 
                    alt="Partner 4"
                    width={120}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="space-y-6">
          <div className="flex items-center mb-8">
            <div className="h-1 bg-blue-600 w-16 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg mb-8">
                Let's identify the core of your challenge and develop a roadmap to achieve your desired outcome.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <img 
                      src="/email-icon.svg" 
                      alt="Email icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:info@startupsweb3.com" className="text-blue-600 hover:underline">
                      info@startupsweb3.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <img 
                      src="/phone-icon.svg" 
                      alt="Phone icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+1234567890" className="text-blue-600 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <img 
                      src="/location-icon.svg" 
                      alt="Location icon"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p>123 Web3 Street, Blockchain City, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden h-96">
              <img 
                src="/contact-image.jpg" 
                alt="Contact us"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;