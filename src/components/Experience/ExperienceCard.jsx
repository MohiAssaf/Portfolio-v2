import { FiBriefcase, FiExternalLink } from "react-icons/fi";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="p-6 rounded-xl bg-slate-900/50 transition-all duration-300"
  >
    <div className="flex items-start gap-4 mb-6">
      <FiBriefcase className="w-6 h-6 text-teal-300 mt-1" />
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-light-slate">{exp.role}</h3>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-slate-400 text-lg font-medium">{exp.company}</p>
          <motion.a
            href={exp.website}
            target="_blank"
            rel="noopener noreferrer"
            title={`Visit ${exp.company}`}
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-teal-300 hover:text-teal-400"
          >
            <FiExternalLink className="w-5 h-5" />
          </motion.a>
        </div>

        <p className="text-teal-300 text-sm mt-1">{exp.period}</p>
      </div>
    </div>

    <div className="ml-1 space-y-6">
      {exp.projects.map((project, idx) => (
        <ProjectItem key={idx} project={project} index={idx} />
      ))}
    </div>
  </motion.div>
);

export default ExperienceCard;
