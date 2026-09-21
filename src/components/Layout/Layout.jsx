import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Navbar from "@/components/Layout/Navbar";
import StarField from "@/components/Background/StarField";
import BackToTopBtn from "@/components/Layout/BackToTopBtn";

function Layout() {
  return (
    <div className="relative bg-navy min-h-screen text-slate font-sans">
      <div className="fixed inset-0 pointer-events-none">
        <StarField />
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl">
        <Navbar />

        <main
          id="content"
          className="pt-16 lg:w-3/5 lg:py-16 p-6 md:p-12 lg:p-24"
        >
          <About />
          <Skills />
          <Education />
          <Experience />
        </main>
      </div>
      <BackToTopBtn />
    </div>
  );
}

export default Layout;
