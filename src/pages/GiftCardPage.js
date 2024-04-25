import React from "react";
import SharedLayout from "./SharedLayout";
import img from "../assets/images/gift.jpg";
import { Center, VStack, Grid } from "@chakra-ui/react";
import { GiftCard, PageHeadingBox } from "../components";

const GiftCardPage = () => {
  const giftCardPrices = [50, 100, 150, 200];
  return (
    <SharedLayout>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            title="Treat Someone Special: Purchase a Gift Card"
            img={img}
          />
          <Center w="80%">
            <Grid templateColumns="repeat(1, 1fr 1fr 1fr)" gap={"12"}>
              {giftCardPrices.map((price) => (
                <GiftCard key={price} price={price} />
              ))}
            </Grid>
          </Center>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default GiftCardPage;
