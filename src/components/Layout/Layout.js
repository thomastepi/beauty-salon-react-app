import React from "react";
import { Header, Footer } from "../index";

const Layout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#000", color: "white" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
