import React, { useState } from "react";
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
  useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { PageHeadingBox, StaticGiftCard } from "../components";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";

const Checkout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const isMobile = useBreakpointValue({ base: true, md: true, lg: false });
  const cart = useSelector((state) => state.cart);
  const toast = useToast();

  const makePayment = async () => {
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
    try {
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
      if (result.error) {
        toast({
          title: "Checkout failed.",
          description: result.error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: "Please try again later.",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/salon1.jpg`}
            title="Complete Your Gift Purchase"
          />
          <Center w="80%">
            <Grid
              templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(2, 1fr)"}
              gap={9}
            >
              <Box>
                <Table>
                  <Thead>
                    <Tr>
                      <Th textAlign="center">Recipient</Th>
                      <Th textAlign="center">Quantity</Th>
                      <Th textAlign="center">Gift Card</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {cart.items.map((item) => (
                      <Tr key={item.id}>
                        <Td textAlign="center">{item.recipientEmail}</Td>
                        <Td textAlign="center">{item.quantity}</Td>
                        <Td textAlign="center">${item.price}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </Box>
              <Box>
                <VStack spacing={5} border="1px solid white" p="20px">
                  <Heading>Order Summary</Heading>
                  <VStack spacing={5}>
                    {cart.items.map((item) => (
                      <HStack spacing={4} key={item.id}>
                        <StaticGiftCard price={item.price} />
                        <Text as="b">x{item.quantity}</Text>
                      </HStack>
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
                  <VStack spacing={0} mt="50px">
                    <Button
                      px="10rem"
                      isLoading={isLoading}
                      onClick={() => makePayment()}
                    >
                      Pay Now
                    </Button>
                    <span style={{ fontStyle: "italic" }}>
                      (Secured by Stripe)
                    </span>
                  </VStack>
                </VStack>
              </Box>
            </Grid>
          </Center>
        </VStack>
      </Center>
    </>
  );
};

export default Checkout;
