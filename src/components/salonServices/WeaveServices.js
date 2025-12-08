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
    name: "Ghana Weaving",
    description: "Sew-in weave with intricate cornrow base for a sleek and stylish look.",
    price: "Starts at CFA 10,000",
  },
  {
    name: "Microlink Weaves",
    description: "Protective weave technique with minimal tension on natural hair.",
    price: "Starts at CFA 25,000",
  },
  {
    name: "Kinky Twist Weave",
    description: "Provides natural-looking volume and length.",
    price: "Starts at CFA 20,000",
  },
  {
    name: "Frontal Sew-In",
    description: "Creates a seamless and natural-looking weave.",
    price: "Additional service - CFA 15,000",
  },
];

const WeaveServices = () => {
  return (
    <Box w={{ base: "95%", md: "90%" }} mx="auto">
      <VStack spacing={8} align="stretch">
        <Heading fontFamily="heading" size="2xl" textAlign="center">
          Weaving Services
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

export default WeaveServices;
