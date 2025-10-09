import About from "@/components/About/About";
import Education from "@/components/Education/Education";
import Experience from "@/components/Experience/Experience";
import Navbar from "@/components/Layout/Navbar";
import StarField from "@/components/Background/StarField";

function Layout() {
  return (
    <div className="relative bg-navy min-h-screen text-slate font-sans">
      <div className="fixed inset-0">
        <StarField />
      </div>
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
