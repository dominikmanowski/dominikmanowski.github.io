import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 5rem;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const StyledParagraph = styled.p`
  margin-bottom: 2rem;
`;

const Header = () => (
  <StyledHeader>
    <h1 hidden>Dominik Manowski</h1>
    <StyledParagraph>Hi, my name is Dominik.</StyledParagraph>
    <StyledParagraph>
      I'm passionate about front-end development, focused on JavaScript. I've
      graduated Junior Front-end Developer and React courses at infoShare
      Academy.
    </StyledParagraph>
    <StyledParagraph>
      I am constantly seeking opportunities to learn new things, at the same
      time, constantly improving my skills. I enjoy creating great looking web
      pages and apps with rock-solid code.
    </StyledParagraph>
  </StyledHeader>
);
export default Header;
