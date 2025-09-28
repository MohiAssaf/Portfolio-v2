import {
  FaPython,
  FaJsSquare,
  FaReact,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiTailwindcss } from "react-icons/si";
import TechIcon from "./TechIcon";

const Technologies = () => {
  const technologies = [
    { name: "Python", icon: FaPython },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "React / RN", icon: FaReact },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Docker", icon: FaDocker },
    { name: "HTML & CSS", icon: [FaHtml5, FaCss3Alt] },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-16 justify-items-center">
      {technologies.map((tech) => (
        <TechIcon key={tech.name} Icon={tech.icon} name={tech.name} />
      ))}
    </div>
  );
};

export default Technologies;
