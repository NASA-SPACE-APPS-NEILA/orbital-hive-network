import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Rocket } from "lucide-react";
import Galaxy from "@/components/Galaxy";

const Missions = () => {
  const milestones = [
    {
      year: "2026",
      title: "First Debris Capture Mission",
      description: "Demonstrate autonomous capture technology",
    },
    {
      year: "2027",
      title: "ISBM Lab Launch",
      description: "Deploy orbital biomanufacturing facility",
    },
    {
      year: "2028",
      title: "Recycling Hub Operational",
      description: "Begin converting debris to raw materials",
    },
    {
      year: "2030",
      title: "Commercial Manufacturing",
      description: "Full-scale orbital manufacturing operations",
    },
    {
      year: "2033",
      title: "Multi-Node Network",
      description: "Expand to 5 orbital processing nodes",
    },
    {
      year: "2035",
      title: "Deep Space Extension",
      description: "Extend operations beyond LEO",
    },
    {
      year: "2040",
      title: "Self-Sustaining Ecosystem",
      description: "Achieve circular economy in orbit",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
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
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
                Mission Roadmap
              </h1>
              <p className="text-xl text-muted-foreground">
                Building the future of orbital infrastructure, one milestone at
                a time
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-secondary"></div>

              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative pl-24"
                  >
                    {/* Hex node */}
                    <div className="absolute left-0 w-16 h-16 bg-secondary/20 clip-hexagon flex items-center justify-center animate-hex-glow">
                      <div className="w-12 h-12 bg-secondary clip-hexagon flex items-center justify-center">
                        <Rocket className="w-6 h-6 text-background" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="glass-morph rounded-xl p-6 hover:scale-105 transition-transform">
                      <div className="text-3xl font-bold text-secondary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
