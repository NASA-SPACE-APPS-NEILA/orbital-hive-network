import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { TrendingUp, DollarSign, Leaf, Target } from "lucide-react";

const Investors = () => {
  const metrics = [
    { label: "Market Opportunity", value: "$150B+", icon: DollarSign, color: "text-secondary" },
    { label: "Projected ROI", value: "3.5x", icon: TrendingUp, color: "text-accent" },
    { label: "Debris Reduction", value: "40%", icon: Leaf, color: "text-secondary" },
    { label: "Target Launch", value: "2026", icon: Target, color: "text-accent" },
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
              Investment Opportunity
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us in building the orbital economy of tomorrow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="glass-morph rounded-2xl p-6 text-center hover:scale-105 transition-transform"
              >
                <metric.icon className={`w-12 h-12 mx-auto mb-4 ${metric.color} animate-float`} />
                <div className="text-4xl font-bold mb-2">{metric.value}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="glass-morph rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Why OrbitalHive?</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                <strong className="text-foreground">Dual Revenue Streams:</strong> Combine orbital recycling services with high-value biomanufacturing capabilities.
              </p>
              <p>
                <strong className="text-foreground">First-Mover Advantage:</strong> Pioneering position in the emerging circular space economy.
              </p>
              <p>
                <strong className="text-foreground">Scalable Platform:</strong> Modular infrastructure designed to grow with market demand.
              </p>
              <p>
                <strong className="text-foreground">Global Partnerships:</strong> Collaborations with NASA, ESA, ISRO, and leading space agencies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Investors;
