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
          We encountered an error processing your payment.
        </AlertDescription>
        <Button onClick={() => navigate("/gift-cards")} py="10px" mt="5px">
          Return to Shop
        </Button>
      </Alert>
    </Center>
  );
};

export default Cancel;
