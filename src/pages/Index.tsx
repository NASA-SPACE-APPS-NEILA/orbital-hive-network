import { motion } from "framer-motion";
import { ArrowRight, Orbit } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import EarthScene from "@/components/EarthScene";
import HexBackground from "@/components/HexBackground";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <HexBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-4xl">
            <EarthScene />
          </div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-glow leading-tight">
              Transforming Low Earth Orbit
            </h1>
            <p className="text-2xl md:text-3xl text-foreground/90 mb-8">
              into a <span className="text-secondary font-semibold">Circular, Living Economy</span>
            </p>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Pioneering orbital recycling and in-space biomanufacturing for a sustainable future beyond Earth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-background text-lg px-8 py-6">
                <Link to="/solutions" className="flex items-center gap-2">
                  Explore Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6">
                <Link to="/missions" className="flex items-center gap-2">
                  <Orbit className="w-5 h-5" />
                  View Missions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-morph rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              OrbitalHive combines aerospace innovation with biological intelligence to create a self-sustaining 
              orbital ecosystem. We capture and recycle space debris while producing breakthrough pharmaceuticals 
              and materials in microgravity—building the foundation for humanity's permanent presence in space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dual Solutions Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-glow"
          >
            Our Dual Solutions
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-morph rounded-2xl p-8 hover:scale-105 transition-transform bg-gradient-to-br from-secondary/20 to-secondary/5 cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-4">Orbital Recycling</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Autonomous debris capture, material recycling, and 3D manufacturing in orbit
              </p>
              <Link to="/solutions">
                <Button variant="secondary" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-morph rounded-2xl p-8 hover:scale-105 transition-transform bg-gradient-to-br from-accent/20 to-accent/5 cursor-pointer"
            >
              <h3 className="text-3xl font-bold mb-4">Biomanufacturing</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Microgravity pharmaceutical production and protein crystal growth
              </p>
              <Link to="/solutions">
                <Button variant="secondary" className="w-full">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container mx-auto max-w-4xl glass-morph rounded-3xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Join the Orbital Revolution</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of building a sustainable future in space
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-background">
              <Link to="/investors">For Investors</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
              <Link to="/customers">For Customers</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/20 glass-morph">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-8 mb-6">
            <Link to="/solutions" className="text-muted-foreground hover:text-secondary transition-colors">Solutions</Link>
            <Link to="/missions" className="text-muted-foreground hover:text-secondary transition-colors">Missions</Link>
            <Link to="/customers" className="text-muted-foreground hover:text-secondary transition-colors">Customers</Link>
            <Link to="/investors" className="text-muted-foreground hover:text-secondary transition-colors">Investors</Link>
            <Link to="/global" className="text-muted-foreground hover:text-secondary transition-colors">Global</Link>
          </div>
          <p className="text-muted-foreground">
            © 2025 OrbitalHive. Building a Sustainable Future in Orbit.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
