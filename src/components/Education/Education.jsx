import EducationItem from "./EducationItem";

const Education = () => {
  return (
    <section id="education" className="mb-24 scroll-mt-24">
      <h2 className="text-light-slate text-2xl font-bold mb-8">
        Education & Certifications
      </h2>

      <ol className="group/list">
        <EducationItem
          year="2021 – 2025"
          title="Bachelor in Telecommunications & Computer Technologies, NBU"
          description="Developing a solid foundation in telecommunications and computer technologies, covering network fundamentals, website development, database management, and practical skills in system installation and maintenance."
          tags={[
            "Fundamentals of Telecommunications",
            "Website Development",
            "User Profiles & Databases",
            "System Installation & Maintenance",
          ]}
        />

        <EducationItem
          year="2021 – 2025"
          title="SoftUni"
          description="Gaining hands-on experience in full-stack development with a focus on modern programming languages, front-end design, backend development, and building dynamic applications"
          tags={["JavaScript", "Python", "HTML & CSS", "React JS"]}
        />
      </ol>
    </section>
  );
};

export default Education;
