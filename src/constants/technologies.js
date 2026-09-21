import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiFastapi,
  SiSqlalchemy,
  SiGithubactions,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export const technologies = [
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React JS/Native", icon: FaReact },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Docker", icon: FaDocker },
  { name: "HTML & CSS", icon: [FaHtml5, FaCss3Alt] },
  { name: "Linux", icon: FaLinux },
  { name: "Microsoft Azure", icon: VscAzure },
  { name: "Kubernetes", icon: SiKubernetes },
  { name: "Terraform", icon: SiTerraform },
  { name: "Ansible", icon: SiAnsible },
  { name: "FastAPI", icon: SiFastapi },
  { name: "SQLAlchemy", icon: SiSqlalchemy },
  { name: "GitHub Actions", icon: SiGithubactions },
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
