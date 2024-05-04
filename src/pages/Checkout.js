import React, { useState } from "react";
import SharedLayout from "./SharedLayout";
import {
  Box,
  Center,
  VStack,
  HStack,
  Text,
  Heading,
  Grid,
  Button,
  useToast,
} from "@chakra-ui/react";
import { BillingInfo, PageHeadingBox, StaticGiftCard } from "../components";
import img from "../assets/images/smiling-mary.jpg";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart);
  const toast = useToast();

  const makePayment = async () => {
    try {
      setIsLoading(true);
      const stripe = await loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
      );
      const body = {
        items: cart.items,
      };
      const headers = {
        "Content-Type": "application/json",
      };
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/create-checkout-session`,
        {
          method: "POST",
          headers,
          body: JSON.stringify(body),
        }
      );
      const session = await response.json();
      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      setIsLoading(false);
    } catch (error) {
      if (error) {
        toast({
          title: "An error occurred.",
          description: "Unable to process payment",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
      console.error("Error:", error);
      setIsLoading(false);
    }
  };
  return (
    <>
      <SharedLayout>
        <Center>
          <VStack w="100%">
            <PageHeadingBox img={img} title="Checkout" />
            <Grid templateColumns={"repeat(2, 1fr)"} gap={9}>
              <BillingInfo />
              <Box>
                <VStack spacing={5} border="1px solid white" p="10px">
                  <Heading>Your Order</Heading>
                  <VStack spacing={5}>
                    {cart.items.map((item) => (
                      <>
                        <HStack spacing={4} key={item.id}>
                          <StaticGiftCard price={item.price} />
                          <Text as="b">x{item.quantity}</Text>
                        </HStack>
                      </>
                    ))}
                  </VStack>
                  <HStack w="50%" justify={"space-between"}>
                    <Heading size="md">Sub Total:</Heading>
                    <Text>${cart.total}</Text>
                  </HStack>
                  <HStack w="50%" justify={"space-between"}>
                    <Heading size="md">Total Amount:</Heading>
                    <Text>${cart.total}</Text>
                  </HStack>
                  <Button
                    w="90%"
                    isLoading={isLoading}
                    onClick={() => makePayment()}
                  >
                    Pay
                  </Button>
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
