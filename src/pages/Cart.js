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
  useBreakpointValue,
} from "@chakra-ui/react";
import { CartItem, PageHeadingBox } from "../components";
import { currencify } from "../utils/currencify";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <Center>
        <VStack w="100%">
          <PageHeadingBox
            img={`${process.env.REACT_APP_IMAGEKIT_URL}/salon-app/back-view-afro-hairstyle.jpg`}
            title="Review Your Cart"
          />
          <Box w={{ base: "95%", md: "70%" }} py="5rem">
            <Box border="1px solid white" p={{ base: "10px", md: "25px" }}>
              <CartItem />
            </Box>
            {total > 0 && (
              <>
                <Stack
                  flexDir={isMobile ? "column" : "row"}
                  justifyContent="space-between"
                  py="20px"
                  spacing={9}
                >
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
                    <Text
                      fontSize={{ base: "xl", md: "2xl" }}
                      fontWeight="bold"
                      textAlign="right"
                    >
                      Total: {currencify(total, "xaf", "symbol", "", "prefix")}
                    </Text>
                  </VStack>
                </Box>
              </>
            )}
          </Box>
        </VStack>
      </Center>
    </>
  );
};

export default Cart;
