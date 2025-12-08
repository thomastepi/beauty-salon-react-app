import React, { useState, useEffect } from "react";
import {
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  useBreakpointValue,
  Box,
  IconButton,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DrawerPanel from "./DrawerPanel";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.jpeg";

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const navigate = useNavigate();
  const cartItemCount = useSelector((state) => state.cart.amount);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartColor = isScrolled ? "brand.text" : "white";

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      transition="background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out"
      bg={isScrolled ? "brand.background" : "transparent"}
      boxShadow={isScrolled ? "md" : "none"}
    >
      <Center py={4}>
        <HStack w="90%" maxW="1200px" justify="space-between">
          {isMobile && <DrawerPanel isScrolled={isScrolled} />}
          <HStack
            spacing={4}
            cursor={"pointer"}
            onClick={() => navigate("/")}
            color={isScrolled ? "brand.text" : "white"}
          >
            {!isMobile && (
              <Image
                src={logo}
                w="4rem"
                alt="Annette's Beauty & SPA logo"
                borderRadius="full"
              />
            )}
            <VStack spacing={0}>
              <Heading fontFamily="pacifico" size={isMobile ? "lg" : "xl"}>
                ANNETTE'S
              </Heading>
              <Text
                fontSize={isMobile ? "lg" : "sm"}
                fontFamily="body"
                fontWeight="500"
              >
                Beauty & SPA
              </Text>
            </VStack>
          </HStack>
          {!isMobile && <NavLinks isScrolled={isScrolled} flexDir={"row"} />}
          <HStack>
            <IconButton
              aria-label="Open shopping cart"
              icon={<FontAwesomeIcon icon={faCartShopping} />}
              onClick={() => navigate("/cart")}
              bg="transparent"
              color={cartColor}
              _hover={{ bg: "transparent", color: isScrolled ? "brand.primary" : "gray.300" }}
              size="lg"
            />
            {cartItemCount > 0 && (
              <Badge
                ml={-2}
                bg="brand.accent"
                color="brand.background" // Text color for the badge
                variant="solid"
                borderRadius="full"
                pointerEvents="none" 
              >
                {cartItemCount}
              </Badge>
            )}
          </HStack>
        </HStack>
      </Center>
    </Box>
  );
};

export default Header;

