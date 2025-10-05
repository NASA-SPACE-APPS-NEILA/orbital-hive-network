import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Recycle, FlaskConical, Wrench, Atom } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      title: "Orbital Recycling & Manufacturing",
      icon: Recycle,
      description: "Transform space debris into valuable resources through autonomous capture and advanced manufacturing.",
      features: [
        "Autonomous Debris Capture",
        "Material Recycling",
        "3D Printing in Orbit",
        "Robotic Repair Systems",
        "Satellite Refueling"
      ],
      gradient: "from-secondary/20 to-secondary/5"
    },
    {
      title: "In-Space Biomanufacturing (ISBM)",
      icon: FlaskConical,
      description: "Leverage microgravity to produce high-value pharmaceuticals and materials impossible to create on Earth.",
      features: [
        "Protein Crystal Growth",
        "Microgravity Pharma Production",
        "Tissue Engineering",
        "Advanced Materials Synthesis",
        "Biotechnology Research"
      ],
      gradient: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              Dual-Solution Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Combining orbital sustainability with breakthrough scientific capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {solutions.map((solution, idx) => (
              <Link
                key={idx}
                to={idx === 0 ? "/solutions/recycling-manufacturing" : "#"}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className={`glass-morph rounded-2xl p-8 hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${solution.gradient} cursor-pointer`}
                >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 bg-secondary/20 rounded-xl animate-pulse-glow">
                    <solution.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{solution.title}</h2>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {solution.features.map((feature, featureIdx) => (
                    <motion.div
                      key={featureIdx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.2 + featureIdx * 0.1 }}
                      className="flex items-center gap-3 p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full animate-pulse-glow"></div>
                      <span className="text-foreground/90">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
