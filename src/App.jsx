import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Purpose from './components/Purpose';
import Services from './components/Services';
import Partnerships from './components/Partnerships';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-cream min-h-screen ">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Hero />
      <About />
      <Purpose />
      <Services />
      <Partnerships />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;