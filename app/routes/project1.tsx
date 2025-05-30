import Layout from "../components/Layout";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Project 1 - Portfolio" }];

export default function Project1() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-24 px-4">
        <a href="/" className="text-cyan-400 font-mono hover:underline">
          &larr; Back to Projects
        </a>
        <div className="mt-8 flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold mb-4">Project 1 Title</h1>
            <p className="text-zinc-400 mb-6">
              A detailed description of Project 1, its goals, features, and what
              makes it unique. Explain the problem it solves and your role in
              the project.
            </p>
            <div className="mb-6">
              <span className="font-bold text-cyan-400">Tech Stack:</span>
              <span className="font-mono text-zinc-300">
                React, Node.js, TailwindCSS
              </span>
            </div>
            <a
              href="#"
              className="inline-block mt-2 px-6 py-2 bg-cyan-400 text-zinc-900 font-bold rounded-lg hover:bg-cyan-300 transition"
            >
              View Live
            </a>
            <a
              href="#"
              className="inline-block mt-2 ml-4 px-6 py-2 border border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-zinc-900 transition"
            >
              Source Code
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-80 h-56 bg-zinc-800 rounded-xl flex items-center justify-center text-zinc-400 font-mono">
              [Project Image]
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
