import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const hexY = useTransform(scrollYProgress, (v) => `${v * 100}vh`);

  return (
    <>
      {/* Wide orange glow behind the line */}
      <motion.div
        className="fixed top-0 left-0 h-screen w-12 pointer-events-none z-40 origin-top-left"
        style={{ scaleY }}
      >
        <div className="absolute left-0 top-0 h-full w-12 bg-solar-amber/25 blur-2xl" />
      </motion.div>

      {/* Solid progress line */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-screen bg-solar-amber origin-top z-50"
        style={{ 
          scaleY,
          boxShadow: "0 0 30px hsl(var(--solar-amber)), 0 0 60px hsl(var(--solar-amber) / 0.9)"
        }}
      />

      {/* Hex logo following the line end */}
      <motion.div
        className="fixed z-50"
        style={{
          left: 0,
          x: -12,
          y: hexY,
        }}
      >
        <svg width="28" height="32" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M12 0L23.5 7V21L12 28L0.5 21V7L12 0Z" 
            fill="hsl(var(--solar-amber))"
            style={{
              filter: "drop-shadow(0 0 15px hsl(var(--solar-amber))) drop-shadow(0 0 35px hsl(var(--solar-amber) / 0.7))"
            }}
          />
        </svg>
      </motion.div>
    </>
  );
};

export default ScrollProgress;
