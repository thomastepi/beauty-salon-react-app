import React from "react";
import { Header, Footer } from "../components";
import { Box } from "@chakra-ui/react";

export const SharedLayout = ({ children }) => {
  return (
    <Box bg="#000" color="white">
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default SharedLayout;
