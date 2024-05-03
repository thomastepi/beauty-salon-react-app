import React from "react";
import SharedLayout from "./SharedLayout";
import {
  Box,
  Center,
  VStack,
  HStack,
  Text,
  Heading,
  Grid,
} from "@chakra-ui/react";
import { BillingInfo, PageHeadingBox, StaticGiftCard } from "../components";
import img from "../assets/images/smiling-mary.jpg";
import { useSelector } from "react-redux";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <SharedLayout>
        <Center>
          <VStack w="100%">
            <PageHeadingBox img={img} title="Checkout" />
            <Grid templateColumns={"repeat(2, 1fr)"} gap={9}>
              <BillingInfo />
              <Box>
                <VStack spacing={5}>
                  <Heading>Your Order</Heading>
                  <VStack spacing={5}>
                    {cart.items.map((item) => (
                      <HStack spacing={4} key={item.id}>
                        <StaticGiftCard price={item.price} />
                        <Text>Quantity: {item.quantity}</Text>
                      </HStack>
                    ))}
                  </VStack>
                  <HStack w="100%" justify={"space-between"}>
                    <Heading size="md">Total</Heading>
                    <Text>${cart.total}</Text>
                  </HStack>
                </VStack>
              </Box>
            </Grid>
          </VStack>
        </Center>
      </SharedLayout>
    </>
  );
};

export default Checkout;
