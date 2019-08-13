import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import Footer from "./footer";

import "./layout.css";

const Layout = ({ children }) => (
  <div className="container">
    <GlobalStyle />
    <main className="content">{children}</main>
    <Footer />
  </div>
);

export default Layout;
