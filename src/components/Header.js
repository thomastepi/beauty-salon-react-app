import React from "react";
import {
  Center,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import DrawerPanel from "./DrawerPanel";
import NavLinks from "./NavLinks";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const navigate = useNavigate();
  const cartItemCount = 2;
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
          {!isMobile && <NavLinks flexDir={"row"} />}
          <HStack>
            <FontAwesomeIcon cursor="pointer" icon={faCartShopping} size="lg" />
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
