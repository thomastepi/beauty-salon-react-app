import {
  Card,
  CardBody,
  CardFooter,
  Text,
  Stack,
  Heading,
  VStack,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { currencify } from "../utils/currencify";
import logo from "../assets/images/logo.jpeg";

const GiftCard = ({ price, id }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/product/${id}`)}
      bg="brand.surface"
      color="brand.text"
      border="1px solid"
      borderColor="brand.surface" // Seamless integration with the surface color
      boxShadow="lg"
      cursor="pointer"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "xl",
      }}
    >
      <CardBody align="center" p={8}>
        <Stack spacing="5">
          <HStack justify="center">
            <Image src={logo} w="3.5rem" alt="Annette's Beauty & SPA Logo" borderRadius="full" />
            <VStack spacing={0}>
              <Heading size="lg" fontFamily="pacifico" color="brand.primary">
                Annette's
              </Heading>
              <Heading size="sm" fontFamily="body" fontWeight="500">
                Beauty & SPA
              </Heading>
            </VStack>
          </HStack>

          <VStack spacing={1}>
            <Text fontSize="3xl" fontWeight="bold" color="brand.primary">
              {currencify(price, "xaf", "symbol", "", "prefix")}
            </Text>
            <Text fontSize="md" color="brand.textMuted">
              Gift Card
            </Text>
          </VStack>
        </Stack>
      </CardBody>
      <CardFooter
        bg="brand.background" // Subtle contrast with card body
        w="100%"
        justify="center"
        py={4}
        borderBottomRadius="md"
      >
        <Center>
          <Text fontWeight="bold" color="brand.primary">
            Buy Gift Card
          </Text>
        </Center>
      </CardFooter>
    </Card>
  );
};

export default GiftCard;
