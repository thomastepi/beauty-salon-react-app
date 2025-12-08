import React from "react";
import {
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Box,
  Divider,
} from "@chakra-ui/react";

const services = [
  {
    name: "The Parisian Glow",
    description: "This luxurious facial uses French skincare products to deeply cleanse, exfoliate, and hydrate your skin. Includes a facial massage and mask.",
    price: "CFA 15,000",
  },
  {
    name: "The Gentleman's Recharge",
    description: "A facial designed specifically for men's skin. Includes a deep cleanse, exfoliation, and hydrating mask to leave skin feeling refreshed and invigorated.",
    price: "CFA 10,000",
  },
];

const Facials = () => {
  return (
    <Box w={{ base: "95%", md: "90%" }} mx="auto">
      <VStack spacing={8} align="stretch">
        <Heading fontFamily="heading" size="2xl" textAlign="center">
          Facials
        </Heading>
        <Divider />
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={8}>
          {services.map((service) => (
            <Box key={service.name} p={6} borderRadius="md" bg="brand.surface" boxShadow="md">
              <VStack align="flex-start" spacing={3}>
                <Heading fontFamily="heading" size="lg">
                  {service.name}
                </Heading>
                <Text>{service.description}</Text>
                <Text fontWeight="bold" color="brand.primary">
                  {service.price}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Facials;
