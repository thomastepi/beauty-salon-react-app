import React from "react";
import { Header } from "../components";

export const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SharedLayout;
