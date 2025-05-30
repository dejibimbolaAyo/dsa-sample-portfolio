import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import Layout from "../components/Layout";
import type { Project } from "../components/Projects";
import fs from "fs/promises";
import path from "path";

type LoaderData = { project: Project };

export const meta: MetaFunction = (args) => {
  const data = args.data as LoaderData | undefined;
  return [{ title: data?.project?.title || "Project Not Found" }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const filePath = path.join(process.cwd(), "app/data/projects.json");
  const file = await fs.readFile(filePath, "utf-8");
  const projects: Project[] = JSON.parse(file);
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ project });
}

export default function ProjectDetail() {
  const { project } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-24 px-4">
        <Link
          to="/#projects"
          className="text-cyan-400 font-mono hover:underline"
        >
          &larr; Back to Projects
        </Link>
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-4">{project.title}</h1>
            <p className="text-zinc-400 mb-6">{project.description}</p>
            <div className="mb-6">
              <span className="font-bold text-cyan-400">Tech Stack:</span>
              <span className="font-mono text-zinc-300 ml-2">
                {project.techStack.join(", ")}
              </span>
            </div>
            <a
              href={project.liveUrl}
              className="inline-block mt-2 px-6 py-2 bg-cyan-400 text-zinc-900 font-bold rounded-lg hover:bg-cyan-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
            </a>
            <a
              href={project.sourceUrl}
              className="inline-block mt-2 ml-4 px-6 py-2 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-zinc-900 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-80 h-56 object-cover bg-zinc-800 rounded-xl"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
