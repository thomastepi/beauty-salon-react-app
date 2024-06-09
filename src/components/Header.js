import React from "react";
import {
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  useBreakpointValue,
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
  return (
    <>
      <Center py={4} bg="black" color="white">
        <HStack w="80%" justify="space-between">
          {isMobile && <DrawerPanel />}
          <HStack
            spacing={3}
            cursor={"pointer"}
            onClick={() => {
              navigate("/");
            }}
          >
            {!isMobile && <Image src={logo} w="3rem" />}
            <VStack spacing={1}>
              <Heading fontFamily="pacifico" size={isMobile ? "lg" : "md"}>
                ANNETTE'S
              </Heading>
              <Text fontSize={isMobile ? "lg" : "sm"} fontFamily="Pacifico">
                Beauty & SPA
              </Text>
            </VStack>
          </HStack>
          {!isMobile && <NavLinks flexDir={"row"} />}
          <HStack>
            <FontAwesomeIcon
              onClick={() => navigate("/cart")}
              cursor="pointer"
              icon={faCartShopping}
              size="lg"
            />
            {cartItemCount > 0 && (
              <Badge ml={-2} colorScheme="red" borderRadius="full">
                {cartItemCount}
              </Badge>
            )}
          </HStack>
        </HStack>
      </Center>
    </>
  );
};

export default Header;
