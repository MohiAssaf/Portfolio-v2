import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-2/5 lg:flex-col lg:justify-between lg:py-24 p-6 md:p-12 lg:p-24">
      <div>
        <h1 className="text-4xl font-medium tracking-tight text-light-slate sm:text-5xl">
          Mohamed
        </h1>
        <h2 className="text-4xl font-medium tracking-tight text-light-slate sm:text-5xl">
          Abu Assaf
        </h2>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-green/70 sm:text-xl">
          Junior Software Developer
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate">
          I have what it takes to make an excellent asset to any Software
          Company. Let me introduce myself ...
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-12 w-max">
            <li>
              <a
                className="group flex items-center py-3 text-slate hover:text-green"
                href="#about"
              >
                <span className="mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-green motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-light-slate">
                  ABOUT ME
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 text-slate hover:text-green"
                href="#education"
              >
                <span className="mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-green motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-light-slate">
                  EDUCATION
                </span>
              </a>
            </li>
            <li>
              <a
                className="group flex items-center py-3 text-slate hover:text-green"
                href="#experience"
              >
                <span className="mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-green motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-light-slate">
                  Experience
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="mt-8 lg:mt-0">
        <a
          href="#"
          className="CVbutton text-green border border-green px-4 py-2 rounded-md hover:bg-lightest-navy transition-colors"
        >
          Download CV
        </a>
        <ul className="mt-8 flex items-center space-x-5">
          <li>
            <a
              href="https://github.com/MohiAssaf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mo_assaf__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors text-2xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100021934731677"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors text-2xl"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mohamed-assaf-843324176/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-green transition-colors text-2xl"
              aria-label="Facebook"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
