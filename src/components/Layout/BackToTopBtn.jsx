import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BsArrowUp } from "react-icons/bs";

const BackToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <motion.button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
        className="fixed z-10 bottom-6 right-6 p-3 md:p-4 rounded-full bg-navy/60 backdrop-blur-md border-4 border-green/30 text-green shadow-lg shadow-green/20 hover:bg-green hover:text-navy transition-all duration-300 ease-out hover:scale-110"
      >
        <BsArrowUp className="w-5 h-5" />
      </motion.button>
    )
  );
};

export default BackToTopBtn;
