import React from "react";
import { Center, Heading, Text, VStack, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../hooks/useIsMobile";
import DrawerPanel from "./DrawerPanel";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  return (
    <>
      <Center py={4} bg="black" color="white">
        <HStack w="80%" justify="space-between">
          {isMobile && <DrawerPanel />}
          <VStack
            spacing={1}
            cursor={"pointer"}
            onClick={() => {
              navigate("/");
            }}
          >
            <Heading fontFamily="pacifico" size={isMobile ? "lg" : "lg"}>
              ANNETTE'S
            </Heading>
            <Text fontSize={isMobile ? "lg" : "md"} fontFamily="Pacifico">
              Beauty & SPA
            </Text>
          </VStack>
          {!isMobile && <NavLinks />}
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </HStack>
      </Center>
    </>
  );
};

export default Header;
