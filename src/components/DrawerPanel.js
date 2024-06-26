import React from "react";
import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import useIsMobile from "../hooks/useIsMobile";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerFooter,
  DrawerCloseButton,
  Box,
  HStack,
  Button,
  Center,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "./NavLinks";

const DrawerPanel = () => {
  const isMobile = useIsMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bg="black">
        {" "}
        {<FontAwesomeIcon color="white" icon={faBars} size="2x" />}
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="black">
          <DrawerCloseButton color="white" />

          <DrawerBody marginTop={20}>
            <Box py={4}>
              <Box color="white">
                <NavLinks flexDir={"column"} />
              </Box>
            </Box>
          </DrawerBody>
          {isMobile && (
            <Center>
              <DrawerFooter color="white" w="50%" mb="40px">
                <HStack spacing={7} w="100%" justify={"space-between"}>
                  <FontAwesomeIcon icon={faPhone} size="2xl" />
                  <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                </HStack>
              </DrawerFooter>
            </Center>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerPanel;
