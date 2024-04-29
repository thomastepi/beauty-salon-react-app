import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  Center,
  Badge,
  VStack,
} from "@chakra-ui/react";

const GiftCard = ({ price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <Card
        maxW="sm"
        bg="#0000"
        color="white"
        border={"1px solid white"}
        align="center"
        w="lg"
        cursor={isHovered ? "pointer" : "default"}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <>
          <CardBody align="center">
            <Stack mt="6" spacing="4">
              <VStack spacing={0}>
                <Heading size="lg" fontFamily={"pacifico"}>
                  Annette's
                </Heading>
                <Heading size="sm" fontFamily={"pacifico"}>
                  Beauty & SPA
                </Heading>
              </VStack>

              <VStack spacing={0}>
                <Text fontSize="3xl" fontWeight="bold">
                  <Badge mr="1" fontSize=".6em" colorScheme="AlphaBlack">
                    $
                  </Badge>
                  {price}
                </Text>
              </VStack>
            </Stack>
          </CardBody>
          <CardFooter
            position="relative"
            h="60px"
            bg={isHovered ? "#F6F5F5" : "#0000"}
            transition="background .4s ease-in-out"
            w="100%"
            justify="center"
          >
            <>
              <Center>
                <Text color={isHovered ? "black" : "white"}>
                  {isHovered ? "Add To Cart" : "Gift Card"}
                </Text>
              </Center>
            </>
          </CardFooter>
        </>
      </Card>
    </>
  );
};

export default GiftCard;
