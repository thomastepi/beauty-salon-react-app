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
  Divider,
  useBreakpointValue,
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
  const isMobile = useBreakpointValue({ base: true, md: false });
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Box>
        {cart.items.length > 0 ? (
          <Stack spacing={6}>
            {cart.items.map((item, index) => (
              <>
                <HStack flexDir={isMobile && "column"} key={item.id}>
                  <HStack w={{ base: "100%", md: "50%" }}>
                    <StaticGiftCard price={item.price} />
                    <Tooltip label="remove item">
                      <Button onClick={() => dispatch(removeFromCart(item.id))}>
                        <DeleteIcon />
                      </Button>
                    </Tooltip>
                  </HStack>
                  <Spacer />
                  <HStack w={isMobile ? "80%" : "50%"}>
                    <Box w="100%" display="flex" justifyContent="center">
                      <VStack w="100%" spacing={0} alignItems="start">
                        <Text>
                          <span
                            style={{ fontWeight: "bold", fontSize: "large" }}
                          >
                            Recipient:
                          </span>{" "}
                          {item.recipientEmail}
                        </Text>
                        <Text>
                          <span
                            style={{ fontWeight: "bold", fontSize: "large" }}
                          >
                            Sender:
                          </span>{" "}
                          {item.senderName}
                        </Text>
                        <Text>
                          <span
                            style={{ fontWeight: "bold", fontSize: "large" }}
                          >
                            Message:
                          </span>{" "}
                          {item.message || "N/A"}
                        </Text>
                      </VStack>
                    </Box>
                    <Spacer />
                    <Box>
                      <Button onClick={() => dispatch(increaseAmount(item.id))}>
                        <ChevronUpIcon />
                      </Button>
                      <Text py="6px" align="center">
                        Qty: {item.quantity}
                      </Text>
                      <Button onClick={() => dispatch(decreaseAmount(item.id))}>
                        <ChevronDownIcon />
                      </Button>
                    </Box>
                  </HStack>
                </HStack>
                {index !== cart.items.length - 1 && <Divider size="md" />}
              </>
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
