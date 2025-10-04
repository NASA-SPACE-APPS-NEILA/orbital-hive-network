import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 w-1 h-screen bg-gradient-to-b from-cyan-glow via-solar-amber to-cyan-glow origin-top z-50"
      style={{ 
        scaleY,
        boxShadow: "0 0 20px hsl(var(--cyan-glow)), 0 0 40px hsl(var(--solar-amber) / 0.5)"
      }}
    />
  );
};

export default ScrollProgress;
