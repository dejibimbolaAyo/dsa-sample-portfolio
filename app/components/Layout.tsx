import type { FC, ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <div className="relative bg-zinc-900 text-zinc-100 font-sans min-h-screen overflow-x-hidden">
    {/* Animated Gradient Background */}
    <div className="pointer-events-none fixed inset-0 z-0">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="bg-grad1" cx="30%" cy="20%" r="80%">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bg-grad2" cx="80%" cy="80%" r="70%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#18181b" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#bg-grad1)" />
        <rect width="100%" height="100%" fill="url(#bg-grad2)" />
      </svg>
      <div className="absolute left-[-10vw] top-[30vh] w-[40vw] h-[40vw] bg-cyan-400 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute right-[-15vw] bottom-[10vh] w-[50vw] h-[30vw] bg-purple-400 opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
    <Navbar />
    <main className="relative">{children}</main>
  </div>
);

export default Layout;
