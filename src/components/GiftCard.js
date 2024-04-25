import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Button,
  Divider,
  Stack,
  Heading,
  Center,
  Badge,
  VStack,
} from "@chakra-ui/react";

const GiftCard = ({ price }) => {
  const [isHovered, setIsHovered] = useState("Buy Now");

  return (
    <>
      <Card
        maxW="sm"
        bg="#0000"
        color="white"
        border={"1px solid white"}
        align="center"
        w="lg"
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

              <Text fontSize="3xl" fontWeight="bold">
                <Badge mr="1" fontSize=".6em" colorScheme="AlphaBlack">
                  $
                </Badge>
                {price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter bg="#F6F5F5" w="100%" justify="center">
            <Center>
              <Button
                colorScheme="blackAlpha"
                onMouseEnter={() => setIsHovered("Add to Cart")}
                onMouseLeave={() => setIsHovered("Buy Now")}
              >
                {isHovered}
              </Button>
            </Center>
          </CardFooter>
        </>
      </Card>
    </>
  );
};

export default GiftCard;
