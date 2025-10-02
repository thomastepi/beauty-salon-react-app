import { Card, CardBody, Stack, VStack, Heading, Text } from "@chakra-ui/react";
import { currencify } from "../utils/currencify";

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
            <Text fontSize="2xl" fontWeight="bold">
              {currencify(price, "xaf", "custom", "Frs", "suffix")}
            </Text>
          </VStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default StaticGiftCard;
