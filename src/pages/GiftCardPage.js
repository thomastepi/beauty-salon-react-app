import { products } from "../utils/products";
import {
  Center,
  VStack,
  Grid,
  useBreakpointValue,
  Box,
  Text,
  Heading,
} from "@chakra-ui/react";
import { GiftCard, PageHeadingBox } from "../components";

const GiftCardPage = () => {
  const columns =
    useBreakpointValue({
      base: 1,
      md: 2,
      lg: 3,
    }) ?? 1;

  return (
    <Box bg="brand.background">
      <PageHeadingBox
        title="The Perfect Gift of Pampering"
        img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/salon2.jpg`}
      />

      <Center py={{ base: 10, md: 20 }}>
        <VStack w="90%" maxW="1200px" spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading as="h2" fontFamily="heading" size="2xl">
              Treat Someone Special
            </Heading>
            <Text maxW="600px">
              Give the gift of relaxation and beauty with an Annette&apos;s
              Beauty &amp; Spa gift card. Perfect for birthdays, holidays, or
              just because, our gift cards can be used for any of our services
              or products.
            </Text>
          </VStack>

          <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={10}>
            {products.map((product) => (
              <GiftCard
                key={product.id}
                price={product.price}
                product={product}
                id={product.id}
              />
            ))}
          </Grid>
        </VStack>
      </Center>
    </Box>
  );
};

export default GiftCardPage;

