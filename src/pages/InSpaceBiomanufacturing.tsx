import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Galaxy from "@/components/Galaxy";
import { Dna, Microscope, FlaskConical, Pill, Sparkles, Atom } from "lucide-react";

const InSpaceBiomanufacturing = () => {
  const capabilities = [
    {
      icon: Dna,
      title: "Protein Crystal Growth",
      description: "Microgravity enables ultra-pure protein crystals 300% larger than Earth-grown variants",
      stats: "300% Larger Crystals"
    },
    {
      icon: Microscope,
      title: "Pharmaceutical Production",
      description: "Manufacture advanced drugs and therapies impossible to produce in terrestrial labs",
      stats: "10x Purity Level"
    },
    {
      icon: FlaskConical,
      title: "Tissue Engineering",
      description: "Grow 3D organ tissues and cellular structures without gravitational deformation",
      stats: "Zero Deformation"
    },
    {
      icon: Pill,
      title: "Drug Discovery",
      description: "Accelerate pharmaceutical research through enhanced crystallization processes",
      stats: "5x Faster Research"
    },
    {
      icon: Sparkles,
      title: "Material Synthesis",
      description: "Create novel biomaterials with unique properties utilizing microgravity conditions",
      stats: "Breakthrough Materials"
    },
    {
      icon: Atom,
      title: "Cellular Research",
      description: "Study cellular behavior and development in true weightless environments",
      stats: "100% Microgravity"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Laboratory Setup",
      description: "Deploy automated bioreactors and sterile environments in orbit"
    },
    {
      step: "02",
      title: "Sample Cultivation",
      description: "Grow cells and proteins in optimized microgravity conditions"
    },
    {
      step: "03",
      title: "Quality Analysis",
      description: "Real-time monitoring and analysis of biological processes"
    },
    {
      step: "04",
      title: "Earth Return",
      description: "Safely transport pharmaceutical products back to Earth"
    }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Galaxy Background */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <Galaxy 
          mouseInteraction={true} 
          mouseRepulsion={false} 
          density={1} 
          glowIntensity={0.2} 
          saturation={0} 
          hueShift={280} 
          transparent={true} 
        />
      </div>

      <div className="relative z-10">
        <Navigation />
        
        <div className="pt-24 pb-16 px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="p-4 bg-accent/20 rounded-2xl animate-pulse-glow inline-block">
                  <Dna className="w-16 h-16 text-accent" />
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
                In-Space Biomanufacturing
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Harnessing microgravity to revolutionize pharmaceutical production and unlock breakthrough medical discoveries
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Core Capabilities
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {capabilities.map((capability, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="glass-morph rounded-2xl p-6 hover:scale-105 transition-transform duration-300 group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/20 rounded-xl group-hover:animate-pulse-glow">
                        <capability.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{capability.description}</p>
                        <div className="inline-block px-3 py-1 bg-secondary/20 rounded-full">
                          <span className="text-secondary text-sm font-semibold">{capability.stats}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                The Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {process.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: idx * 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 100
                    }}
                    className="relative"
                  >
                    <div className="glass-morph rounded-2xl p-6 h-full">
                      <div className="text-5xl font-bold text-accent/30 mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                    {idx < process.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-transparent"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Impact Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="glass-morph rounded-3xl p-8 md:p-12 bg-gradient-to-br from-accent/20 to-accent/5"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Medical Impact
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    $6B+
                  </div>
                  <p className="text-muted-foreground">Pharmaceutical Market Value</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    100+
                  </div>
                  <p className="text-muted-foreground">Disease Treatment Applications</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    98%
                  </div>
                  <p className="text-muted-foreground">Production Success Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InSpaceBiomanufacturing;
