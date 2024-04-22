import React from "react";
import { Header, Footer } from "../components";

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default SharedLayout;
