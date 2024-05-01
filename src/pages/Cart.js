import React from "react";
import { Box, Text, Center, VStack } from "@chakra-ui/react";
import SharedLayout from "./SharedLayout";
import { CartItem, PageHeadingBox } from "../components";
import { useSelector } from "react-redux";
import img from "../assets/images/spa-room.jpg";

const Cart = () => {
  const { total } = useSelector((state) => state.cart);
  return (
    <SharedLayout>
      <Center>
        <VStack w="100%">
          <PageHeadingBox img={img} title="Review Your Cart & Checkout" />
          <Box w="50%">
            <Box>
              <CartItem />
            </Box>
            {total > 0 && (
              <Box>
                <Text fontSize="3xl">Total: ${total}</Text>
              </Box>
            )}
          </Box>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default Cart;
