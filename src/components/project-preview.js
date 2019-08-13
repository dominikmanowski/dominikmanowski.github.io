import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

import iconArrowRight from "../icons/arrow-right.svg";

const StyledWrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 30px 30px 50px;
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
  margin-bottom: 2rem;
  width: calc(50% - 0.5rem);
  overflow: hidden;
  transform: scale(0.99);
  position: relative;
  transition: transform 0.2s ease-in;

  &:hover {
    transform: scale(1);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

const InnerWrapper = styled.div`
  & h2 {
    font-weight: 600;
    padding: 2rem 0 1.2rem;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px;
`

const Icon = styled.img`
  height: 0.7rem;
  margin-left: 5px;
`;

const ProjectPreview = ({ title, tags, slug, imageData }) => (
  <StyledWrapper>
    <Link to={`/${slug}/`}>
      <StyledImage fluid={imageData} alt={title} />
    </Link>
    <InnerWrapper>
      <h2>
        <Link to={`/${slug}/`}>{title}</Link>
      </h2>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}
      >
        <span style={{ display: "inline-block", paddingTop: 5 }}>
          Build with:
        </span>

        {tags.map(tag => (
          <svg style={{ height: "1.7rem", width: "1.7rem", marginLeft: "1rem" }}>
            <use xlinkHref={`./icons/sprite.svg#icon-${tag.toLowerCase()}`} />
          </svg>
        ))}
      </div>
      <p>
        <Link to={`/${slug}/`}>
          Details
          <Icon src={iconArrowRight} alt="Right Arrow" />
        </Link>
      </p>
    </InnerWrapper>
  </StyledWrapper>
);

export default ProjectPreview;
