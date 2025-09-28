import Technologies from "./Technologies";

const About = () => {
  return (
    <section id="about" className="mb-32 scroll-mt-24 max-w-4xl mx-auto px-4">
      <h2 className="text-light-slate text-3xl md:text-4xl font-semibold mb-12">
        About Me
      </h2>

      <div className="text-slate-400 leading-relaxed space-y-4 text-base md:text-md">
        <p>
          I’m a creative and enthusiastic{" "}
          <span className="font-semibold text-light-slate">
            Software Developer
          </span>{" "}
          passionate about building seamless, high-performance applications
          across web and mobile platforms. I enjoy crafting intuitive{" "}
          <span className="font-semibold text-light-slate">
            frontend interfaces
          </span>{" "}
          as well as designing efficient{" "}
          <span className="font-semibold text-light-slate">
            backend systems
          </span>{" "}
          that power them.
        </p>

        <p>
          My expertise spans the{" "}
          <span className="font-semibold text-light-slate">
            React/JavaScript
          </span>{" "}
          ecosystem,{" "}
          <span className="font-semibold text-light-slate">
            React Native with Expo
          </span>{" "}
          for mobile development,{" "}
          <span className="font-semibold text-light-slate">Python (Flask)</span>
          , and{" "}
          <span className="font-semibold text-light-slate">PostgreSQL</span> for
          scalable data management. I enjoy transforming complex ideas and data
          into reliable, user-friendly software experiences.
        </p>

        <p>
          I am committed to{" "}
          <span className="font-semibold text-light-slate">
            continuous learning
          </span>{" "}
          and staying current with the latest technology trends. I believe the
          best applications are built through clean, maintainable code, a strong
          understanding of users’ needs, and a focus on{" "}
          <span className="font-semibold text-light-slate">
            problem-solving
          </span>{" "}
          across both web and mobile platforms.
        </p>
      </div>

      <div className="mt-12">
        <Technologies />
      </div>
    </section>
  );
};

export default About;
