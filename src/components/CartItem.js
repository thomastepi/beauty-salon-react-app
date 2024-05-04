import React from "react";
import {
  Box,
  Text,
  Button,
  Spacer,
  Stack,
  VStack,
  Heading,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ChevronUpIcon, ChevronDownIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseAmount,
  decreaseAmount,
} from "../features/cart/cartSlice";
import StaticGiftCard from "./StaticGiftCard";

const CartItem = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Box>
        {cart.items.length > 0 ? (
          <Stack spacing={6}>
            {cart.items.map((item) => (
              <HStack key={item.id}>
                <HStack>
                  <StaticGiftCard price={item.price} />
                  <Tooltip label="remove item">
                    <Button onClick={() => dispatch(removeFromCart(item.id))}>
                      <DeleteIcon />
                    </Button>
                  </Tooltip>
                </HStack>
                <Spacer />
                <Box w="100%" display="flex" justifyContent="center">
                  <VStack w="50%" spacing={0} alignItems="start">
                    <Text>
                      <span style={{ fontWeight: "bold", fontSize: "large" }}>
                        Recipient:
                      </span>{" "}
                      {item.recipientEmail}
                    </Text>
                    <Text>
                      <span style={{ fontWeight: "bold", fontSize: "large" }}>
                        Sender:
                      </span>{" "}
                      {item.senderName}
                    </Text>
                    <Text>
                      <span style={{ fontWeight: "bold", fontSize: "large" }}>
                        Message:
                      </span>{" "}
                      {item.message}
                    </Text>
                  </VStack>
                </Box>
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
          <VStack spacing={7}>
            <Heading align="center">Your cart is empty</Heading>
            <Button onClick={() => navigate("/gift-cards")}>
              Return to shop
            </Button>
          </VStack>
        )}
      </Box>
    </>
  );
};

export default CartItem;
