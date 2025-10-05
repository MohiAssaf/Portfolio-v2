import { motion } from "framer-motion";
import ExperienceCard from "@/components/Experience/ExperienceCard";
import { experiences } from "@/data/experiences";

const Experience = () => (
  <section
    id="experience"
    className="mb-32 scroll-mt-24 max-w-4xl mx-auto px-4"
  >
    <motion.h2
      className="text-light-slate text-3xl md:text-4xl font-semibold mb-6"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      Experience
    </motion.h2>
    <div className="grid gap-6 md:grid-cols-1">
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} exp={exp} index={index} />
      ))}
    </div>
  </section>
);

export default Experience;
