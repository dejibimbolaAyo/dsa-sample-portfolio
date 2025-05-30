import type { FC } from "react";
import { Link } from "@remix-run/react";
import { useState, useMemo } from "react";
import NoiseBg from "./NoiseBg";
import stringToHex from "../utils/stringToHex";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  image: string;
  liveUrl: string;
  sourceUrl: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [search, setSearch] = useState("");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...cats];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.techStack
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, search]);

  return (
    <section id="projects" className="py-24 bg-transparent min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Projects
        </h2>
        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-bold text-zinc-100 mr-2">Filter by</span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded font-mono text-sm border transition ${
                  selectedCategory === cat
                    ? "bg-cyan-400 text-zinc-900 border-cyan-400 underline underline-offset-4"
                    : "bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-cyan-400 hover:text-zinc-900 hover:border-cyan-400"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search by title or tech..."
            className="px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 font-mono focus:outline-none focus:ring-2 focus:ring-cyan-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[220px]">
          {filteredProjects.length === 0 ? (
            <div className="col-span-full text-center text-zinc-400 font-mono py-12">
              No projects found.
            </div>
          ) : (
            filteredProjects.map((project, idx) => {
              const hex = stringToHex(project.slug);
              return (
                <Link
                  key={project.id}
                  to={`/${project.slug}`}
                  className={`relative group bg-[#232127] rounded-lg shadow hover:shadow-xl transition overflow-hidden block
                    ${
                      idx === 0
                        ? "sm:col-span-2 sm:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[440px]"
                        : ""
                    }`}
                  style={{ minHeight: idx === 0 ? 440 : 220 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/60 to-zinc-800/80 group-hover:from-cyan-400/10 group-hover:to-purple-400/10 transition" />
                  <NoiseBg
                    hex={hex}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="h-full flex flex-col justify-end relative z-10 p-6">
                    <div className="mb-4 flex-1 flex items-center justify-center">
                      <span className="text-gray-300 font-mono text-lg">
                        [Image]
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg truncate mb-1">
                        {project.title}
                      </h3>
                      <p className="text-zinc-400 text-xs mb-2 truncate">
                        {project.category}
                      </p>
                      <p className="text-zinc-400 text-xs truncate">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <span className="absolute right-4 top-4 text-xs text-cyan-400 font-mono opacity-0 group-hover:opacity-100 transition">
                    View Project →
                  </span>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
