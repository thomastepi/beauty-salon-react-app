import React from "react";
import { Facials, Massages } from "./salonServices";
import { Box, VStack } from "@chakra-ui/react";

const SpaServices = () => {
  return (
    <Box w="100%">
      <VStack spacing={9}>
        <Facials />
        <Massages />
      </VStack>
    </Box>
  );
};

export default SpaServices;
