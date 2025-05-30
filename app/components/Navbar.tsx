import type { FC } from "react";
import { Link } from "@remix-run/react";

const Navbar: FC = () => (
  <nav className="fixed w-full bg-zinc-900/80 backdrop-blur-sm z-50 border-b border-zinc-700">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-cyan-400 font-sans">
        Portfolio
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link
          to="#expertise"
          className="text-zinc-400 hover:text-cyan-400 transition-colors font-mono"
        >
          // expertise
        </Link>
        <Link
          to="#projects"
          className="text-zinc-400 hover:text-cyan-400 transition-colors font-mono"
        >
          // projects
        </Link>
        <Link
          to="#contact"
          className="text-zinc-400 hover:text-cyan-400 transition-colors font-mono"
        >
          // contact
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
