import { motion } from "framer-motion";
import nasaLogo from "@/assets/nasa-logo.svg";
import nirmaLogo from "@/assets/nirma-logo.png";

const BackedBy = () => {
  const logos = [
    { src: nirmaLogo, alt: "Nirma University", className: "h-12" },
    { src: nasaLogo, alt: "NASA", className: "h-16" },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-sm font-space tracking-[0.3em] text-cyan-glow/70 mb-12 uppercase">
          Backed By
        </h2>
        
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={logo.className}
                />
              </div>
            ))}
          </motion.div>
          
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-deep-space to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-deep-space to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default BackedBy;
