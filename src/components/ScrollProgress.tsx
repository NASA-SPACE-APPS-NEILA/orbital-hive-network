import { motion, useScroll, useSpring, useTransform } from "framer-motion";
const ScrollProgress = () => {
  const {
    scrollYProgress
  } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const hexY = useTransform(scrollYProgress, v => `${v * 100}vh`);
  return <>
      {/* Wide orange glow behind the line */}
      <motion.div className="fixed top-0 left-0 h-screen w-12 pointer-events-none z-40 origin-top-left" style={{
      scaleY
    }}>
        <div className="absolute left-0 top-0 h-full w-12 bg-solar-amber/25 blur-2xl" />
      </motion.div>

      {/* Solid progress line */}
      

      {/* Hex logo following the line end */}
      <motion.div className="fixed z-50" style={{
      left: 0,
      x: -12,
      y: hexY
    }}>
        
      </motion.div>
    </>;
};
export default ScrollProgress;