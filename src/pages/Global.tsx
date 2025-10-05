import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import { Globe2, Users } from "lucide-react";

const Global = () => {
  const partners = [
    {
      name: "NASA",
      region: "North America",
      focus: "Deep Space & LEO Operations",
    },
    { name: "Astrospace", region: "Europe", focus: "Debris Removal" },
    { name: "ISRO", region: "Asia", focus: "Cost-Effective Launch Solutions" },
    {
      name: "RedWire",
      region: "Asia",
      focus: "Robotic Systems & 3-D Printing Technology",
    },
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
            <Globe2 className="w-20 h-20 mx-auto mb-6 text-secondary animate-float" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-glow">
              Global Collaboration
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a sustainable orbital future through international
              partnerships
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15 }}
                className="glass-morph rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/20 rounded-xl">
                    <Users className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{partner.name}</h3>
                    <div className="text-accent mb-3">{partner.region}</div>
                    <p className="text-muted-foreground">{partner.focus}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Global;
