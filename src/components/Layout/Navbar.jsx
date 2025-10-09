import { motion } from "framer-motion";
import { CONTACT_INFO, NAV_LINKS, SOCIAL_LINKS } from "@/constants/navigation";

const Navbar = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:flex-col lg:justify-between lg:max-h-screen lg:w-2/5 p-6 md:p-12 lg:p-24">
      <div className="text-center lg:text-left">
        <motion.img
          src="/images/profile-pic.png"
          alt="Mohamed Abu Assaf"
          className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-full border-4 border-green/50 shadow-lg mx-auto lg:mx-0"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          whileHover={{ scale: 1.05, rotate: 5 }}
        />
        <h1 className="mt-4 text-3xl font-medium tracking-tight text-light-slate sm:text-4xl">
          Mohamed
        </h1>
        <h2 className="text-3xl font-medium tracking-tight text-light-slate sm:text-4xl">
          Abu Assaf
        </h2>
        <p className="mt-2 text-lg font-medium tracking-tight text-green/70 sm:text-xl">
          Junior Software Developer
        </p>
        <p className="mt-4 max-w-xs leading-relaxed text-slate mx-auto lg:mx-0">
          I have what it takes to make an excellent asset to any Software
          Company. Let me introduce myself...
        </p>
      </div>

      <nav className="mt-8 lg:mt-12" aria-label="In-page jump links">
        <ul className="flex flex-col lg:flex-col lg:space-y-3 space-y-2 lg:w-max lg:mx-0 mx-auto">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center justify-center lg:justify-start py-2 text-slate hover:text-green transition-colors"
              >
                <span className="mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-green motion-reduce:transition-none"></span>
                <span className="text-xs font-bold uppercase tracking-widest group-hover:text-light-slate">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 lg:mt-12 text-center lg:text-left">
        <ul className="space-y-2 text-sm text-slate">
          {CONTACT_INFO.map((info, idx) => (
            <li key={idx}>
              {info.href ? (
                <a
                  href={info.href}
                  className="hover:text-green transition-colors"
                >
                  {info.value}
                </a>
              ) : (
                <span className="text-slate/80">{info.value}</span>
              )}
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap justify-center lg:justify-start gap-5 text-2xl">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.href}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate hover:text-green transition-colors"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
