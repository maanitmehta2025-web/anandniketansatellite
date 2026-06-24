import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import GlassCursor from "./components/GlassCursor";
import AuroraBackground from "./components/AuroraBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import CampusLife from "./pages/CampusLife";
import Admissions from "./pages/Admissions";
import StudentBoard from "./pages/StudentBoard";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <AuroraBackground />
      <div aria-hidden className="glass-film" />
      <ScrollToTop />
      <ScrollProgress />
      <GlassCursor />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-board" element={<StudentBoard />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
