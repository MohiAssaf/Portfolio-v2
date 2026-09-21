const About = () => {
  return (
    <section id="about" className="mb-32 scroll-mt-24 max-w-4xl mx-auto px-4">
      <h2 className="text-light-slate text-3xl md:text-4xl font-semibold mt-2 md:mt-0 mb-4">
        About Me
      </h2>

      <div className="text-slate-400 leading-relaxed space-y-4 text-base md:text-md">
        <p>
          I’m a software engineer with 3+ years of experience building{" "}
          <span className="font-semibold text-light-slate">
            Python backend systems
          </span>, data pipelines, and APIs for data-intensive urban and
          geospatial applications.
        </p>
        <p>
          I work with{" "}
          <span className="font-semibold text-light-slate">
            FastAPI, SQLAlchemy, and PostgreSQL
          </span>{" "}
          to turn sensor streams and external data into reliable services. My
          work spans MQTT ingestion, scheduled ETL, automated testing, and{" "}
          <span className="font-semibold text-light-slate">
            Docker-based deployment on Linux
          </span>, with a focus on validation and recovery.
        </p>
        <p>
          I also build{" "}
          <span className="font-semibold text-light-slate">
            React and React Native interfaces
          </span>{" "}
          that make complex data useful to people. I enjoy working across the
          stack, with my strongest focus on{" "}
          <span className="font-semibold text-light-slate">
            backend systems and production reliability
          </span>.
        </p>
      </div>
    </section>
  );
};

export default About;
