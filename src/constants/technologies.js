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
