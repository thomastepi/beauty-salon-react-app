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
    name: "Njangala Cornrows",
    description: "Classic cornrows in various styles and patterns.",
    price: "Starts at CFA 10,000",
  },
  {
    name: "Fulani Braids",
    description: "Intricate braided style with intricate details and cowrie shells (optional).",
    price: "Starts at CFA 15,000",
  },
  {
    name: "Plaited Braids",
    description: "Braided hairstyle styled into an elegant updo.",
    price: "Starts at CFA 15,000",
  },
  {
    name: "Goddess Faux Locs",
    description: "Temporary loc extensions for a protective and stylish look.",
    price: "Starts at CFA 20,000",
  },
  {
    name: "Box Braids",
    description: "Offered in various lengths and thicknesses.",
    price: "Starts at CFA 20,000",
  },
];

const BraidServices = () => {
  return (
    <Box w={{ base: "95%", md: "90%" }} mx="auto">
      <VStack spacing={8} align="stretch">
        <Heading fontFamily="heading" size="2xl" textAlign="center">
          Braiding Services
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

export default BraidServices;
