import React from "react";
import SharedLayout from "./SharedLayout";
import img from "../assets/images/gift.jpg";
import { Center, VStack, Grid, useBreakpointValue } from "@chakra-ui/react";
import { GiftCard, PageHeadingBox } from "../components";

const GiftCardPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const giftCardInfo = [
    { id: 1, price: 50, quantity: 1 },
    { id: 2, price: 100, quantity: 1 },
    { id: 3, price: 150, quantity: 1 },
    { id: 4, price: 200, quantity: 1 },
  ];
  return (
    <SharedLayout>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            title="Treat Someone Special: Purchase a Gift Card"
            img={img}
          />
          <Center w="80%">
            <Grid
              templateColumns={
                isMobile ? "repeat(1, 1fr)" : "repeat(1, 1fr 1fr 1fr)"
              }
              gap={"12"}
            >
              {giftCardInfo.map((info) => (
                <GiftCard key={info.id} price={info.price} info={info} />
              ))}
            </Grid>
          </Center>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default GiftCardPage;
