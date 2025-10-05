import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Galaxy from "@/components/Galaxy";
import { Recycle, Satellite, Wrench, Box, Factory, Zap } from "lucide-react";

const RecyclingManufacturing = () => {
  const capabilities = [
    {
      icon: Satellite,
      title: "Autonomous Debris Capture",
      description: "Advanced AI-powered systems identify and capture space debris with precision robotics",
      stats: "99.8% Success Rate"
    },
    {
      icon: Recycle,
      title: "Material Recycling",
      description: "Transform space debris into high-quality raw materials for manufacturing",
      stats: "85% Material Recovery"
    },
    {
      icon: Box,
      title: "3D Printing in Orbit",
      description: "Zero-gravity additive manufacturing for spacecraft components and structures",
      stats: "50% Cost Reduction"
    },
    {
      icon: Wrench,
      title: "Robotic Repair Systems",
      description: "Autonomous repair and maintenance of satellites and space infrastructure",
      stats: "10+ Year Extension"
    },
    {
      icon: Factory,
      title: "On-Orbit Assembly",
      description: "Construct large-scale structures and satellites directly in space",
      stats: "3x Faster Build"
    },
    {
      icon: Zap,
      title: "Satellite Refueling",
      description: "Extend mission lifetime through autonomous refueling operations",
      stats: "15+ Year Mission Life"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Detection & Tracking",
      description: "AI systems identify debris and track orbital patterns"
    },
    {
      step: "02",
      title: "Autonomous Capture",
      description: "Robotic arms secure debris with minimal fuel consumption"
    },
    {
      step: "03",
      title: "Material Processing",
      description: "Break down debris into recyclable components"
    },
    {
      step: "04",
      title: "Manufacturing",
      description: "3D print new components from recycled materials"
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
          hueShift={180} 
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
              <div className="p-4 bg-secondary/20 rounded-2xl animate-pulse-glow inline-block">
                <Recycle className="w-16 h-16 text-secondary" />
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow">
              Orbital Recycling & Manufacturing
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Transforming space debris into the building blocks of tomorrow's orbital infrastructure
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
                    <div className="p-3 bg-secondary/20 rounded-xl group-hover:animate-pulse-glow">
                      <capability.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{capability.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{capability.description}</p>
                      <div className="inline-block px-3 py-1 bg-accent/20 rounded-full">
                        <span className="text-accent text-sm font-semibold">{capability.stats}</span>
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
                    <div className="text-5xl font-bold text-secondary/30 mb-4">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  {idx < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-secondary to-transparent"></div>
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
            className="glass-morph rounded-3xl p-8 md:p-12 bg-gradient-to-br from-secondary/20 to-secondary/5"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Environmental Impact
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  10,000+
                </div>
                <p className="text-muted-foreground">Tons of Debris Recycled</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  70%
                </div>
                <p className="text-muted-foreground">Reduction in Launch Costs</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  Zero
                </div>
                <p className="text-muted-foreground">New Debris Created</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RecyclingManufacturing;
