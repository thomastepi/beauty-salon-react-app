import React from "react";
import { Center, Heading, Text, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../hooks/useIsMobile";
import DrawerPanel from "./DrawerPanel";

const Header = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <Center py={4} bg="black" color="white">
        <HStack w="80%" justify="space-between">
          {!isMobile && (
            <HStack spacing={9}>
              <FontAwesomeIcon icon={faPhone} size="lg" />
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </HStack>
          )}
          <HStack spacing={isMobile ? 1 : 5} flexDir={isMobile && "column"}>
            <Heading size={isMobile ? "lg" : "3xl"} fontFamily={"Montserrat"}>
              ANNETTE'S
            </Heading>
            <Text fontSize={isMobile ? "lg" : "3xl"} fontFamily={"Montserrat"}>
              Beauty Salon
            </Text>
          </HStack>
          <DrawerPanel />
        </HStack>
      </Center>
    </>
  );
};

export default Header;
