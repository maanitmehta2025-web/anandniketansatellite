import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/content";
import { img } from "../data/images";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 sm:px-6">
      <nav
        className={`mx-auto flex w-full max-w-wrap items-center justify-between rounded-full border border-white/60 bg-white/60 px-4 backdrop-blur-xl backdrop-saturate-150 transition-all duration-500 sm:px-6 ${
          scrolled
            ? "my-2 py-1.5 shadow-glass"
            : "my-4 py-3 shadow-soft"
        }`}
      >
        <Link to="/" className="flex items-center gap-3" aria-label="Anand Niketan home">
          <img
            src={img.logo}
            alt="Anand Niketan"
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-9" : "h-12"
            }`}
          />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "text-brand-ink/80 hover:text-brand-blue"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/admissions" className="btn-green">
            Enquire Now
          </Link>
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="glass-card mt-2 lg:hidden">
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-medium ${
                      isActive
                        ? "bg-brand-blue/10 text-brand-blue"
                        : "text-brand-ink/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="mt-2 px-4">
              <Link to="/admissions" className="btn-green w-full">
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
