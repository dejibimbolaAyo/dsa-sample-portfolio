import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Layout from "../components/Layout";
import Projects, { Project } from "../components/Projects";
import Contact from "../components/Contact";
import Expertise from "../components/Expertise";
import fs from "fs/promises";
import path from "path";
import Hero from "~/components/Hero";

export const meta: MetaFunction = () => [{ title: "Portfolio" }];

export async function loader(args: LoaderFunctionArgs) {
  const filePath = path.join(process.cwd(), "app/data/projects.json");
  const file = await fs.readFile(filePath, "utf-8");
  const projects: Project[] = JSON.parse(file);
  return json({ projects });
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>();
  return (
    <Layout>
      <Hero />
      <Expertise />
      <Projects projects={projects} />
      <Contact />
    </Layout>
  );
}
