import * as React from "react";
import Layout from "../components/layout";
import HeadTag from "../components/head";
import ProjectHero from "../components/projects-hero";

const Project = () => {
  return (
    <Layout>
      <HeadTag title='Projects' />
      <ProjectHero />
    </Layout>
  );
};

export default Project;