import React from "react";
import {
  Box,
  Text,
  Button,
  Spacer,
  Card,
  CardBody,
  Stack,
  VStack,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/cartSlice";

const CartItem = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <Box>
        {cart.items.length > 0 ? (
          <Stack spacing={6}>
            {cart.items.map((item) => (
              <HStack key={item.id}>
                <HStack>
                  <Card
                    maxW="sm"
                    bg="#0000"
                    color="white"
                    border={"1px solid white"}
                    align="center"
                    w="lg"
                  >
                    <CardBody align="center">
                      <Stack mt="6" spacing="4">
                        <VStack spacing={0}>
                          <Heading size="lg" fontFamily={"pacifico"}>
                            Annette's
                          </Heading>
                          <Heading size="sm" fontFamily={"pacifico"}>
                            Beauty & SPA
                          </Heading>
                        </VStack>
                        <VStack spacing={0}>
                          <Text fontSize="3xl" fontWeight="bold">
                            <Badge
                              mr="1"
                              fontSize=".6em"
                              colorScheme="AlphaBlack"
                            >
                              $
                            </Badge>
                            {item.price}
                          </Text>
                        </VStack>
                      </Stack>
                    </CardBody>
                  </Card>
                  <Button onClick={() => dispatch(removeFromCart(item.id))}>
                    <DeleteIcon />
                  </Button>
                </HStack>
                <Spacer />
                <Box>
                  <Button onClick={() => dispatch(increaseAmount(item.id))}>
                    <ChevronUpIcon />
                  </Button>
                  <Text align="center">{item.quantity}</Text>
                  <Button onClick={() => dispatch(decreaseAmount(item.id))}>
                    <ChevronDownIcon />
                  </Button>
                </Box>
              </HStack>
            ))}
          </Stack>
        ) : (
          <Heading align="center">Your Cart is empty</Heading>
        )}
      </Box>
    </>
  );
};

export default CartItem;
