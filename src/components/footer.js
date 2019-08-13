import React from "react";
import styled from "styled-components";

const StyledFooter = styled.header`
  padding: 5rem 5rem 1rem;

  @media (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

const Footer = () => (
  <StyledFooter>
    <span>&copy; {new Date().getFullYear()} Dominik Manowski</span>
  </StyledFooter>
);

export default Footer;
