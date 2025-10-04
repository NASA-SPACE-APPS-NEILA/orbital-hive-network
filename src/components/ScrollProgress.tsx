import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-solar-amber origin-left z-50"
      style={{ 
        scaleX,
        boxShadow: "0 0 20px hsl(var(--solar-amber)), 0 0 40px hsl(var(--solar-amber) / 0.5)"
      }}
    />
  );
};

export default ScrollProgress;
