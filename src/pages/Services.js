import React, { useState } from "react";
import { Center, VStack, Button, HStack } from "@chakra-ui/react";
import img from "../assets/images/spa-natural-background.jpg";
import SharedLayout from "./SharedLayout";
import { PageHeadingBox, HairServices, SpaServices } from "../components";

const Services = () => {
  const [showHairServices, setShowHairServices] = useState(true);
  const [showSpaServices, setShowSpaServices] = useState(false);

  const handleShowHairServices = () => {
    setShowHairServices(true);
    setShowSpaServices(false);
  };

  const handleShowSpaServices = () => {
    setShowSpaServices(true);
    setShowHairServices(false);
  };
  return (
    <SharedLayout>
      <Center bg="#000" color="white">
        <VStack w="100%">
          <PageHeadingBox
            title="Relax, Rejuvenate, and Beautify: Our Services Await"
            img={img}
          />
          <Center py="50px">
            <VStack spacing={6} align="center">
              <HStack>
                <Button
                  colorScheme={showHairServices ? "whiteAlpha" : "blackAlpha"}
                  onClick={() => handleShowHairServices()}
                  p="30px"
                >
                  Hair Services
                </Button>
                <Button
                  colorScheme={showSpaServices ? "whiteAlpha" : "blackAlpha"}
                  onClick={() => handleShowSpaServices()}
                  p="30px"
                >
                  SPA Services
                </Button>
              </HStack>
              <hr style={{ width: "100%", marginBottom: "60px" }} />
              {showHairServices && <HairServices />}
              {showSpaServices && <SpaServices />}
            </VStack>
          </Center>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default Services;
