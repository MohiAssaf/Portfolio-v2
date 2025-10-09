import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ShootingStar = () => {
  const [startPos, setStartPos] = useState({ top: 0, left: 0 });
  const [angle, setAngle] = useState(-45);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartPos({
        top: Math.random() * 40 + 10,
        left: Math.random() * 60 + 10,
      });

      setAngle(-35 - Math.random() * 20);

      setVisible(true);
      setTimeout(() => setVisible(false), 1400);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: 600,
        y: -600,
        opacity: [0, 1, 0.8, 0],
        scale: [0.7, 1, 0.9],
      }}
      transition={{ duration: 2, ease: "easeInOut" }}
      className="absolute pointer-events-none"
      style={{
        top: `${startPos.top}%`,
        left: `${startPos.left}%`,
        rotate: `${angle}deg`,
      }}
    >
      <div className="relative w-2 h-2 rounded-full bg-green shadow-[0_0_20px_8px_#64ffda] blur-[0.5px]">
        <div className="absolute w-3 h-3 rounded-full bg-green/80 opacity-60 blur-md -top-[2px] -left-[2px]" />
      </div>

      <div className="absolute top-1/2 left-1/2 w-32 h-[2px] -translate-x-full -translate-y-1/2 blur-[2px] bg-gradient-to-r from-[#64ffda]/70 to-transparent" />
      <div className="absolute top-1/2 left-1/2 w-30 h-[2px] -translate-x-full -translate-y-1/2 blur-[6px] bg-gradient-to-r from-[#64ffda]/30 to-transparent" />
    </motion.div>
  );
};

export default ShootingStar;
