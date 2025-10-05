import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiTailwindcss } from "react-icons/si";

export const technologies = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React JS/Native", icon: FaReact },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Docker", icon: FaDocker },
  { name: "HTML & CSS", icon: [FaHtml5, FaCss3Alt] },
];

export const techContainerVariants = {
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

export const techVariants = {
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
