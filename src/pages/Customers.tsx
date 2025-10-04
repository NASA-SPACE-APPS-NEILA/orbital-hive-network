import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Satellite, Building2, Rocket, GraduationCap, Shield } from "lucide-react";

const Customers = () => {
  const customerTypes = [
    {
      title: "Satellite Operators",
      icon: Satellite,
      description: "Extend satellite lifespans through in-orbit servicing and refueling",
      benefits: ["Life Extension", "Debris Mitigation", "Cost Reduction"]
    },
    {
      title: "Space Agencies",
      icon: Building2,
      description: "Partner with global agencies for sustainable orbital operations",
      benefits: ["Research Collaboration", "Technology Sharing", "Mission Support"]
    },
    {
      title: "Startups",
      icon: Rocket,
      description: "Access orbital infrastructure without capital-intensive launches",
      benefits: ["Rapid Deployment", "Flexible Contracts", "Scalable Solutions"]
    },
    {
      title: "Universities",
      icon: GraduationCap,
      description: "Conduct microgravity research and educational missions",
      benefits: ["Research Access", "Student Programs", "Data Sharing"]
    },
    {
      title: "Defense",
      icon: Shield,
      description: "Enhance space domain awareness and operational capabilities",
      benefits: ["Security Solutions", "Asset Protection", "Strategic Advantage"]
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
              Who We Serve
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering diverse stakeholders in the orbital ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {customerTypes.map((customer, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-morph rounded-2xl p-8 hover:scale-105 transition-transform group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-secondary/20 clip-hexagon flex items-center justify-center animate-hex-glow group-hover:animate-pulse-glow mx-auto">
                    <div className="w-12 h-12 bg-secondary clip-hexagon flex items-center justify-center">
                      <customer.icon className="w-6 h-6 text-background" />
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-center">{customer.title}</h3>
                <p className="text-muted-foreground mb-6 text-center">{customer.description}</p>
                
                <div className="space-y-2">
                  {customer.benefits.map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
                      <span className="text-foreground/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
