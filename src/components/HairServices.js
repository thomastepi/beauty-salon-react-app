import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { LocServices, BraidServices, WeaveServices } from "./salonServices";

const HairServices = () => {
  return (
    <Box w="100%">
      <VStack spacing={9}>
        <LocServices />
        <BraidServices />
        <WeaveServices />
      </VStack>
    </Box>
  );
};

export default HairServices;
