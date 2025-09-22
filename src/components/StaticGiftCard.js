import React from "react";
import {
  Card,
  CardBody,
  Stack,
  VStack,
  Heading,
  Badge,
  Text,
} from "@chakra-ui/react";

const StaticGiftCard = ({ price }) => {
  return (
    <Card
      maxW="sm"
      bg="#E2DFD0"
      color="black"
      border={"1px solid white"}
      align="center"
      w="100%"
      px="4rem"
    >
      <CardBody align="center">
        <Stack mt="1" spacing="4">
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
              {price}
              <Badge mr="1" fontSize=".6em" color="AlphaBlack">
                F
              </Badge>
            </Text>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default StaticGiftCard;
