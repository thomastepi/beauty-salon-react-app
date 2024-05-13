import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center,
  Button,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";

const Success = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <Center bg="#092635" h="100vh">
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        w="50%"
        bg="#31363F"
        color="white"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Thank you for your purchase!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Your gift card has been successfully delivered to the recipient's
          email address. They'll be delighted to receive this thoughtful gift.
        </AlertDescription>
        <Button onClick={() => navigate("/")} py="10px" mt="20px">
          Return to Home
        </Button>
      </Alert>
    </Center>
  );
};

export default Success;
