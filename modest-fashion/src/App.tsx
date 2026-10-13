
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import OurWorks from "./pages/ourWorks";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#faf8f3] text-[#201e1a]">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/works" element={<OurWorks />} />
            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={
                <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
                  <h1 className="text-4xl font-bold">
                    Page Not Found
                  </h1>
                  <p className="mt-4 text-stone-600">
                    The page you are looking for does not exist.
                  </p>
                </section>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
