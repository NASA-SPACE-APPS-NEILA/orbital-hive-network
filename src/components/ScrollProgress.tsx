import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-screen bg-solar-amber origin-top z-50"
        style={{ 
          scaleY,
          boxShadow: "0 0 25px hsl(var(--solar-amber)), 0 0 50px hsl(var(--solar-amber) / 0.8)"
        }}
      />
      <motion.div
        className="fixed left-0 z-50"
        style={{
          top: scrollYProgress,
          y: "-50%",
        }}
      >
        <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 0L23.5 7V21L12 28L0.5 21V7L12 0Z" 
            fill="hsl(var(--solar-amber))"
            style={{
              filter: "drop-shadow(0 0 15px hsl(var(--solar-amber))) drop-shadow(0 0 30px hsl(var(--solar-amber) / 0.6))"
            }}
          />
        </svg>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
