import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DrawerPanel = () => {
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
                <VStack spacing={7}>
                  <>
                    <Text>Home</Text>
                  </>
                  <>
                    <Text>Salon Services</Text>
                  </>
                  <>
                    <Text>SPA Services</Text>
                  </>
                  <>
                    <Text>Shop</Text>
                  </>
                  <>
                    <Text>Our Team</Text>
                  </>
                  <>
                    <Text>Refer a Friend</Text>
                  </>
                  <>
                    <Text>COntact Us</Text>
                  </>
                </VStack>
              </Box>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerPanel;
