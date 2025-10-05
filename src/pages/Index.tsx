import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Recycle, Dna, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "@/components/Navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Galaxy from "@/components/Galaxy";
import LogoLoop from '@/components/LogoLoop';
import { Button } from "@/components/ui/button";
import earthHero from "@/assets/earth-hero.jpg";

const imageLogos = [
  { src: "src/assets/nasa-logo.svg", alt: "Company 1", href: "https://www.nasa.gov" },
  { src: "src/assets/nirma-logo.png", alt: "Company 2", href: "https://nirmauni.ac.in" },
];

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // GSAP Scroll Animations
    const ctx = gsap.context(() => {
      // Fade in sections on scroll
      gsap.utils.toArray<HTMLElement>(".scroll-fade").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 0,
          y: 100,
        });
      });

      // Scale cards on scroll
      gsap.utils.toArray<HTMLElement>(".scale-card").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 60%",
            scrub: 1,
          },
          scale: 0.8,
          opacity: 0,
        });
      });

      // Number counter animation
      gsap.utils.toArray<HTMLElement>(".counter").forEach((element) => {
        const target = parseInt(element.getAttribute("data-target") || "0");
        gsap.from(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
          },
          textContent: 0,
          duration: 2,
          snap: { textContent: 1 },
          onUpdate: function() {
            element.textContent = Math.round(Number(this.targets()[0].textContent)).toLocaleString();
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Galaxy Background - Fixed throughout entire page */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Galaxy 
          mouseInteraction={true}
          mouseRepulsion={false}
          density={1}
          glowIntensity={0.2}
          saturation={0}
          hueShift={180}
          transparent={true}
        />
      </div>
      
      <ScrollProgress />
      <Navigation />

      {/* Semi-Circular Earth Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="relative w-full">
          <div className="relative w-full aspect-[2/1] overflow-hidden">
            <img 
              src={earthHero} 
              alt="Earth from orbit" 
              className="w-full h-full object-cover object-bottom scale-150"
              style={{ clipPath: 'ellipse(50% 100% at 50% 100%)', transform: 'translateY(15%)' }}
            />
            
            {/* SVG Text Animation along arc */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMax meet">
              <defs>
                <path 
                  id="textArc" 
                  d="M 50,480 A 600,600 0 0,1 950,480" 
                  fill="none" 
                />
              </defs>
              <text className="text-4xl md:text-5xl lg:text-6xl font-bold fill-white" style={{ letterSpacing: '0.05em' }}>
                <textPath href="#textArc" startOffset="0%">
                  <animate 
                    attributeName="startOffset" 
                    from="-100%" 
                    to="200%" 
                    dur="20s" 
                    repeatCount="indefinite"
                  />
                  Transforming Low Earth Orbit • Transforming Low Earth Orbit • 
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </section>

      {/* Backed By / Partners Section */}
<section className="py-24 bg-background scroll-fade relative">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-12">Backed By</h2>

    <div style={{ height: '120px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={imageLogos}  // or imageLogos
        speed={70}
        direction="left"
        logoHeight={70}
        gap={100}
        pauseOnHover={false}
        scaleOnHover
        fadeOut
        ariaLabel="Technology Partners"
      />
    </div>
  </div>
</section>



      {/* Stats Section */}
      <section ref={statsRef} className="py-32 px-6 relative scroll-fade">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">
                <span className="counter" data-target="150">0</span>B+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Market Potential</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                <span className="counter" data-target="34000">0</span>+
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Debris Objects</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-secondary mb-2">
                <span className="counter" data-target="2026">2026</span>
              </div>
              <div className="text-sm md:text-base text-muted-foreground">First Mission</div>
            </motion.div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">
                <span className="counter" data-target="100">0</span>%
              </div>
              <div className="text-sm md:text-base text-muted-foreground">Sustainable</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-24 px-6 relative scroll-fade">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              OrbitalHive combines aerospace innovation with biological intelligence to create a self-sustaining 
              orbital ecosystem. We capture and recycle space debris while producing breakthrough pharmaceuticals 
              and materials in microgravity—building the foundation for humanity's permanent presence in space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dual Solutions Preview */}
      <section className="py-32 px-6 scroll-fade">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Dual Solutions for Space Sustainability
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining robotic recycling with biological innovation to transform orbital operations
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              className="scale-card group relative overflow-hidden rounded-3xl p-10 md:p-12 glass-card hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Recycle className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Orbital Recycling</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  Advanced autonomous systems capture and process space debris, converting it into raw materials 
                  for 3D manufacturing. Our robotic platforms extend satellite lifespans through on-orbit repair 
                  and refueling services.
                </p>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Autonomous debris capture and removal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Material recycling and 3D printing in orbit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <span>Satellite servicing and life extension</span>
                  </li>
                </ul>
                <Link to="/solutions">
                  <Button className="bg-secondary hover:bg-secondary/90 text-background w-full group-hover:scale-105 transition-transform">
                    Explore Recycling <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="scale-card group relative overflow-hidden rounded-3xl p-10 md:p-12 glass-card hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Dna className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Biomanufacturing</h3>
                <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed">
                  Harness microgravity's unique properties for breakthrough pharmaceutical production. Our orbital 
                  labs grow ultra-pure protein crystals and manufacture next-generation medicines impossible to 
                  produce on Earth.
                </p>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Protein crystal growth in microgravity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Pharmaceutical manufacturing facilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span>Advanced material synthesis</span>
                  </li>
                </ul>
                <Link to="/solutions">
                  <Button className="bg-accent hover:bg-accent/90 text-background w-full group-hover:scale-105 transition-transform">
                    Explore Biomanufacturing <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 scroll-fade">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto max-w-5xl glass-card rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Join the Orbital Revolution</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Be part of building a sustainable future in space. Whether you're an investor, operator, or innovator—let's shape the orbital economy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-background text-lg px-10 py-7 hover:scale-105 transition-transform">
                <Link to="/investors" className="flex items-center gap-2">
                  For Investors
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent text-lg px-10 py-7 hover:scale-105 transition-transform">
                <Link to="/customers" className="flex items-center gap-2">
                  For Customers
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border/20 glass-morph">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8">
            <Link to="/solutions" className="text-muted-foreground hover:text-secondary transition-colors text-sm md:text-base">Solutions</Link>
            <Link to="/missions" className="text-muted-foreground hover:text-secondary transition-colors text-sm md:text-base">Missions</Link>
            <Link to="/customers" className="text-muted-foreground hover:text-secondary transition-colors text-sm md:text-base">Customers</Link>
            <Link to="/investors" className="text-muted-foreground hover:text-secondary transition-colors text-sm md:text-base">Investors</Link>
            <Link to="/global" className="text-muted-foreground hover:text-secondary transition-colors text-sm md:text-base">Global</Link>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              © 2025 OrbitalHive. Building a Sustainable Future in Orbit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
