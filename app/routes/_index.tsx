import type { MetaFunction } from "@remix-run/node";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Hero from "../components/Hero";

export const meta: MetaFunction = () => [{ title: "Portfolio" }];

export default function Index() {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
}
