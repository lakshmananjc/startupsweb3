import React from 'react';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Clock, Shield, TestTube, Code, Globe, Cloud, Database, Palette } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">Why Work with Us?</h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="pt-6">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Strategic Planning</h3>
              <p className="text-sm text-gray-600">Web solutions aligned with your vision</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Timely Delivery</h3>
              <p className="text-sm text-gray-600">Agile execution for fast time-to-market</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Secure Architecture</h3>
              <p className="text-sm text-gray-600">Future-ready platforms with built-in scalability</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-6">
              <TestTube className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Rigorous Testing</h3>
              <p className="text-sm text-gray-600">Performance-focused development to minimize bugs</p>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Code className="w-8 h-8 text-pink-600 mr-3" />
              <h3 className="text-2xl font-bold text-pink-600">Our Tech Stack</h3>
            </div>
            <p className="text-gray-600">
              We leverage a powerful combination of traditional and Web3 technologies to build secure, scalable, and
              future-ready digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-purple-600" />
                Blockchain Technologies:
              </h4>
              <p className="text-sm text-gray-600">
                Ethereum, Solana, Polygon, Hyperledger, Cardano, IPFS, Web3.js, Ethers.js
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-600" />
                Languages & Frameworks:
              </h4>
              <p className="text-sm text-gray-600">PHP, .NET, React.js, Vue.js, Laravel, CodeIgniter</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Cloud className="w-5 h-5 mr-2 text-purple-600" />
                Cloud Platforms:
              </h4>
              <p className="text-sm text-gray-600">AWS, Azure, Google Cloud</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-purple-600" />
                CMS & Tools:
              </h4>
              <p className="text-sm text-gray-600">WordPress, Drupal, Contentful</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Palette className="w-5 h-5 mr-2 text-purple-600" />
                Design Stack:
              </h4>
              <p className="text-sm text-gray-600">HTML, CSS, JavaScript, Adobe XD</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center">
                <Database className="w-5 h-5 mr-2 text-purple-600" />
                Databases:
              </h4>
              <p className="text-sm text-gray-600">MySQL, MongoDB, Oracle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;