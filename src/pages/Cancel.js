import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Center,
  Button,
} from "@chakra-ui/react";

const Cancel = () => {
  const navigate = useNavigate();
  return (
    <Center bg="#092635" h="100vh">
      <Alert
        status="error"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        w="50%"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Payment Cancelled
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Your transaction was canceled. You can return to the cart to try
          again.
        </AlertDescription>
        <Button onClick={() => navigate("/cart")} py="10px" mt="5px">
          Return to Cart
        </Button>
      </Alert>
    </Center>
  );
};

export default Cancel;
