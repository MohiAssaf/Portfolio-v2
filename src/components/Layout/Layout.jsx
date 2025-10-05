import About from "../About/About";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-navy min-h-screen text-slate font-sans">
      <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl">
        <Navbar />

        <main
          id="content"
          className="pt-16 lg:w-3/5 lg:py-16 p-6 md:p-12 lg:p-24"
        >
          <About />
          <Education />
          <Experience />
        </main>
      </div>
    </div>
  );
}

export default Layout;
