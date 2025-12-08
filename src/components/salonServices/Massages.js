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
    name: "The Blissful Escape",
    description: "A full-body Swedish massage that focuses on relaxation and stress relief.",
    price: "CFA 10,000",
  },
  {
    name: "The Tension Tamer",
    description: "A deep tissue massage that targets muscle knots and tension. Perfect for athletes or those with chronic pain.",
    price: "CFA 10,000",
  },
  {
    name: "The Aromatic Journey",
    description: "A relaxing massage with your choice of essential oils.",
    price: "CFA 7,500",
  },
];

const Massages = () => {
  return (
    <Box w={{ base: "95%", md: "90%" }} mx="auto">
      <VStack spacing={8} align="stretch">
        <Heading fontFamily="heading" size="2xl" textAlign="center">
          Massages
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

export default Massages;
