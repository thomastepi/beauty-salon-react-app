import React from "react";
import {
  Box,
  Text,
  Center,
  VStack,
  Heading,
  Button,
  Stack,
  HStack,
} from "@chakra-ui/react";
import SharedLayout from "./SharedLayout";
import { CartItem, PageHeadingBox } from "../components";
import { useSelector, useDispatch } from "react-redux";
import img from "../assets/images/spa-room.jpg";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <SharedLayout>
      <Center>
        <VStack w="100%">
          <PageHeadingBox img={img} title="Review Your Cart & Checkout" />
          <Box w="70%">
            <Box border="1px solid white" p="10px">
              <CartItem />
            </Box>
            {total > 0 && (
              <>
                <Stack flexDir="row" justifyContent="space-between" py="20px">
                  <Box>
                    <Button onClick={() => navigate("/gift-cards")}>
                      Continue Shopping
                    </Button>
                  </Box>
                  <HStack>
                    <Button
                      onClick={() => {
                        dispatch(clearCart());
                        localStorage.removeItem("persist:root");
                      }}
                    >
                      Clear Cart
                    </Button>
                    <Button onClick={() => navigate("/checkout")}>
                      Proceed to Checkout
                    </Button>
                  </HStack>
                </Stack>
                <Box w="100%" py="60px">
                  <VStack alignItems="end">
                    <Heading>Cart Totals</Heading>
                    <Text fontSize="3xl">Total: ${total}</Text>
                  </VStack>
                </Box>
              </>
            )}
          </Box>
        </VStack>
      </Center>
    </SharedLayout>
  );
};

export default Cart;
