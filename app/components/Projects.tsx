import type { FC } from "react";
import { Link } from "@remix-run/react";

const projects = [
  {
    id: 1,
    title: "Flight Local (B2B Travel ...",
    subtitle: "Web Development",
    href: "/project1",
  },
  {
    id: 2,
    title: "AI Lab Granada",
    subtitle: "Web Development",
    href: "/project2",
  },
  {
    id: 3,
    title: "Khora – Urban Thinkers ...",
    subtitle: "Web Development",
    href: "/project3",
  },
  // Add more projects as needed
];

const Projects: FC = () => (
  <section id="projects" className="py-24 bg-transparent min-h-screen">
    <div className="max-w-7xl mx-auto px-8">
      <h2 className="text-5xl font-bold text-center mb-16 text-white">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.href}
            className="bg-[#232127] rounded-lg shadow hover:shadow-lg transition overflow-hidden block"
          >
            <div className="h-40 bg-gray-800 flex items-center justify-center">
              <span className="text-gray-500 font-mono">[Image]</span>
            </div>
            <div className="p-4">
              <h3 className="text-white font-semibold truncate">
                {project.title}
              </h3>
              <p className="text-gray-400 text-xs mt-1">{project.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
