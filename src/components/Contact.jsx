import React from 'react';

const ContactUs = () => {
  return (
    <div id='contact' className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Side: Contact Info */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>

          <p className="text-xl text-gray-600 mb-8">
            Ready to build the future of Web3? Let's connect!
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
            Get in Touch
          </h2>

          <div className="space-y-6">
            <div className="flex">
              <div className="w-32 font-bold text-gray-800">Email</div>
              <div className="text-gray-600">info@startupsweb3.com</div>
            </div>

            <div className="flex border-t border-gray-100 pt-4">
              <div className="w-32 font-bold text-gray-800">Phone</div>
              <div className="text-gray-600">+971 50 123 4567</div>
            </div>

            <div className="flex border-t border-gray-100 pt-4">
              <div className="w-32 font-bold text-gray-800">Address</div>
              <div className="text-gray-600">Downtown Dubai, UAE</div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 lg:mt-16">
          <img 
            src="/assets/images/contact.jpg"
            alt="Web3 technology concept"
            className="rounded-lg w-full h-auto object-cover shadow-md"
            style={{ maxHeight: "500px" }}
          />
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;
