import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="bg-navy min-h-screen text-slate font-sans">
      <div className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen max-w-screen-xl">
        <Navbar />

        <main
          id="content"
          className="pt-24 lg:w-1/2 lg:py-24 p-6 md:p-12 lg:p-24"
        >
          <h1>Main Content</h1>
        </main>
      </div>
    </div>
  );
}

export default Layout;
