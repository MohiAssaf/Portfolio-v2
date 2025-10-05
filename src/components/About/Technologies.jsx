import TechIcon from "@/components/About/TechIcon";
import { motion } from "framer-motion";
import { technologies } from "@/constants/technologies";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const techVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    rotate: -15,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const Technologies = () => {
  return (
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-2 justify-items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {technologies.map((tech) => (
        <motion.div
          key={tech.name}
          variants={techVariants}
          whileHover={{
            scale: 1.1,
            rotate: 2,
            boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.95 }}
        >
          <TechIcon Icon={tech.icon} name={tech.name} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Technologies;
