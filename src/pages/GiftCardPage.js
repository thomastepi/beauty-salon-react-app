import React from "react";
import SharedLayout from "./SharedLayout";
import { products } from "../utils/products";
import { Center, VStack, Grid, useBreakpointValue } from "@chakra-ui/react";
import { GiftCard, PageHeadingBox } from "../components";

const GiftCardPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  return (
    <SharedLayout>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            title="Treat Someone Special: Purchase a Gift Card"
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/gift.jpg`}
          />
          <Center w="80%">
            <Grid
              templateColumns={
                isMobile ? "repeat(1, 1fr)" : "repeat(1, 1fr 1fr 1fr)"
              }
              gap={"12"}
            >
              {products.map((product) => (
                <GiftCard
                  key={product.id}
                  price={product.price}
                  product={product}
                  id={product.id}
                />
              ))}
            </Grid>
          </Center>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default GiftCardPage;
