import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook,
  Music, 
  Utensils, 
  Users,
  Calendar,
  Clock,
  MessageSquare,
  ExternalLink
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Visit', href: '#visit' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/95 backdrop-blur-md py-4 border-b border-gold/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-3xl font-serif tracking-widest text-gold uppercase">Epoch</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#visit" 
            className="px-6 py-2 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-dark transition-all duration-500"
          >
            Visit Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gold" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-gold/10 py-8 md:hidden"
          >
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg uppercase tracking-widest hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#visit" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-8 py-3 border border-gold text-gold text-sm uppercase tracking-widest"
              >
                Visit Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Grain and Gradients */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 gold-gradient opacity-40"></div>
        <div className="absolute inset-0 grain-overlay"></div>
        {/* Cinematic Placeholder Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(142,68,61,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-gold uppercase tracking-[0.3em] text-sm mb-6 block">Batumi, Georgia</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
            Where Georgian Soul <br />
            <span className="italic text-gold/90">Meets Culinary Art</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-light leading-relaxed">
            Experience the warmth of authentic Georgian hospitality in an upscale, cinematic setting. 
            Open tonight · Live entertainment from 8PM.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="https://epoch.ofoodo.com/us/groups" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 bg-gold text-dark uppercase tracking-widest text-sm font-medium hover:bg-white transition-all duration-500"
            >
              Explore the Menu
            </a>
            <a 
              href="#visit" 
              className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-sm font-medium hover:border-gold hover:text-gold transition-all duration-500"
            >
              Visit Us
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent mx-auto"></div>
      </motion.div>
    </section>
  );
};

const ExperienceStrip = () => {
  const items = [
    { icon: <Utensils className="text-gold" />, title: "Authentic Georgian Cuisine" },
    { icon: <Music className="text-gold" />, title: "Live Entertainment Nightly" },
    { icon: <Star className="text-gold" />, title: "World-Class Service" },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center space-x-4">
              {item.icon}
              <span className="uppercase tracking-widest text-xs font-medium text-gray-300">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SignatureDishes = () => {
  const dishes = [
    {
      name: "Khinkali with Meat",
      desc: "Hand-folded dumplings with spiced beef and pork, bursting with aromatic broth.",
      price: "Signature",
      color: "bg-terracotta/20"
    },
    {
      name: "Chicken Kebab",
      desc: "Tender chicken marinated in Georgian spices, grilled over open coals.",
      price: "Premium",
      color: "bg-gold/10"
    },
    {
      name: "Pumpkin Cream Soup",
      desc: "Velvety roasted pumpkin with a hint of ginger and toasted seeds.",
      price: "Guest Favorite",
      color: "bg-terracotta/10"
    },
    {
      name: "Mushrooms with Sulguni",
      desc: "Earthly mushrooms baked in a clay pot with melting Georgian cheese.",
      price: "Classic",
      color: "bg-gold/20"
    },
    {
      name: "Salmon Salad",
      desc: "Freshly seared salmon with crisp greens and a pomegranate reduction.",
      price: "Fresh",
      color: "bg-terracotta/15"
    }
  ];

  return (
    <section id="menu" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.2em] text-xs mb-4 block">The Menu</span>
          <h2 className="text-4xl md:text-6xl font-serif">Signature Creations</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 p-8 border border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className={`w-full aspect-square mb-6 ${dish.color} flex items-center justify-center overflow-hidden`}>
                <div className="w-1/2 h-1/2 rounded-full bg-white/5 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                <span className="text-gold/20 font-serif text-8xl absolute -bottom-4 -right-4 select-none">{idx + 1}</span>
              </div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-serif">{dish.name}</h3>
                <span className="text-gold text-[10px] uppercase tracking-widest border border-gold/30 px-2 py-1">{dish.price}</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed font-light">{dish.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://epoch.ofoodo.com/us/groups" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-2 mx-auto text-gold uppercase tracking-widest text-sm hover:text-white transition-colors"
          >
            <span>View Full Menu</span>
            <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark/80 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full gold-gradient opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-7xl font-serif leading-tight mb-8">
              "A feast for the <br /> 
              <span className="italic text-gold">senses and the soul.</span>"
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-6"
          >
            <span className="text-gold uppercase tracking-widest text-xs">Our Story</span>
            <p className="text-gray-300 text-lg font-light leading-relaxed">
              Born in the heart of Batumi, EPOCH is more than a restaurant—it is a celebration of Georgian heritage. 
              We believe that every meal is a story, and every guest is a part of our family.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our chefs use age-old techniques passed down through generations, combined with the finest local ingredients 
              to create dishes that are both authentic and innovative. Prepared with love and attention to detail, 
              recommended by even the most demanding food connoisseurs.
            </p>
            <div className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-gold"></div>
                <span className="font-serif italic text-xl">The EPOCH Family</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      name: "Elena Petrova",
      text: "Beautiful, stunning interior. We were instantly seated with no waiting. The Pumpkin Cream Soup is legendary!",
      rating: 5
    },
    {
      name: "James Wilson",
      text: "World-class service from Gia. The Chicken Kebab was perfectly grilled. I will be back if I ever come back to Batumi.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      text: "Cinematic atmosphere. The live music adds such a warm vibe. Highly recommended for food lovers.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-xs mb-4 block">Social Proof</span>
          <h2 className="text-4xl md:text-6xl font-serif">Guest Experiences</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white/5 p-10 border border-white/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex space-x-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{review.text}"</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold text-xs font-bold">
                  {review.name[0]}
                </div>
                <span className="text-sm uppercase tracking-widest text-gold">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const LiveEntertainment = () => {
  return (
    <section className="relative py-32 bg-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/music/1920/1080?blur=10')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-dark/80"></div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Music size={48} className="text-gold mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl font-serif mb-6">Every Evening, Live Music <br /> Fills the Air</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg font-light">
            From traditional Georgian polyphony to contemporary jazz, our nightly entertainment 
            creates the perfect ambiance for your dining experience.
          </p>
          <a 
            href="#visit" 
            className="inline-block px-10 py-4 bg-transparent border border-gold text-gold uppercase tracking-widest text-sm hover:bg-gold hover:text-dark transition-all duration-500"
          >
            Visit Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const VisitUs = () => {
  return (
    <section id="visit" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/5 p-8 md:p-16 border border-white/5 relative">
          <div className="absolute top-0 right-0 p-8 opacity-10 hidden md:block">
            <MapPin size={120} className="text-gold" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-gold uppercase tracking-widest text-xs mb-4 block">Information</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Visit EPOCH</h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Experience the finest Georgian cuisine in the heart of Batumi. We look forward to welcoming you.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <MapPin size={20} className="text-gold" />
                  <span className="text-gray-300">20 Airport Hwy, Batumi, Georgia</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-gold" />
                  <span className="text-gray-300">+995 514 030 001</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Clock size={20} className="text-gold" />
                  <span className="text-gray-300">Daily: 10:00 - 00:00</span>
                </div>
              </div>

              <div className="mt-12 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star size={16} className="fill-gold text-gold" />
                  <span className="text-xs uppercase tracking-widest text-gray-400">4.8 Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Music size={16} className="text-gold" />
                  <span className="text-xs uppercase tracking-widest text-gray-400">Live Music</span>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/5 p-8 border border-white/10">
                <h3 className="text-xl font-serif text-gold mb-4">Digital Menu</h3>
                <p className="text-gray-400 text-sm mb-6">Scan our QR code or click below to explore our full selection of authentic dishes.</p>
                <a 
                  href="https://epoch.ofoodo.com/us/groups" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gold hover:text-white transition-colors uppercase tracking-widest text-xs font-bold"
                >
                  <span>Open Menu</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a 
                  href="https://www.facebook.com/Epochrestaurant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/5 p-6 border border-white/10 hover:border-gold/50 transition-all"
                >
                  <Facebook className="text-gold" size={24} />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500">Facebook</span>
                    <span className="text-sm font-medium">Epoch restaurant</span>
                  </div>
                </a>
                <a 
                  href="https://www.instagram.com/restaurant_epoch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/5 p-6 border border-white/10 hover:border-gold/50 transition-all"
                >
                  <Instagram className="text-gold" size={24} />
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-gray-500">Instagram</span>
                    <span className="text-sm font-medium">restaurant_epoch</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 bg-dark border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl font-serif tracking-widest text-gold uppercase mb-2">Epoch</h2>
            <p className="text-gray-500 text-xs uppercase tracking-widest">Where Georgian Soul Meets Culinary Art</p>
          </div>
          <div className="flex space-x-8">
            <a href="https://www.facebook.com/Epochrestaurant" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/restaurant_epoch" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold transition-colors font-bold text-sm tracking-tighter">TripAdvisor</a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <p>© 2026 Restaurant EPOCH. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full z-40 bg-gold py-3 px-6 flex justify-between items-center md:hidden"
        >
          <span className="text-dark font-bold text-xs uppercase tracking-widest">Experience Authentic Georgia</span>
          <a href="#visit" className="text-dark font-black text-xs uppercase tracking-widest flex items-center">
            Visit Us <ChevronRight size={14} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <ExperienceStrip />
        <SignatureDishes />
        <About />
        <Reviews />
        <LiveEntertainment />
        <VisitUs />
      </main>
      <Footer />
      <StickyCTA />
      
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 grain-overlay z-50 pointer-events-none"></div>
    </div>
  );
}
