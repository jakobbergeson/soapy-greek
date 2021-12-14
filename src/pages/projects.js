import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import HeadTag from "../components/head";
import ProjectHero from "../components/projects-hero";
import ProjectCard from "../components/project-card";
import { listingContainerStyle, listingContainerWrapper } from "./projects.module.css";


const Project = () => {

  const data = useStaticQuery(graphql`
    query{
      allContentfulProjectCards(sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            description
            link
            publishedDate(formatString: "MMM D")
            id
            backgroundImage {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);


  return (
    <Layout>
      <HeadTag title='Projects' />
      <ProjectHero />
      <div className={listingContainerWrapper}>
        <div className={listingContainerStyle}>
          {data.allContentfulProjectCards.edges.map(({ node }) => {
            const image = getImage(node.backgroundImage);
            return (
              <ProjectCard
                key={node.id}
                title={node.title}
                description={node.description}
                link={node.link}
                date={node.publishedDate}
                bg={image}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Project;