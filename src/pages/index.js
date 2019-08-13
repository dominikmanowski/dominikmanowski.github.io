import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Header from "../components/header";
import Layout from "../components/layout";
import ProjectPreview from "../components/project-preview";
import styled from "styled-components";

const StyledHeader = styled.h2`
  width: 100%;
  padding-left: 5rem;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            description
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <Header />
      <StyledHeader>Projects:</StyledHeader>
      {projects.map(({ node: project }) => {
        const title = project.title;
        const description = project.description;
        const slug = project.slug;
        const tags = project.tags;
        const imageData = project.image.childImageSharp.fluid;
        return (
          <ProjectPreview
            title={title}
            description={description}
            slug={slug}
            tags={tags}
            imageData={imageData}
            key={title}
          />
        );
      })}
    </Layout>
  );
};

export default Home;
