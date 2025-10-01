import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function HeaderBar() {
  const location = useLocation();
  const [open, setOpen] = useState(false); // Mobile header

  return (
    <header className="flex justify-between items-center px-10 py-8">
      <div className="hidden md:flex flex-col leading-none">
        <h1 className="font-cabinet md:text-p lg:text-h3 font-bold">
          Shae Seedan
        </h1>
        <p className="font-satoshi text-tertiary md:text-sp lg:text-p">
          Software Engineer
        </p>
      </div>

      {/* Work/Info Toggle */}
      <nav className="flex items-center px-1 py-1 bg-neutral-800/30 border-neutral-700 border-2 rounded-full font-satoshi text-sm md:text-base shadow-xl">
        <Link
          to="/"
          className={`relative px-5 py-2 rounded-full transition-colors duration-300 ease-in-out ${
            location.pathname === "/"
              ? "bg-neutral-900 text-white"
              : "text-white hover:text-secondary duration-300 ease-in"
          }`}
        >
          Work
          {location.pathname === "/" && (
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-secondary shadow-[0px_0px_8px_#50C878]"></span>
          )}
        </Link>
        <Link
          to="/info"
          className={`relative px-5 py-2 rounded-full transition-colors duration-300 ease-in-out ${
            location.pathname === "/info"
              ? "bg-neutral-900 text-white"
              : "text-white hover:text-secondary duration-300 ease-in"
          }`}
        >
          Info
          {location.pathname === "/info" && (
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-secondary shadow-[0px_0px_8px_#50C878]"></span>
          )}
        </Link>
      </nav>

      {/* Links on the right */}
      {/* Desktop */}
      <div className="hidden md:flex gap-5 font-satoshi text-sm md:text-base">
        <a
          href="https://www.linkedin.com/in/shae-seedan"
          className="flex items-center gap-1.5 hover:text-secondary duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <i className="bi bi-arrow-up-right"></i>
        </a>
        <a
          href="/resume.pdf"
          className="flex items-center gap-1.5 hover:text-secondary duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume <i className="bi bi-arrow-up-right"></i>
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-800"
        >
          <img
            src="./src/assets/avatar-logo.png"
            alt="logo"
            className="border-2 border-neutral-600 rounded-full"
          />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-neutral-850 border border-neutral-800 rounded-xl shadow-lg">
            <a
              href="https://www.linkedin.com/in/shae-seedan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center px-4 py-2 text-white hover:bg-neutral-800"
            >
              LinkedIn <i className="bi bi-arrow-up-right"></i>
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center px-4 py-2 text-white hover:bg-neutral-800"
            >
              Resume <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
