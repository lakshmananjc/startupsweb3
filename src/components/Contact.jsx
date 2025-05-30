import React, { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    setStatus('Sending...');

    const response = await fetch('https://formspree.io/f/yourFormID', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: data,
    });

    if (response.ok) {
      setStatus('Thanks for your message!');
      form.reset();
    } else {
      setStatus('Oops! Something went wrong.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pink-600">Contact Us</h2>
          <div className="w-16 h-1 bg-pink-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600">Ready to build the future of Web3? Let's connect!</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start gap-4">
                <Mail className="text-pink-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@startupsweb3.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-pink-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+971 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-pink-600" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p>Downtown Dubai, UAE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                Name
              </label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                Email
              </label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                Message
              </label>
              <Textarea id="message" name="message" rows="5" required />
            </div>
            <Button type="submit" className="bg-pink-600 text-white hover:bg-pink-700">
              Send Message
            </Button>
            {status && <p className="text-sm text-center text-gray-600">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
