import { faBars } from "@fortawesome/free-solid-svg-icons";
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
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import NavLinks from "./NavLinks";

const DrawerPanel = ({ isScrolled }) => {
  const isMobile = useIsMobile();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} bg="transparent" _hover={{ bg: "transparent" }}>
        {" "}
        {
          <FontAwesomeIcon
            color={isScrolled ? "brand.text" : "white"}
            icon={faBars}
            size="2x"
          />
        }
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.background">
          <DrawerCloseButton color="brand.text" />

          <DrawerBody marginTop={20}>
            <Box py={4}>
              <Box>
                <NavLinks
                  onClose={onClose}
                  flexDir={"column"}
                  isScrolled={true}
                />
              </Box>
            </Box>
          </DrawerBody>
          {isMobile && (
            <Center>
              <DrawerFooter color="brand.text" w="50%" mb="40px">
                <HStack spacing={7} w="100%" justify={"space-between"}>
                  <a
                    href="https://wa.me/12144314816"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="2xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/tt_tepi/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="2xl" />
                  </a>
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
