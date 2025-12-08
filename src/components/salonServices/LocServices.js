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
    name: "Sisterlocks",
    description: "Creates small, permanent locs for low-maintenance style.",
    price: "Starts at CFA 50,000",
  },
  {
    name: "Traditional Loc Start-up",
    description: "Creates new locs using the interlocking method.",
    price: "Starts at CFA 30,000",
  },
  {
    name: "Loc Retwist",
    description: "Tightens and maintains existing locs.",
    price: "Starts at CFA 20,000",
  },
  {
    name: "Loc Detox",
    description: "Removes build-up and promotes a healthy scalp.",
    price: "Starts at CFA 20,000",
  },
  {
    name: "Loc Jewelry Installation",
    description: "Personalize your locs with decorative accents.",
    price: "Starts at CFA 10,000",
  },
];

const LocServices = () => {
  return (
    <Box w={{ base: "95%", md: "90%" }} mx="auto">
      <VStack spacing={8} align="stretch">
        <Heading fontFamily="heading" size="2xl" textAlign="center">
          Loc Services
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

export default LocServices;
