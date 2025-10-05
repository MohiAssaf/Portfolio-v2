import { motion } from "framer-motion";

const ProjectItem = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.4)" }}
    className="p-4 rounded-xl bg-slate-900/50 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer"
  >
    <h4 className="text-slate-200 font-semibold mb-2 text-lg">
      {project.title}
    </h4>
    <p className="text-slate-400 text-sm mb-3">{project.desc}</p>
    <ul className="flex flex-wrap gap-2" aria-label="Technologies used">
      {project.tech.map((tech, idx) => (
        <motion.li
          key={idx}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
        >
          <span className="inline-block bg-teal-400/10 text-teal-300 rounded-full px-3 py-1 text-xs font-medium">
            {tech}
          </span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
);

export default ProjectItem;
